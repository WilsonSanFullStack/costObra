import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class ListaPrecio extends Model<
  InferAttributes<ListaPrecio, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<ListaPrecio>
> {
  declare id: CreationOptional<string>
  declare name: string
  declare fecha: Date

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  ListaPrecio.init(
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
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "ListaPrecio",
      paranoid: true,
      timestamps: true
    }
  )

  return ListaPrecio
}