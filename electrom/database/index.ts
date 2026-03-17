import { sequelize } from "./db.ts";
import { loadModels } from "./loadModels.ts";
import { loadAssociations } from "./loadAssociations.ts";

export async function index() {
  try {

    // 1. Cargar modelos
    await loadModels();

    // 2. Cargar relaciones
    await loadAssociations();

    // 3. Sincronizar base de datos
    await sequelize.sync({ force: true }); // Usa alter en desarrollo
// console.log('sequelize.models en index', sequelize.models)
  } catch (error) {
    console.error("❌ Error inicializando DB:", error);
    throw error; // Re-lanzar para que se detecte en main.ts
  }
}

