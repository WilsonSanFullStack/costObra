import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class ApuInsumos extends Model<
  InferAttributes<ApuInsumos, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<ApuInsumos>
> {
  declare id: CreationOptional<string>
  declare name: string
  declare cantidad: number

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  ApuInsumos.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "ApuInsumos",
      paranoid: true,
      timestamps: true
    }
  )

  return ApuInsumos
}