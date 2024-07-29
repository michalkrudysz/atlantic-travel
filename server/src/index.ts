import express from "express";
import "reflect-metadata";
import { dbConnectionCheck } from "./middleware/dbConnectionCheck";
import tripsRouter from "./routes/trips";

const app = express();
const port = 3000;

app.use(express.json());
// Serwowanie plików statycznych z folderu 'public'
app.use(express.static("public"));
// Middleware sprawdzający połączenie z bazą danych
app.use(dbConnectionCheck);

app.use("/trips", tripsRouter);

app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie: ${port}`);
});
