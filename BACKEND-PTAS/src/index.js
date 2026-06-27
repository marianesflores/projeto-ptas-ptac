import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { toNodeHandler } from "better-auth/node";

import { auth } from "./lib/auth.js";
import produtosRoutes from "./routes/produto.routes.js";

dotenv.config();

const app = express();
const PORT = 5500;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());

app.use("/api/produtos", produtosRoutes);
console.log("Rotas de produtos registradas em /api/produtos");

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Esta é a API do PTAC",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      auth: "/api/auth/get-session",
      plans: "/api/plans",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});