import type { ICategoriaInsumos } from "../../../shared/types/ipcMap.ts";
import { createCategoriaInsumo, getAllCategoriaInsumo } from "./service.ts";

export const categoriaInsumoRouter = {
  "categoriaInsumo:create": () => getAllCategoriaInsumo(),
  "categoriaInsumo:getAll": (data: ICategoriaInsumos) =>
    createCategoriaInsumo(data),
};
