import { Sequelize } from "sequelize"
import path from "path"
import { fileURLToPath } from "url"

import initApu from './models/Apu.ts'
import initApuInsumos from './models/ApuInsumos.ts'
import initCapitulos from './models/Capitulos.ts'
import initCatApu from './models/CatApu.ts'
import initCapInsumos from './models/CatInsumos.ts'
import initInsumos from './models/Insumos.ts'
import initListPrecio from './models/ListPrecio.ts'
import initPartidas  from './models/Partidas.ts'
import initPrecioInsumos from './models/PrecioInsumos.ts'
import initProject from './models/Project.ts'
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

initApu(sequelize)
initApuInsumos(sequelize)
initCapitulos(sequelize)
initCatApu(sequelize)
initCapInsumos(sequelize)
initInsumos(sequelize)
initListPrecio(sequelize)
initPartidas(sequelize)
initPrecioInsumos(sequelize)
initProject (sequelize)
initUnidades(sequelize)

/* exportar modelos */

export const { Unidades } = sequelize.models