// Importowanie niezbędnych dekoratorów i typów danych z biblioteki sequelize-typescript
import { Table, Column, Model, DataType, HasOne } from "sequelize-typescript";
import { TripImages } from "./tripImages"; // Import modelu TripImages

// Definicja klasy modelu Trips, która odpowiada tabeli 'trips' w bazie danych
@Table({
  tableName: "trips", // Nazwa tabeli w bazie danych
  timestamps: false, // Brak automatycznych znaczników czasu (createdAt, updatedAt)
})
export class Trips extends Model<Trips> {
  @Column({
    type: DataType.INTEGER.UNSIGNED, // Typ danych kolumny
    primaryKey: true, // Oznaczenie kolumny jako klucza głównego
    autoIncrement: true, // Autoinkrementacja wartości
  })
  trip_id!: number;

  @Column({
    type: DataType.STRING(255), // Typ danych kolumny - string o maksymalnej długości 255 znaków
    allowNull: false, // Kolumna nie może przyjmować wartości NULL
  })
  title!: string;

  @Column({
    type: DataType.DATE, // Typ danych kolumny - data
    allowNull: false,
  })
  start_date!: Date;

  @Column({
    type: DataType.DATE, // Typ danych kolumny - data
    allowNull: false,
  })
  end_date!: Date;

  @Column({
    type: DataType.DECIMAL(10, 2), // Typ danych kolumny - liczba dziesiętna
    allowNull: false,
  })
  price_per_person!: number;

  @Column({
    type: DataType.DECIMAL(10, 2), // Typ danych kolumny - liczba dziesiętna
    allowNull: false,
  })
  additional_costs!: number;

  @Column({
    type: DataType.TEXT, // Typ danych kolumny - tekst
    allowNull: false,
  })
  description!: string;

  // Definicja relacji HasOne z modelem TripImages
  @HasOne(() => TripImages)
  image!: TripImages; // Relacja wskazuje, że jeden trip ma dokładnie jeden obraz
}
