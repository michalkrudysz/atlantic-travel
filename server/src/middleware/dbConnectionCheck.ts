import { Request, Response, NextFunction } from "express";
import sequelize from "../config/sequelize";

const dbConnectionCheck = (req: Request, res: Response, next: NextFunction) => {
  sequelize
    .authenticate()
    .then(() => {
      next();
    })
    .catch((err) => {
      console.error("Błąd połączenia z bazą danych:", err);
      res.status(503).send("Serwis niedostępny");
    });
};

export default dbConnectionCheck;
