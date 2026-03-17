import type { IUnidadMap} from './index.ts'

//types pra ipcRoutes
// export interface IpcMap {
//   "unidad:getAll": {
//     req: void;
//     res: ApiResponse<IUnidad[]>;
//   };

//   "unidad:create": {
//     req: IUnidad;
//     res: ApiResponse<IUnidad>;
//   };

//   "unidad:update": {
//     req: { id: string; data: Partial<IUnidad> };
//     res: ApiResponse<IUnidad>;
//   };

//   "unidad:delete": {
//     req: string;
//     res: ApiResponse<null>;
//   };
// }

export type TIpcMap = IUnidadMap 