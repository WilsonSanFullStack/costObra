import { IPC } from "../../../shared/ipc/ipcRoutes.ts";
import type { IInsumo } from "@shared/types/index.ts";
import {
  createInsumo,
  getAllInsumo,
  updateInsumo,
  deleteInsumo,
} from "./service.ts";

export const insumoRouter = {
  [IPC.insumo.create]: (data: IInsumo) => createInsumo(data),

  [IPC.insumo.getAll]: () => getAllInsumo(),

  [IPC.insumo.update]: (payload: { id: string; data: Partial<IInsumo> }) =>
    updateInsumo(payload.id, payload.data),

  [IPC.insumo.delete]: (id: string) => deleteInsumo(id),
};
