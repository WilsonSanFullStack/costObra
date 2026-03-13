import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class PrecioInsumo extends Model<
  InferAttributes<PrecioInsumo, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<PrecioInsumo>
> {
  declare id: CreationOptional<string>
  declare precio: number

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  PrecioInsumo.init(
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
      modelName: "PrecioInsumo",
      paranoid: true,
      timestamps: true
    }
  )

  return PrecioInsumo
}