import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";
import { Trips } from "./trips";

type TripImagesAttributes = {
  image_id: number;
  trip_id: number;
  image_url: string;
  description: string;
};

type TripImagesCreationAttributes = Omit<TripImagesAttributes, "image_id">;

@Table({
  tableName: "tripimages",
  timestamps: false,
})
export class TripImages extends Model<
  TripImagesAttributes,
  TripImagesCreationAttributes
> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  image_id!: number;

  @ForeignKey(() => Trips)
  @Column(DataType.INTEGER)
  trip_id!: number;

  @Column(DataType.STRING(255))
  image_url!: string;

  @Column(DataType.TEXT)
  description!: string;

  @BelongsTo(() => Trips)
  trip!: Trips;
}
