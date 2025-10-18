import dotenv from "dotenv";
dotenv.config();

import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { Client } from "@notionhq/client";
import { bookingRouter } from "./routes/bookings.js";
import { authMiddleware, adminMiddleware } from "./middleware/auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Notion client initialization
export const notion = process.env.NOTION_API_KEY
  ? new Client({ auth: process.env.NOTION_API_KEY })
  : null;

if (!notion) {
  console.warn("⚠️  Notion client not initialized - API key missing");
}

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    notion: notion ? "✅ Connected" : "❌ Not configured"
  });
});

// Public API Routes
app.use("/api/bookings", bookingRouter);

// Admin dashboard endpoint (protected with auth)
app.get("/api/admin/dashboard", authMiddleware, adminMiddleware, (req, res) => {
  res.json({
    message: "Welcome to admin dashboard",
    notionDatabaseId: process.env.NOTION_DATABASE_ID ? "✅ Configured" : "❌ Missing"
  });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ Error:", err);

  res.status(err.status || 500).json({
    error: err.message || "Internal server error",
    ...(process.env.NODE_ENV === "development" && { details: err.stack })
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Notion client: ${notion ? "✅ Connected" : "❌ Not configured"}`);
  console.log(`🔐 Admin auth: ${process.env.ADMIN_EMAIL ? "✅ Configured" : "❌ Using defaults"}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});

export default app;
