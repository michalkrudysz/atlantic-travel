"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
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
        jsonwebtoken_1.default.verify(token, secret, (error, decoded) => {
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
    }
    catch (error) {
        res.status(500).json({ message: "Wystąpił błąd serwera!" });
    }
};
exports.default = authMiddleware;
