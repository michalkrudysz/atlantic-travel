import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { Trips } from "./trips";

@Table({
  tableName: "optionalexcursions",
  timestamps: false,
})
export class OptionalExcursions extends Model<OptionalExcursions> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  optional_excursion_id!: number;

  @ForeignKey(() => Trips)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  trip_id!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;
}
