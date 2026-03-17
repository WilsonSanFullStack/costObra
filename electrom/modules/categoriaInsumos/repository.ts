import { modelos } from "../../database/modelos.ts";
import type { ICategoriaInsumos } from "../../../shared/types/ipcMap.ts";

export class CategoriaInsumoRepository {
  async getAll() {
    return modelos.CategoriaInsumo.findAll({
      attributes: ["id", "name", "activo"],
    });
  }

  async create(data: ICategoriaInsumos) {
    return modelos.CategoriaInsumo.create(data);
  }
}
