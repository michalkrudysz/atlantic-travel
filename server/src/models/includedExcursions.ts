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
  tableName: "includedexcursions",
  timestamps: false,
})
export class IncludedExcursions extends Model<IncludedExcursions> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  excursion_id!: number;

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

  @BelongsTo(() => Trips)
  trip!: Trips;
}
