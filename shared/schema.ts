import { z } from "zod";

// Booking schema for form validation and Notion integration
export const bookingSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().email("Invalid email address"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  message: z.string().max(500, "Message must be under 500 characters").optional().default("")
});

export type Booking = z.infer<typeof bookingSchema>;
