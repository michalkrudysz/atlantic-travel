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

@Table({
  tableName: "tripcontacts",
  timestamps: false,
})
export class TripContacts extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  contact_id!: number;

  @ForeignKey(() => Trips)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  trip_id!: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
  phone1?: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
  phone2?: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
  phone3?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  email1?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  email2?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  payment_instructions?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  additional_description?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  payment_reference?: string;

  @BelongsTo(() => Trips)
  trip!: Trips;
}
