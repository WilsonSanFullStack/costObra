import { modelos } from "../../database/modelos"


export class UnidadRepository{
  async getAll(){
    return modelos.Unidad.findAll()
  }

  async create(data){
    return modelos.Unidad.create(data)
  }
}