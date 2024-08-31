import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

export const checkToken = (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Nie dostarczono tokenu" });
  }

  const token = authHeader.split(" ")[1];

  const jwtSecret: Secret = process.env.JWT_SECRET as Secret;
  if (!jwtSecret) {
    return res
      .status(500)
      .json({ message: "Sekret JWT nie jest zdefiniowany" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Nieprawidłowy token" });
    }
    res.status(200).json({ message: "Token jest prawidłowy", data: decoded });
  });
};
