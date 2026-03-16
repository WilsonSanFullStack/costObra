import { ipcMain } from "electron";
import { unidadRouter } from "../modules/unidad/unidad.router.ts";

type IpcHandler = (...args: any[]) => any;
type IpcRouter = Record<string, IpcHandler>;

function register(router: IpcRouter) {
  Object.entries(router).forEach(([channel, handler]) => {
    console.log("🔌 IPC:", channel);

    ipcMain.handle(channel, (_, ...args) => {
      return handler(...args);
    });
  });
}

export function registerIpcHandlers() {
  register(unidadRouter);
}
