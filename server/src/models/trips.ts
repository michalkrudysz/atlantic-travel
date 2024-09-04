import {
  Table,
  Column,
  Model,
  DataType,
  HasOne,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Default,
} from "sequelize-typescript";

import { TripImages } from "./tripImages";
import { TripDays } from "./tripDays";
import { IncludedExcursions } from "./includedExcursions";
import { OptionalExcursions } from "./optionalExcursions";
import { Services } from "./services";
import { TripContacts } from "./tripContacts";

type TripsAttributes = {
  trip_id: number;
  title: string;
  start_date: Date;
  end_date: Date;
  price_per_person: number;
  additional_costs: number;
  description: string;
  priority: number;
};

type TripsCreationAttributes = {
  title: string;
  start_date: Date;
  end_date: Date;
  price_per_person?: number;
  additional_costs?: number;
  description?: string;
  priority?: number;
};

@Table({
  tableName: "trips",
  timestamps: false,
})
export class Trips extends Model<TripsAttributes, TripsCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  trip_id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  title!: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  start_date!: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  end_date!: Date;

  @AllowNull(false)
  @Default(0)
  @Column(DataType.DECIMAL(10, 2))
  price_per_person!: number;

  @AllowNull(false)
  @Default(0)
  @Column(DataType.DECIMAL(10, 2))
  additional_costs!: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description!: string;

  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
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
