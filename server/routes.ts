import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

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
      
      // For FormSubmit.co integration, we just validate and respond
      // The actual form submission will be handled directly by the frontend
      res.status(200).json({
        message: "Form validation successful",
        data: {
          name: validatedData.name,
          email: validatedData.email,
          timestamp: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
