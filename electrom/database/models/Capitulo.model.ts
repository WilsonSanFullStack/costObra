import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class Capitulo extends Model<
  InferAttributes<Capitulo, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<Capitulo>
> {
  declare id: CreationOptional<string>
  declare name: string
  declare codigo: string
  declare orden: string

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  Capitulo.init(
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
      codigo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      orden: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "Capitulo",
      paranoid: true,
      timestamps: true
    }
  )

  return Capitulo
}