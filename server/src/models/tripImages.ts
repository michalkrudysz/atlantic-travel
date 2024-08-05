import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Trips } from "./trips";

@Table({
  tableName: "tripimages",
  timestamps: false,
})
export class TripImages extends Model<TripImages> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  image_id!: number;

  @ForeignKey(() => Trips)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  trip_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  image_url!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;

  @BelongsTo(() => Trips)
  trip!: Trips;
}
