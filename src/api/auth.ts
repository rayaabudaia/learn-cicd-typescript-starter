import { Request } from "express";

export function getAPIKey(req: Request): string {
  const authHeader = req.get("Authorization");
  
  if (!authHeader) {
    throw new Error("No authorization header");
  }
  
  // تغيير متعمد: جعل الشرط يبحث عن "Bearer" بدلاً من "ApiKey"
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    throw new Error("Invalid authorization header format");
  }
  
  return parts[1];
}
