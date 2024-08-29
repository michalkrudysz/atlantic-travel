import express from "express";
import "reflect-metadata";
import dbConnectionCheck from "./middleware/dbConnectionCheck";
import tripsRouter from "./routes/trips";
import schoolTripsRouter from "./routes/schoolTrips";
import testimonialsRouter from "./routes/testimonials";
import authRouter from "./routes/authRouter";
import dashboardRouter from "./routes/dashboardRouter";
import corsMiddleware from "./middleware/corsMiddleware";
import authMiddleware from "./middleware/authMiddleware";

const app = express();
app.use(corsMiddleware);
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(dbConnectionCheck);

app.use("/trips", tripsRouter);
app.use("/school", schoolTripsRouter);
app.use("/testimonials", testimonialsRouter);
app.use("/auth", authRouter);
app.use("/dashboard", authMiddleware, dashboardRouter);

app.listen(port, () => {
  console.log(`Serwer włączony na porcie: ${port}`);
});
