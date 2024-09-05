"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const login = (req, res) => {
    try {
        const { password } = req.body;
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return res.status(500).json({
                message: "Błąd konfiguracji serwera: brakujący klucz sekretny JWT",
            });
        }
        if (password === process.env.ADMIN_PASSWORD) {
            const token = jsonwebtoken_1.default.sign({ admin: true }, secret, { expiresIn: "8h" });
            return res.status(200).json({ token });
        }
        else {
            return res.status(401).json({ message: "Niepoprawne hasło" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        }
        else {
            return res.status(500).send("An unexpected error occurred");
        }
    }
};
exports.login = login;
