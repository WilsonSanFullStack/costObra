import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from "./db.ts"; // Importar la instancia de Sequelize

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadModels() {
  const modelsPath = path.join(__dirname, "./models");

  const files = fs.readdirSync(modelsPath);

  for (const file of files) {
    if (!file.endsWith(".model.ts") && !file.endsWith(".model.js")) continue;

    try {
      const filePath = path.join(modelsPath, file);
      const fileUrl = new URL(`file://${filePath}`).href;
      
      const module = await import(fileUrl);

      // Buscar la función exportada por defecto (la que inicializa el modelo)
      const initFunction = module.default;
      
      if (initFunction && typeof initFunction === "function") {
        // ✅ Pasar la instancia de sequelize a la función
        await initFunction(sequelize);
      } 
    } catch (error) {
      console.error(`❌ Error cargando modelo ${file}:`, error);
    }
  }
}