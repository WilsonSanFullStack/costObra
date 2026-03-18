import { sequelize } from "./db.ts";
import type { ModelStatic } from "sequelize";

import { Unidad } from "./models/Unidad.model.ts";
import { CategoriaInsumo } from "./models/CategoriaInsumo.model.ts";
import { Insumo } from "../database/models/Insumo.model.ts";
import { CategoriaApu } from "./models/CategoriaApu.model.ts";
import { Apu } from "../database/models/Apu.model.ts";
import { ApuInsumo } from "../database/models/ApuInsumo.model.ts";
import { ListaPrecio } from "../database/models/ListaPrecio.model.ts";
import { PrecioInsumo } from "../database/models/PrecioInsumo.model.ts";
import { Partida } from "../database/models/Partida.model.ts";
import { Capitulo } from "../database/models/Capitulo.model.ts";
import { Proyecto } from "../database/models/Proyecto.model.ts";

export interface DBModels {
  Unidad: ModelStatic<Unidad>;
  CategoriaInsumo: ModelStatic<CategoriaInsumo>;
  Insumo: ModelStatic<Insumo>;
  CategoriaApu: ModelStatic<CategoriaApu>;
  Apu: ModelStatic<Apu>;
  ApuInsumo: ModelStatic<ApuInsumo>;
  ListaPrecio: ModelStatic<ListaPrecio>;
  PrecioInsumo: ModelStatic<PrecioInsumo>;
  Partida: ModelStatic<Partida>;
  Capitulo: ModelStatic<Capitulo>;
  Proyecto: ModelStatic<Proyecto>;
}

export function getModelos(): DBModels {
  return sequelize.models as unknown as DBModels;
}
