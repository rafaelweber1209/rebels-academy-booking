import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const VECTOR_STORE_IDS = [
  "vs_68cdba5cb0688191856f589a70ca2439",
  "vs_68d95a9ec860819193d3126cb51f5041"
];

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/chat", async (req, res) => {
    try {
      const clientId = req.ip || 'unknown';
      
      if (!checkRateLimit(clientId)) {
        return res.status(429).json({
          error: "Te veel verzoeken. Probeer het later opnieuw."
        });
      }

      if (!OPENAI_API_KEY) {
        return res.status(500).json({
          error: "OpenAI API key niet geconfigureerd"
        });
      }

      const { message, previousResponseId } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({
          error: "Bericht is verplicht"
        });
      }

      const requestBody: any = {
        model: "gpt-5-nano",
        stream: true,
        reasoning: { effort: "medium" },
        text: { verbosity: "low" },
        tools: [
          {
            type: "file_search",
            vector_store_ids: VECTOR_STORE_IDS
          }
        ],
        input: [
          {
            role: "system",
            content: [{
              type: "input_text",
              text: "Je bent een behulpzame customer support chatbot voor MuscleCoach, een AI-powered fitness app. Beantwoord vragen over de app, features, training principes en gebruik van de app. Wees vriendelijk, bondig en to-the-point. Gebruik de beschikbare documentatie om accurate antwoorden te geven."
            }]
          },
          {
            role: "user",
            content: [{
              type: "input_text",
              text: message
            }]
          }
        ]
      };

      if (previousResponseId) {
        requestBody.previous_response_id = previousResponseId;
      }

      const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("OpenAI API error:", errorText);
        return res.status(response.status).json({
          error: "Er ging iets mis met de chatbot. Probeer het opnieuw."
        });
      }

      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        return res.status(500).json({
          error: "Kon geen verbinding maken met de chatbot"
        });
      }

      let buffer = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) {
            break;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (line.startsWith('data:')) {
              res.write(line + '\n');
              
              if (line.trim() === 'data: [DONE]') {
                res.write('\n');
              }
            } else if (line.trim() === '') {
              res.write('\n');
            }
          }
        }
        
        res.write('data: [DONE]\n\n');
      } catch (error) {
        console.error("Streaming error:", error);
      } finally {
        res.end();
      }

    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({
        error: "Er ging iets mis. Probeer het opnieuw."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
