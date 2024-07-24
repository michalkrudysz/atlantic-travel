import express from "express";
import "reflect-metadata";

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie: ${port}`);
});
