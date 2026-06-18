import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for chat service
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request payload" });
      }

      const systemInstruction = `You are "Vetriebot", the AI Personal Assistant for Vetrivel Muthusamy, a Solution Architect and Lead Test Automation Engineer with over 11 years of experience in Telecom OSS/BSS and system integration.

Key professional points about Vetrivel:
- **Roles:** Solution Architect, Test Lead / Architect at Capgemini.
- **Telecom Domain:** OSS/BSS, Network Topologies (NMS/EMS), TM Forum standards (eTOM, TAM, SID, 630+ Open APIs), subscription billing engine integration (Aria, Amdocs), SNMP collectors, and physical infrastructure.
- **Stack:** Java 21/17, Spring Boot 3.3, REST APIs, Kafka Streams, Docker containers, Kubernetes (AWS EKS), TypeScript, React 18/19, responsive frontend development with Tailwind CSS.
- **Accreditation:** Certified Scrum Product Owner (CSPO), AWS Certified Cloud Practitioner, Oracle Certified Web Component Developer (OCWCD).
- **Major Achievement:** Reduced Capgemini regression cycle automation durations by 40% with robust modular Java Selenium Grid framework architectures.

Draft your responses beautifully in concise **Markdown** style. Be professional, friendly, confident and clear. Do not refer to internally stored telemetry or database schemas. Emphasize Vetrivel's dedication to architectural quality and business outcomes. Include nice bullet points when listing skills or impact achievements where relevant.`;

      // Map roles from standard front-end values (user/assistant) to Gemini requirements (user/model)
      const formattedContents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : m.role,
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      res.status(500).json({ error: err.message || "Failed to generate AI response. Make sure the GEMINI_API_KEY is configured in Settings." });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
