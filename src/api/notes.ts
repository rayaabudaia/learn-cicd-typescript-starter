import { Request, Response } from "express";

interface User {
  id: string;
  name: string;
  email: string;
}

export async function handlerNotesGet(
  req: Request,
  res: Response,
): Promise<void> {
  try {
<<<<<<< HEAD
    const user = (req as unknown as { user: User }).user;
=======
    // استخدام any مؤقتاً
    const user = (req as any).user as User;
>>>>>>> main

    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    res.status(200).json({ message: "Notes fetched successfully" });
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function handlerNotesCreate(
  req: Request,
  res: Response,
): Promise<void> {
  try {
<<<<<<< HEAD
    const user = (req as unknown as { user: User }).user;
=======
    // استخدام any مؤقتاً
    const user = (req as any).user as User;
>>>>>>> main

    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const { title, content } = req.body;

    if (!title || !content) {
      res.status(400).json({ error: "Title and content are required" });
      return;
    }

    res.status(201).json({
      message: "Note created successfully",
      note: { title, content, userId: user.id },
    });
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
}
