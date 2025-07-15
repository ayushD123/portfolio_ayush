import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { sendContactEmail } from "./email";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Log the contact form submission
      console.log("Contact form submission:", {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        timestamp: new Date().toISOString(),
      });
      
      // Send email to site owner and confirmation to sender
      const emailSent = await sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      });
      
      if (emailSent) {
        res.status(200).json({
          message: "Message sent successfully! You'll receive a confirmation email shortly.",
          data: {
            name: validatedData.name,
            email: validatedData.email,
            timestamp: new Date().toISOString(),
          },
        });
      } else {
        res.status(500).json({
          message: "Failed to send email. Please try again or contact me directly at ayushdixit244@gmail.com",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      res.status(500).json({
        message: "Failed to send message. Please try again or contact me directly at ayushdixit244@gmail.com",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
