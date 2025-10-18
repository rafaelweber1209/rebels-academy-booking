import { Request, Response, NextFunction } from "express";

// Simple auth interface
declare global {
  namespace Express {
    interface Request {
      isAdmin?: boolean;
    }
  }
}

// Super simple auth middleware - validates email and password from env vars
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized - missing token" });
  }

  const token = authHeader.substring(7);

  // Simple token validation (in production, use proper JWT)
  const adminEmail = process.env.ADMIN_EMAIL || "admin@musclecoach.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  const expectedToken = Buffer.from(`${adminEmail}:${adminPassword}`).toString("base64");

  if (token !== expectedToken) {
    return res.status(403).json({ error: "Forbidden - invalid credentials" });
  }

  req.isAdmin = true;
  next();
}

// Admin-only middleware (requires auth)
export function adminMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!req.isAdmin) {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
}

// Generate token helper (for testing/login)
export function generateAdminToken(email: string, password: string): string {
  return Buffer.from(`${email}:${password}`).toString("base64");
}
