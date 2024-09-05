"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const dbConnectionCheck_1 = __importDefault(require("./middleware/dbConnectionCheck"));
const trips_1 = __importDefault(require("./routes/trips"));
const schoolTrips_1 = __importDefault(require("./routes/schoolTrips"));
const testimonials_1 = __importDefault(require("./routes/testimonials"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const dashboardRouter_1 = __importDefault(require("./routes/dashboardRouter"));
const corsMiddleware_1 = __importDefault(require("./middleware/corsMiddleware"));
const authMiddleware_1 = __importDefault(require("./middleware/authMiddleware"));
const app = (0, express_1.default)();
app.use(corsMiddleware_1.default);
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use(dbConnectionCheck_1.default);
app.use("/trips", trips_1.default);
app.use("/school", schoolTrips_1.default);
app.use("/testimonials", testimonials_1.default);
app.use("/auth", authRouter_1.default);
app.use("/dashboard", authMiddleware_1.default, dashboardRouter_1.default);
app.listen(port, () => {
    console.log(`Serwer włączony na porcie: ${port}`);
});
