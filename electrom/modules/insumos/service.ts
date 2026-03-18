import { InsumoRepository } from "./repository.ts";
import { toPlain } from "../../core/utils.ts";
import { handleError } from "../../core/errorHandler.ts";
import type { TApiResponse, IInsumo } from "@shared/types";
import { emit } from "../../enventBus.ts";
import { EVENT } from "../../../shared/ipc/eventRoutes.ts";

const repo = new InsumoRepository();

export async function createInsumo(
  data: IInsumo,
): Promise<TApiResponse<IInsumo>> {
  try {
    const res = await repo.create(data);
    const item = toPlain<IInsumo>(res);
    emit(EVENT.insumo.create, item);
    return {
      success: true,
      data: item,
    };
  } catch (error) {
    return handleError(error, "Error al crear insumo");
  }
}

export async function getAllInsumo(): Promise<TApiResponse<IInsumo>> {
  try {
    const res = await repo.getAll();
    return {
      success: true,
      data: toPlain<IInsumo>(res),
    };
  } catch (error) {
    return handleError(error, "Error al obtener insumos");
  }
}

export async function updateInsumo(
  id: string,
  data: any,
): Promise<TApiResponse<IInsumo>> {
  try {
    const res = await repo.update(id, data);
    if (!res) {
      return {
        success: false,
        message: "Insumo no encontrado",
      };
    }
    const item = toPlain<IInsumo>(res);
    emit(EVENT.insumo.update, item);

    return {
      success: true,
      data: item,
    };
  } catch (error) {
    return handleError(error, "Error al actualizar insumo");
  }
}

export async function deleteInsumo(id: string): Promise<TApiResponse<null>> {
  try {
    const deleted = await repo.destroy(id);
    if (!deleted) {
      return {
        success: false,
        message: "Insumo no encontrado",
      };
    }

    emit(EVENT.insumo.delete, id);
    return {
      success: true,
      data: null,
      message: "Insumo eliminado",
    };
  } catch (error) {
    return handleError(error, "Error al eliminar insumo");
  }
}
