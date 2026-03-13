import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class CategoriaInsumo extends Model<
  InferAttributes<CategoriaInsumo, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<CategoriaInsumo>
> {
  declare id: CreationOptional<string>
  declare name: string
  declare activo: boolean

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  CategoriaInsumo.init(
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
      activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "CategoriaInsumo",
      paranoid: true,
      timestamps: true
    }
  )

  return CategoriaInsumo
}