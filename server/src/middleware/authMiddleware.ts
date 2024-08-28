import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Brak tokenu autoryzującego!" });
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res
        .status(500)
        .json({ message: "Sekret JWT nie jest skonfigurowany!" });
    }
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        switch (error.name) {
          case "TokenExpiredError":
            return res.status(401).json({ message: "Token stracił ważność!" });
          case "JsonWebTokenError":
            return res
              .status(401)
              .json({ message: "Token jest nieprawidłowy!" });
          case "NotBeforeError":
            return res
              .status(401)
              .json({ message: "Token jeszcze nie jest aktywny!" });
          default:
            return res
              .status(401)
              .json({ message: "Wystąpił błąd przy próbie autoryzacji!" });
        }
      }
      next();
    });
  } catch (error) {
    res.status(500).json({ message: "Wystąpił błąd serwera!" });
  }
};

export default authMiddleware;
