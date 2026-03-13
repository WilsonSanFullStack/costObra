import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class Unidad extends Model<
  InferAttributes<Unidad, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<Unidad>
> {
  declare id: CreationOptional<string>
  declare name: string
  declare simbolo: string

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  Unidad.init(
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
      simbolo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "Unidad",
      paranoid: true,
      timestamps: true
    }
  )

  return Unidad
}