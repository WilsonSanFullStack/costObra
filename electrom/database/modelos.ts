import { sequelize } from "./db.ts"
import type { ModelStatic } from "sequelize"

import { Unidad } from "./models/Unidad.model.ts"


export interface DBModels {

  Unidad: ModelStatic<Unidad>
  

}


export const modelos = sequelize.models as unknown as DBModels