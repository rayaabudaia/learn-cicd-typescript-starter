import express from "express";
import cors from "cors";
import { config } from "./config.js";
import { v1Router } from "./api/v1.js";

const app = express();
const PORT = config.api.port ? parseInt(config.api.port) : 8080;

app.use(cors());
app.use(express.json());

// إضافة مسار / ليرجع 200
app.get("/", (req, res) => {
  res.status(200).send("Notely is running");
});

app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

app.use("/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
