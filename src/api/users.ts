import { Request, Response } from "express";

interface User {
  id: string;
  name: string;
  email: string;
}

export async function handlerUsersGet(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const user = (req as { user?: User }).user;

    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    res.status(200).json({ message: "Users fetched successfully" });
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
}
