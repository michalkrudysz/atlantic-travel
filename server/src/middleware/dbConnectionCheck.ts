import { Request, Response, NextFunction } from "express";
import sequelize from "../config/sequelize";

export const dbConnectionCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  sequelize
    .authenticate()
    .then(() => {
      next();
    })
    .catch((err) => {
      console.error("Błąd połączenia z baząą danych:", err);
      res.status(503).send("Serwis niedostępny");
    });
};
