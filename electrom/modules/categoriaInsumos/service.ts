import { CategoriaInsumoRepository } from "./repository.ts";
import type { ICategoriaInsumos } from "@shared/types";
import { emit } from "../../enventBus.ts";

const repo = new CategoriaInsumoRepository();

export async function createCategoriaInsumo(data: ICategoriaInsumos) {
  const res = await repo.create(data);
  const item = res.dataValues;
  emit("categoriaInsumo:create", item);
  return item;
}

export async function getAllCategoriaInsumo() {
  const item = await repo.getAll();
  const res = item[0].dataValues;
  return res;
}
