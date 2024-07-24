import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "trips",
  timestamps: false,
})
export class Trip extends Model<Trip> {
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
}
