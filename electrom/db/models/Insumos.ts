import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class Insumos extends Model<
  InferAttributes<Insumos, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<Insumos>
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
  Insumos.init(
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
      modelName: "Insumos",
      paranoid: true,
      timestamps: true
    }
  )

  return Insumos
}