import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, RotateCcw, Loader2 } from "lucide-react";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: number;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [previousResponseId, setPreviousResponseId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("musclecoach-chat-messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved messages");
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("musclecoach-chat-messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isStreaming) return;

    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsStreaming(true);
    setError(null);

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: inputValue,
          previousResponseId
        }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Er ging iets mis");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("Geen response stream");
      }

      let botMessageText = "";
      let currentResponseId: string | null = null;

      const botMessage: Message = {
        text: "",
        isUser: false,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, botMessage]);

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6);
            
            if (dataStr === '[DONE]') {
              continue;
            }

            try {
              const data = JSON.parse(dataStr);
              
              if (data.type === 'response.output_text.delta' && data.delta) {
                botMessageText += data.delta;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    ...newMessages[newMessages.length - 1],
                    text: botMessageText
                  };
                  return newMessages;
                });
              }

              if (data.type === 'response.done' && data.response?.id) {
                currentResponseId = data.response.id;
              }
            } catch (e) {
              // Skip invalid JSON lines
            }
          }
        }
      }

      if (currentResponseId) {
        setPreviousResponseId(currentResponseId);
      }

    } catch (err: any) {
      if (err.name === 'AbortError') {
        return;
      }
      
      console.error("Chat error:", err);
      setError(err.message || "Er ging iets mis. Probeer het opnieuw.");
      
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };

  const stopGenerating = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsStreaming(false);
    }
  };

  const startNewConversation = () => {
    setMessages([]);
    setPreviousResponseId(null);
    setError(null);
    localStorage.removeItem("musclecoach-chat-messages");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-primary text-primary-foreground shadow-lg z-[9999] hover:scale-110 transition-transform"
          data-testid="button-open-chat"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999] w-[calc(100vw-3rem)] sm:w-96 h-[calc(100vh-6rem)] sm:h-[600px] flex flex-col">
          <Card className="flex flex-col h-full shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b bg-card">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-base sm:text-lg">MuscleCoach Support</h3>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={startNewConversation}
                    className="h-8 w-8"
                    data-testid="button-new-conversation"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                  data-testid="button-close-chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.length === 0 && (
                <div className="flex items-center justify-center h-full text-center">
                  <div className="space-y-2 max-w-xs">
                    <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Hoi! Stel me een vraag over MuscleCoach en ik help je graag verder.
                    </p>
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-2 ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border'
                    }`}
                    data-testid={`message-${message.isUser ? 'user' : 'bot'}-${index}`}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                  </div>
                </div>
              ))}

              {isStreaming && messages[messages.length - 1]?.text === "" && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border rounded-lg px-4 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="flex justify-center">
                  <div className="bg-destructive/10 text-destructive border border-destructive/20 rounded-lg px-4 py-2 text-sm">
                    {error}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t bg-card">
              <div className="flex gap-2">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Stel je vraag..."
                  rows={1}
                  disabled={isStreaming}
                  className="flex-1 resize-none border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background disabled:opacity-50"
                  data-testid="input-chat-message"
                />
                {isStreaming ? (
                  <Button
                    onClick={stopGenerating}
                    size="icon"
                    variant="destructive"
                    data-testid="button-stop-generating"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={sendMessage}
                    size="icon"
                    disabled={!inputValue.trim()}
                    data-testid="button-send-message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
