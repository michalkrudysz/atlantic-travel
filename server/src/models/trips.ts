import {
  Table,
  Column,
  Model,
  DataType,
  HasOne,
  HasMany,
} from "sequelize-typescript";
import { TripImages } from "./tripImages";
import { TripDays } from "./tripDays";
import { IncludedExcursions } from "./includedExcursions";
import { OptionalExcursions } from "./optionalExcursions";
import { Services } from "./services";
import { TripContacts } from "./tripContacts";

@Table({
  tableName: "trips",
  timestamps: false,
})
export class Trips extends Model<Trips> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  trip_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_date!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date!: Date;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price_per_person!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  additional_costs!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  priority!: number;

  @HasOne(() => TripImages)
  image!: TripImages;

  @HasMany(() => TripDays)
  tripDays!: TripDays[];

  @HasMany(() => IncludedExcursions)
  includedExcursions!: IncludedExcursions[];

  @HasMany(() => OptionalExcursions)
  optionalExcursions!: OptionalExcursions[];

  @HasMany(() => Services)
  services!: Services[];

  @HasMany(() => TripContacts)
  tripContacts!: TripContacts[];
}
