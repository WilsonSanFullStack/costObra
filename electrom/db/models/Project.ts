import { Sequelize, DataTypes, Model } from "sequelize"
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize"

export class Project extends Model<
  InferAttributes<Project, { omit: "createdAt" | "updatedAt" | "deletedAt" }>,
  InferCreationAttributes<Project>
> {
  declare id: CreationOptional<string>
  declare name: string
  declare descripcion: string
  declare fecha: Date
  declare activo: boolean

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  declare deletedAt: CreationOptional<Date>
}

export default (sequelize: Sequelize) => {
  Project.init(
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
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
      activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "Project",
      paranoid: true,
      timestamps: true
    }
  )

  return Project
}