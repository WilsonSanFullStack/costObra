import { contextBridge, ipcRenderer } from "electron";
import type {IpcRendererEvent} from 'electron'

contextBridge.exposeInMainWorld("api", {
  invoke: (channel: string, ...args: unknown[]) =>
    ipcRenderer.invoke(channel, ...args),

  on: (event: string, callback: (data: unknown) => void) =>
    ipcRenderer.on(event, (_: IpcRendererEvent, data: unknown) =>
      callback(data),
    ),
});
