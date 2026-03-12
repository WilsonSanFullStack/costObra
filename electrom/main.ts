import { app, BrowserWindow } from "electron"
import path from "path"
import { sequelize } from "../electrom/db/db.ts"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


let win: BrowserWindow | null = null


app.whenReady().then(async () => {
  await sequelize.sync({ force: true }); //sincroniza la db sin eliminar datos
  console.log("🔹 Base de datos lista");

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      // preload: './preload.ts',
      contextIsolation: true,
      nodeIntegration: true,
      // contextIsolation: true,
      // enableRemoteModule: false,
      // nodeIntegration: false
    }
  })

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
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
})