import { IPC } from "../../../shared/ipc/ipcRoutes.ts";
import { createCategoriaInsumo, getAllCategoriaInsumo } from "./service.ts";
import type { ICategoriaInsumos } from "@shared/types";

export const categoriaInsumoRouter = {
  [IPC.categoriaInsumo.create]: (data: ICategoriaInsumos) =>
    createCategoriaInsumo(data),
  [IPC.categoriaInsumo.getAll]: () => getAllCategoriaInsumo(),
};
