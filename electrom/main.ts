import { app, BrowserWindow } from "electron";
import path from "path";
import { index } from "./database/index.ts";
import { fileURLToPath } from "url";
// import { loadRouters } from "./ipc/loader.ts";
import { registerIpcHandlers } from "./ipc/ipcMin.ts";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



let win: BrowserWindow | null = null;

app.whenReady().then(async () => {
  //TODO conexion de base de datos
  await index(); //sincroniza la db sin eliminar datos
  console.log("🔹 Base de datos lista");

  //TODO carga de ipcMain
  
  await registerIpcHandlers();
  

  function createWindow() {
    win = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        preload: path.join(__dirname, '../dist-electron', 'preload.js'),
        // preload: './preload.ts',
        contextIsolation: true,
        nodeIntegration: true,
        
      },
    });

    // ipcMain.handle();
    if (process.env.NODE_ENV === "development") {
      win.loadURL("http://localhost:5173"); // 🔥 Carga desde Vite en dev
    } else {
      // mainWindow.loadFile("dist/index.html"); // 📦 Carga el archivo en producción
      win.loadURL(`file://${path.join(__dirname, "../dist/index.html")}`);
    }
    // if (process.env.VITE_DEV_SERVER_URL) {
    //   win.loadURL(process.env.VITE_DEV_SERVER_URL)
    // } else {
    //   const htmlPath = path.join(__dirname, "..", "dist", "index.html");
    //   win.loadFile(htmlPath);
    //   // win.loadFile(path.join(__dirname, "../dist/index.html"))
    // }
  }

  app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
});
