// Import klasy Sequelize i interfejsu SequelizeOptions z biblioteki sequelize-typescript
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
// Import modelu Trips, który zostanie zdefiniowany w innych plikach
import { Trips } from "../models/trips";
import { TripImages } from "../models/tripImages";
import { TripDays } from "../models/tripDays";
import { IncludedExcursions } from "../models/includedExcursions";
import { OptionalExcursions } from "../models/optionalExcursions";
import { Services } from "../models/services";
import { TripContacts } from "../models/tripContacts";
// Import modułu dotenv do zarządzania zmiennymi środowiskowymi
import dotenv from "dotenv";

// Ładowanie zmiennych środowiskowych z pliku .env
dotenv.config();

// Definicja opcji konfiguracyjnych dla instancji Sequelize
const sequelizeOptions: SequelizeOptions = {
  host: process.env.DB_HOST, // Host bazy danych zmienna środowiskowa
  dialect: "mysql", // Typ dialektu bazy danych, tutaj MySQL
  logging: false, // Wyłączenie logowania zapytań do konsoli
  pool: {
    // Konfiguracja puli połączeń
    max: 100, // Maksymalna liczba połączeń
    min: 0, // Minimalna liczba połączeń
    acquire: 30000, // Maksymalny czas, w jakim klient będzie próbował nawiązać połączenie
    idle: 10000, // Maksymalny czas, w jakim połączenie może być bezczynne przed zamknięciem
  },
};

// Tworzenie nowej instancji Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME ?? "", // Nazwa bazy danych
  process.env.DB_USER ?? "", // Nazwa użytkownika bazy danych
  process.env.DB_PASSWORD ?? "", // Hasło bazy danych
  sequelizeOptions // Przekazanie wcześniej zdefiniowanych opcji
);

// Dodanie modeli do instancji Sequelize
sequelize.addModels([
  Trips,
  TripImages,
  TripDays,
  IncludedExcursions,
  OptionalExcursions,
  Services,
  TripContacts,
]);

// Eksportowanie instancji Sequelize
export default sequelize;
