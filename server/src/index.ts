import express from "express";
import "reflect-metadata";
import { dbConnectionCheck } from "./middleware/dbConnectionCheck";
import tripsRouter from "./routes/trips";
import schoolTripsRouter from "./routes/schoolTrips";
import testimonialsRouter from "./routes/testimonials";
import { corsMiddleware } from "./middleware/corsMiddleware";

const app = express();
const port = 3000;

app.use(corsMiddleware);

app.use(express.json());
// Serwowanie plików statycznych z folderu 'public'
app.use(express.static("public"));
// Middleware sprawdzający połączenie z bazą danych
app.use(dbConnectionCheck);

app.use("/trips", tripsRouter);
app.use("/school", schoolTripsRouter);
app.use("/testimonials", testimonialsRouter);

app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie: ${port}`);
});
