// types unidad
export interface IUnidad {
  id?: string
  name: string;
  simbolo: string;
}

import type { TApiResponse } from "../index.ts";
import { IPC } from "@shared/ipc/ipcRoutes.ts";
//types pra ipcRoutes
export interface IUnidadMap {
  [IPC.unidad.getAll]: {
    req: void;
    res: TApiResponse<IUnidad[]>;
  };

  [IPC.unidad.create]: {
    req: IUnidad;
    res: TApiResponse<IUnidad>;
  };

  [IPC.unidad.update]: {
    req: { id: string; data: Partial<IUnidad> };
    res: TApiResponse<IUnidad>;
  };

  [IPC.unidad.delete]: {
    req: string;
    res: TApiResponse<null>;
  };
}
