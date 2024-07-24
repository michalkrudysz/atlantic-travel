import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const createConnection = async (): Promise<mysql.Connection> => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Połączono z bazą danych.");
    return connection;
  } catch (err) {
    console.error("Błąd połączenia z bazą danych:", err);
    throw err;
  }
};

export default createConnection;
