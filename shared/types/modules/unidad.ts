// types unidad
export interface IUnidad {
  name: string;
  simbolo: string;
}

import type { ApiResponse } from "../index.ts";
import { IPC } from "@shared/ipc/ipcRoutes.ts";
//types pra ipcRoutes
export interface IUnidadMap {
  [IPC.unidad.getAll]: {
    req: void;
    res: ApiResponse<IUnidad[]>;
  };

  [IPC.unidad.create]: {
    req: IUnidad;
    res: ApiResponse<IUnidad>;
  };

  [IPC.unidad.update]: {
    req: { id: string; data: Partial<IUnidad> };
    res: ApiResponse<IUnidad>;
  };

  [IPC.unidad.delete]: {
    req: string;
    res: ApiResponse<null>;
  };
}
