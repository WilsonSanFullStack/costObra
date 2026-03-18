//types categoriaInsumos
export interface IInsumo {
  id: string;
  name: string;
  tipo: string;
  activo: boolean;
}

import type { TApiResponse } from "../index.ts";
import { IPC } from "@shared/ipc/ipcRoutes.ts";
//types pra ipcRoutes
export interface IInsumoMap {
  [IPC.insumo.getAll]: {
    req: void;
    res: TApiResponse<IInsumo[]>;
  };

  [IPC.insumo.create]: {
    req: IInsumo;
    res: TApiResponse<IInsumo>;
  };

  [IPC.insumo.update]: {
    req: { id: string; data: Partial<IInsumo> };
    res: TApiResponse<IInsumo>;
  };

  [IPC.insumo.delete]: {
    req: string;
    res: TApiResponse<null>;
  };
}
