import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class PrecioInsumos extends Model<
  InferAttributes<PrecioInsumos, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<PrecioInsumos>
> {
  declare id: CreationOptional<string>
  declare precio: number

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  PrecioInsumos.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      precio: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "PrecioInsumos",
      paranoid: true,
      timestamps: true
    }
  )

  return PrecioInsumos
}