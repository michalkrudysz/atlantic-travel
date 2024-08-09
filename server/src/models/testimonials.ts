import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "testimonials",
  timestamps: false,
})
export class Testimonials extends Model<Testimonials> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  testimonial_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  file_url!: string;
}
