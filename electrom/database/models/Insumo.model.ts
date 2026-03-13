import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class Insumo extends Model<
  InferAttributes<Insumo, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<Insumo>
> {
  declare id: CreationOptional<string>
  declare name: string
  declare tipo: string
  declare activo: boolean

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  Insumo.init(
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
      tipo: {
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
      modelName: "Insumo",
      paranoid: true,
      timestamps: true
    }
  )

  return Insumo
}