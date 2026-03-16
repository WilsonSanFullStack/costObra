import type { IUnidad } from "./types";
import { createUnidad, getAllUnidades } from "./unidad.service.ts";

export  const unidadRouter ={

  "unidad:getAll": () => 
    getAllUnidades(),

  "unidad:create": (data: IUnidad) => {
    console.log("data", data)
    return createUnidad(data)
  }

}