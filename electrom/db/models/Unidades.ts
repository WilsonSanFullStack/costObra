import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class Unidades extends Model<
  InferAttributes<Unidades, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<Unidades>
> {
  declare id: CreationOptional<string>
  declare dolar: number
  declare euro: number
  declare gbp: number
  declare porcentaje: number

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  Unidades.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      dolar: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      euro: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      gbp: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      porcentaje: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "Unidades",
      paranoid: true,
      timestamps: true
    }
  )

  return Unidades
}