import { ipcMain } from "electron";
// import type { IpcMap } from "../core/types.d.ts";
import {unidadRouter} from '../modules/unidad/router.ts'
import {categoriaInsumoRouter} from '../modules/categoriaInsumos/router.ts'

// type Channels = keyof IpcMap;

function register(router: Record<string, any>) {
  Object.entries(router).forEach(([channel, handler]) => {
    console.log("🔌 IPC:", channel);

    ipcMain.handle(channel, async (_, data) => {
      return handler(data);
    });
  });
}

export function registerIpcHandlers() {
  register(unidadRouter);
  register(categoriaInsumoRouter);
}