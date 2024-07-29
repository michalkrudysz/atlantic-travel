import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { Trips } from "./trips";

@Table({
  tableName: "tripimages", // Nazwa tabeli w bazie danych
  timestamps: false, // Wyłączenie domyślnego dodawania kolumn timestamp (created_at, updated_at)
})
export class TripImages extends Model<TripImages> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true, // Ustawienie tej kolumny jako klucz główny
    autoIncrement: true, // Wartość kolumny będzie automatycznie inkrementowana
  })
  image_id!: number; // Identyfikator obrazu

  @ForeignKey(() => Trips)
  @Column({
    type: DataType.INTEGER,
    allowNull: true, // Kolumna może przyjąć wartość NULL
  })
  trip_id!: number; // Klucz obcy odnoszący się do tabeli Trips

  @Column({
    type: DataType.STRING(255),
    allowNull: true, // Kolumna może przyjąć wartość NULL
  })
  image_url!: string; // URL obrazu

  @Column({
    type: DataType.TEXT,
    allowNull: true, // Kolumna może przyjąć wartość NULL
  })
  description!: string; // Opis obrazu
}
