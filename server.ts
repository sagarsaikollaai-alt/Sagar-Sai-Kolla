import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

// Initialize Resend lazily to avoid crash if key is missing
let resend: Resend | null = null;
const getResend = () => {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!resend) resend = new Resend(key);
  return resend;
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Inquiry
  app.post("/api/inquiry", async (req, res) => {
    const { name, email, message, service } = req.body;

    console.log("-----------------------------------");
    console.log("NEW INQUIRY RECEIVED:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`Service: ${service || "General"}`);
    console.log("-----------------------------------");

    const mailer = getResend();
    
    if (mailer) {
      try {
        await mailer.emails.send({
          from: "Brightlume <onboarding@resend.dev>",
          to: "sagarsaikollaai@gmail.com",
          subject: `New Inquiry from ${name} - ${service || "General"}`,
          text: `
            Name: ${name}
            Email: ${email}
            Service: ${service || "General"}
            Message: ${message}
          `,
        });
        return res.json({ success: true, message: "Email sent successfully" });
      } catch (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ success: false, error: "Failed to send email" });
      }
    } else {
      // If no API key, we simulate success for the demo but warn in logs
      console.warn("RESEND_API_KEY is missing. Email not sent to sagarsaikollaai@gmail.com, but inquiry logged above.");
      return res.json({ 
        success: true, 
        message: "Inquiry received (Development Mode: Check console logs since RESEND_API_KEY is missing)" 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
