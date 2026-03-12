import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class CatInsumos extends Model<
  InferAttributes<CatInsumos, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<CatInsumos>
> {
  declare id: CreationOptional<string>
  declare name: string
  declare activo: boolean

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  CatInsumos.init(
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
      modelName: "CatInsumos",
      paranoid: true,
      timestamps: true
    }
  )

  return CatInsumos
}