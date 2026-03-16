import { modelos } from "../../database/modelos.ts"
import type { IUnidad } from "./types"

export class UnidadRepository{
  async getAll(){
    return modelos.Unidad.findAll()
  }

  async create(data:IUnidad){
    return modelos.Unidad.create(data)
  }
}