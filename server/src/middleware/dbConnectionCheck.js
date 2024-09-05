"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("../config/sequelize"));
const dbConnectionCheck = (req, res, next) => {
    sequelize_1.default
        .authenticate()
        .then(() => {
        next();
    })
        .catch((err) => {
        console.error("Błąd połączenia z bazą danych:", err);
        res.status(503).send("Serwis niedostępny");
    });
};
exports.default = dbConnectionCheck;
