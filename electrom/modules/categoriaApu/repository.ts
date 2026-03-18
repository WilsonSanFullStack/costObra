import { getModelos } from "../../database/modelos.ts";
import { BaseRepository } from "../../core/baseRepository.ts";
const { CategoriaApu } = getModelos();

export class CategoriaApuRepository extends BaseRepository {
  constructor() {
    super(CategoriaApu);
  }
}
