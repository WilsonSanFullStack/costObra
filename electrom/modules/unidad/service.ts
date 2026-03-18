import { UnidadRepository } from "./repository.ts";
import { toPlain } from "../../core/utils.ts";
import { handleError } from "../../core/errorHandler.ts";
import type { TApiResponse, IUnidad } from "@shared/types";
import { emit } from "../../enventBus.ts";
import { EVENT } from "../../../shared/ipc/eventRoutes.ts";

const repo = new UnidadRepository();

export async function createUnidad(
  data: IUnidad,
): Promise<TApiResponse<IUnidad>> {
  try {
    const res = await repo.create(data);
    const item = toPlain<IUnidad>(res);

    emit(EVENT.unidad.create, item);

    return {
      success: true,
      data: item,
    };
  } catch (error) {
    return handleError(error, "Error al crear unidad");
  }
}

export async function getAllUnidades(): Promise<TApiResponse<IUnidad[]>> {
  try {
    const res = await repo.getAll();
    return {
      success: true,
      data: toPlain<IUnidad[]>(res),
    };
  } catch (error) {
    return handleError(error, "Error al obtener unidades");
  }
}


export async function updateUnidad(
  id: string,
  data: any,
): Promise<TApiResponse<any>> {
  try {
    const res = await repo.update(id, data);

    if (!res) {
      return {
        success: false,
        message: "Unidad no encontrada",
      };
    }

    const item = toPlain<IUnidad>(res);

    emit(EVENT.unidad.update, item);

    return {
      success: true,
      data: item,
    };
  } catch (error) {
    return handleError(error, "Error al actualizar unidad");
  }
}

export async function deleteUnidad(id: string): Promise<TApiResponse<null>> {
  try {
    const deleted = await repo.destroy(id);

    if (!deleted) {
      return {
        success: false,
        message: "Unidad no encontrada",
      };
    }

    emit(EVENT.unidad.delete, id);

    return {
      success: true,
      data: null,
      message: "Unidad eliminada",
    };
  } catch (error) {
    return handleError(error, "Error al eliminar unidad");
  }
}
