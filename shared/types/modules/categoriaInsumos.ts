//types categoriaInsumos
export interface ICategoriaInsumos {
  id?: string
  name: string
  activo: boolean
}

import type { TApiResponse } from "../index.ts";
import { IPC } from "@shared/ipc/ipcRoutes.ts";
//types pra ipcRoutes
export interface ICategoriaInsumosMap {
  [IPC.categoriaInsumo.getAll]: {
    req: void;
    res: TApiResponse<ICategoriaInsumos[]>;
  };

  [IPC.categoriaInsumo.create]: {
    req: ICategoriaInsumos;
    res: TApiResponse<ICategoriaInsumos>;
  };

  [IPC.categoriaInsumo.update]: {
    req: { id: string; data: Partial<ICategoriaInsumos> };
    res: TApiResponse<ICategoriaInsumos>;
  };

  [IPC.categoriaInsumo.delete]: {
    req: string;
    res: TApiResponse<null>;
  };
}
