// import { error } from "console";
// import { modelos } from "../../database/modelos.ts";
// import type { IUnidad } from "../../core/types";

// export class UnidadRepository {
//   async getAll() {
//     return modelos.Unidad.findAll({
//       attributes: ["id", "name", "simbolo"],
//     });
//   }

//   async create(data: IUnidad) {
//     return modelos.Unidad.create(data);
//   }

//   async destroy(id: string) {
//     const deleteUnidad = await modelos.Unidad.findByPk(id);
//     if (!deleteUnidad) {
//       return {
//         sucess: false,
//         message: "Error no existe la unidad buscada",
//         error: error,
//       };
//     }
//     await deleteUnidad.destroy();
//   }
// }


import { BaseRepository } from "../../core/baseRepository.ts";
import { modelos } from "../../database/modelos.ts";


console.log('modelos', modelos.Unidad)
export class UnidadRepository extends BaseRepository {
  constructor() {
    super(modelos.Unidad);
  }
}
