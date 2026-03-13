import {Unidad } from './models/Unidad.model.ts'
// import {Apu} from '../models/Apu.model'
import {Insumo} from './models/Insumo.model.ts'

export function loadAssociations (){
  //* relation unidade a insumos
  Insumo.belongsTo(Unidad, {foreignKey: 'unidadId'})
  Unidad.hasMany(Insumo, {foreignKey: 'unidadId'})

  

}