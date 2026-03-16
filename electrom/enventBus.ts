import { BrowserWindow } from "electron"

export function emit(channel: string, data?: any) {

  const windows = BrowserWindow.getAllWindows()

  windows.forEach(win => {
    win.webContents.send(channel, data)
  })

}