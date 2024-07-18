import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie: ${port}`);
});
