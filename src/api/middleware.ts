import { Request, Response, NextFunction } from "express";
import { getAPIKey } from "./auth.js";

export function middlewareLogResponses(req: Request, res: Response, next: NextFunction) {
  res.on("finish", () => {
    if (res.statusCode >= 400) {
      console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${res.statusCode}`);
    }
  });
  next();
}

export function middlewareMetricsInc(req: Request, res: Response, next: NextFunction) {
  next();
}

export function middlewareAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const apiKey = getAPIKey(req);
    (req as any).apiKey = apiKey;
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
}
