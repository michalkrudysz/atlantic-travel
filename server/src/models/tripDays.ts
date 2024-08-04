import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { Trips } from "./trips";

@Table({
  tableName: "tripdays",
  timestamps: false,
})
export class TripDays extends Model<TripDays> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  day_id!: number;

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
  day_number!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;
}
