import { getModelos } from "../../database/modelos.ts";
import { BaseRepository } from "../../core/baseRepository.ts";

const { CategoriaInsumo } = getModelos();

export class CategoriaInsumoRepository extends BaseRepository {
  constructor() {
    super(CategoriaInsumo);
  }
}
