import { invoke } from "@shared/ipc/ipcClient";
import { IPC } from "@shared/ipc/ipcRoutes.ts";
import type { ICategoriaInsumos, IUnidad } from "@shared/types";

export async function unidadCreate() {
  try {
    const res = await invoke(IPC.unidad.create, {
      name: "Litro",
      simbolo: "l",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function unidadGet(setUnidad: React.Dispatch<React.SetStateAction<IUnidad[]>>) {
  try {
    const res = await invoke(IPC.unidad.getAll);
    if(res.success){
      setUnidad(res.data)
    }
    return res
  } catch (error) {
    console.log(error);
  }
}
export async function categoriaInsumoCreate() {
  try {
    const res = await invoke(IPC.categoriaInsumo.create, {
      name: "cemento",
      activo: true,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function categoriaInsumoGet(setCategoriaInsumo: React.Dispatch<React.SetStateAction<ICategoriaInsumos[]>>) {
  try {
    const res = await invoke(IPC.categoriaInsumo.getAll);
    if(res.success) { setCategoriaInsumo(res.data)}
    return res
  } catch (error) {
    console.log(error);
  }
}
