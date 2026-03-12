import { Sequelize } from "sequelize"
import path from "path"
import { fileURLToPath } from "url"

import initUnidades from "./models/Unidades.ts"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dbPath = path.join(__dirname, "database.sqlite")

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: false
})

/* inicializar modelos */

initUnidades(sequelize)

/* exportar modelos */

export const { Unidades } = sequelize.models