import { getModelos } from "../../database/modelos.ts";
import { BaseRepository } from "../../core/baseRepository.ts";

const { Insumo } = getModelos();

export class InsumoRepository extends BaseRepository {
  constructor() {
    super(Insumo);
  }
}
