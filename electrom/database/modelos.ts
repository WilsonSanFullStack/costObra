import { sequelize } from "./db"
import { ModelStatic } from "sequelize"

import { Unidad } from "./models/Unidad.model"


export interface DBModels {

  Unidad: ModelStatic<Unidad>
  

}


export const modelos = sequelize.models as unknown as DBModels