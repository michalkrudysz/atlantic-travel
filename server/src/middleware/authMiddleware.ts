import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Brak tokenu autoryzującego!" });
    }
    const secret = process.env.JWT_SECRET || "default_secret";
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(401).json({ message: "Wystąpił błąd przy próbie autoryzacji!" });
  }
};
