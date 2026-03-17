import { sequelize } from "./db.ts"
import type { ModelStatic } from "sequelize"

import { Unidad } from "./models/Unidad.model.ts"
import { CategoriaInsumo } from './models/CategoriaInsumo.model.ts'

export interface DBModels {

  Unidad: ModelStatic<Unidad>
  CategoriaInsumo: ModelStatic<CategoriaInsumo>

}

console.log('sequelize.models in archivo modelos', sequelize.models)
export const modelos = sequelize.models as unknown as DBModels