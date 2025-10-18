import { Router, Request, Response } from "express";
import { notion } from "../index.js";
import { bookingSchema } from "../../shared/schema.js";

export const bookingRouter = Router();

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

// POST - Create new booking in Notion
bookingRouter.post("/", async (req: Request, res: Response) => {
  try {
    // Validate incoming data
    const validationResult = bookingSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: validationResult.error.errors
      });
    }

    if (!notion || !NOTION_DATABASE_ID) {
      return res.status(500).json({
        error: "Notion is not configured properly"
      });
    }

    const booking = validationResult.data;

    // Create Notion database entry
    const response = await notion.pages.create({
      parent: {
        database_id: NOTION_DATABASE_ID
      },
      properties: {
        "Name": {
          title: [
            {
              text: {
                content: booking.name
              }
            }
          ]
        },
        "Email": {
          email: booking.email
        },
        "Preferred Date": {
          date: {
            start: booking.preferredDate
          }
        },
        "Message": {
          rich_text: [
            {
              text: {
                content: booking.message || ""
              }
            }
          ]
        },
        "Status": {
          status: {
            name: "Not started"
          }
        }
      }
    });

    console.log(`✅ Booking created in Notion: ${booking.email}`);

    return res.status(201).json({
      success: true,
      message: "Booking submitted successfully!",
      id: response.id
    });

  } catch (error) {
    console.error("❌ Booking creation error:", error);

    if (error instanceof Error) {
      return res.status(500).json({
        error: "Failed to process booking",
        details: error.message
      });
    }

    return res.status(500).json({
      error: "An unexpected error occurred"
    });
  }
});

// GET - Fetch all bookings from Notion
bookingRouter.get("/", async (req: Request, res: Response) => {
  try {
    if (!notion || !NOTION_DATABASE_ID) {
      return res.status(500).json({ error: "Notion not configured" });
    }

    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID
    });

    const bookings = response.results.map((page: any) => ({
      id: page.id,
      name: page.properties.Name?.title?.[0]?.plain_text || "N/A",
      email: page.properties.Email?.email || "N/A",
      date: page.properties["Preferred Date"]?.date?.start || "N/A",
      status: page.properties.Status?.status?.name || "N/A",
      message: page.properties.Message?.rich_text?.[0]?.plain_text || ""
    }));

    return res.json({
      count: bookings.length,
      bookings
    });

  } catch (error) {
    console.error("❌ Error fetching bookings:", error);
    return res.status(500).json({
      error: "Failed to fetch bookings"
    });
  }
});
