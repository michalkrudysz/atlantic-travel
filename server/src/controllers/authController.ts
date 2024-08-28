import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return res
        .status(500)
        .json({
          message: "Błąd konfiguracji serwera: brakujący klucz sekretny JWT",
        });
    }

    if (password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ admin: true }, secret, { expiresIn: "1h" });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Niepoprawne hasło" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("An unexpected error occurred");
    }
  }
};
