import { Request, Response } from "express";

// تعريف User مؤقتاً لحين تصحيح المسار
interface User {
  id: string;
  name: string;
  email: string;
}

export async function handlerUsersGet(req: Request, res: Response): Promise<void> {
  try {
    // user موجود في req.user (من middlewareAuth)
    const user = (req as any).user as User;
    
    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    
    // هنا منطق جلب المستخدمين
    res.status(200).json({ message: "Users fetched successfully" });
    return;
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
}
