import { CategoriaInsumoRepository } from "./repository.ts";
import { toPlain } from "../../core/utils.ts";
import type { TApiResponse, ICategoriaInsumos } from "@shared/types";
import { emit } from "../../enventBus.ts";
import { EVENT } from "../../../shared/ipc/eventRoutes.ts";
import { handleError } from "../../core/errorHandler.ts";
const repo = new CategoriaInsumoRepository();

export async function createCategoriaInsumo(
  data: ICategoriaInsumos,
): Promise<TApiResponse<ICategoriaInsumos>> {
  try {
    const res = await repo.create(data);
    const item = toPlain<ICategoriaInsumos>(res);
    emit(EVENT.categoriaInsumo.create, item);

    return {
      success: true,
      data: item,
    };
  } catch (error) {
    return handleError(error, "Error al crear categoria insumo");
  }
}

export async function getAllCategoriaInsumo(): Promise<
  TApiResponse<ICategoriaInsumos[]>
> {
  try {
    const res = await repo.getAll();
    return {
      success: true,
      data: toPlain<ICategoriaInsumos[]>(res),
    };
  } catch (error) {
    return handleError(error, "Error al obtener las categorias de insumos");
  }
}
