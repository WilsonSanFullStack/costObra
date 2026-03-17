import { IPC } from "../../../shared/ipc/ipcRoutes.ts";
import type { IUnidad } from "@shared/types";
import {
  createUnidad,
  getAllUnidades,
  updateUnidad,
  deleteUnidad,
} from "./service.ts";

export const unidadRouter = {
  [IPC.unidad.getAll]: () => getAllUnidades(),

  [IPC.unidad.create]: (data: IUnidad) => createUnidad(data),

  [IPC.unidad.update]: (payload: { id: string; data: Partial<IUnidad> }) =>
    updateUnidad(payload.id, payload.data),

  [IPC.unidad.delete]: (id: string) => deleteUnidad(id),
};
