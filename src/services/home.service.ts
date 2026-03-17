import { invoke } from "@shared/ipc/ipcClient";
import { IPC } from "@shared/ipc/ipcRoutes.ts";
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
export async function unidadGet() {
  try {
    const res = await invoke(IPC.unidad.getAll);
    return res;
  } catch (error) {
    console.log(error);
  }
}
