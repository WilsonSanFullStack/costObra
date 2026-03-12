import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class Partidas extends Model<
  InferAttributes<Partidas, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<Partidas>
> {
  declare id: CreationOptional<string>
  declare codigo: string
  declare descripcion: string
  declare cantidad: number
  declare orden: string

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  Partidas.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      codigo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      orden: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "Partidas",
      paranoid: true,
      timestamps: true
    }
  )

  return Partidas
}