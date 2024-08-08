import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "schooltrips",
  timestamps: false,
})
export class SchoolTrips extends Model<SchoolTrips> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  school_trip_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  trip_duration!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  services!: string;
}
