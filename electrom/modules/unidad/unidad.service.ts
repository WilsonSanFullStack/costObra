import { emit } from "../../enventBus.ts";
import { UnidadRepository } from "./unidad.repository.ts";
import type { IUnidad } from "./types";

const repo = new UnidadRepository();

export async function createUnidad(data: IUnidad) {
  console.log(data);

  const item = await repo.create(data);

  emit("unidad:create", item);
  return item;
}

export async function getAllUnidades() {
  return repo.getAll();
}