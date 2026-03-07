import { Request, Response } from "express";

// تعريف User مؤقتاً
interface User {
  id: string;
  name: string;
  email: string;
}

export async function handlerNotesGet(req: Request, res: Response): Promise<void> {
  try {
    const user = (req as any).user as User;
    
    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    
    // هنا منطق جلب الملاحظات
    res.status(200).json({ message: "Notes fetched successfully" });
    return;
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
}

export async function handlerNotesCreate(req: Request, res: Response): Promise<void> {
  try {
    const user = (req as any).user as User;
    
    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    
    const { title, content } = req.body;
    
    if (!title || !content) {
      res.status(400).json({ error: "Title and content are required" });
      return;
    }
    
    // هنا منطق إنشاء ملاحظة جديدة
    res.status(201).json({ 
      message: "Note created successfully",
      note: { title, content, userId: user.id }
    });
    return;
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
}
