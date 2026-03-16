// import fs from "fs"
// import path from "path"
// import { ipcMain } from "electron"
// import { fileURLToPath, pathToFileURL } from "url"

// type IpcHandler = (...args: any[]) => any
// type IpcRouter = Record<string, IpcHandler>

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// export async function loadRouters() {
//   const modulesPath = path.join(__dirname, "../modules")
  
//   // Verificar si la carpeta modules existe
//   if (!fs.existsSync(modulesPath)) {
//     console.error(`La carpeta modules no existe en: ${modulesPath}`)
//     return
//   }

//   const modules = fs.readdirSync(modulesPath)
//   console.log(`Modulos encontrados: ${modules.join(', ')}`)

//   const extensions = [
//     // '.router.ts',
//      '.router.js',
//       '.router.mjs',
//        '.router.cjs'
//       ]

//   for (const mod of modules) {
//     let routerPath = null
//     const moduleFullPath = path.join(modulesPath, mod)
    
//     // Verificar que sea un directorio
//     if (!fs.statSync(moduleFullPath).isDirectory()) {
//       continue
//     }
    
//     // Buscar cualquier extensión válida
//     for (const ext of extensions) {
//       const testPath = path.join(moduleFullPath, `${mod}${ext}`)
//       console.log('testPath', testPath)
//       if (fs.existsSync(testPath)) {
//         routerPath = testPath
//         console.log('routerPath', routerPath)
//         break
//       }
//     }

//     if (routerPath) {
//       try {
//         console.log('routerPath', routerPath)
//         console.log(` Cargando router para modulo: ${mod}`)
//         console.log(`   Ruta: ${routerPath}`)
        
//         // Intentar importar el módulo
//         const module = await import(pathToFileURL(routerPath).href)
        
//         // Verificar si tiene export default
//         if (!module.default) {
//           console.warn(`El modulo ${mod} no tiene export default. Buscando exportaciones nombradas...`)
          
//           // Si no hay default, buscar si hay un router exportado
//           if (module.router && typeof module.router === 'object') {
//             console.log(`   Usando exportación nombrada 'router' para ${mod}`)
//             const router = module.router as IpcRouter
            
//             Object.entries(router).forEach(([channel, handler]) => {
//               console.log(`   🔌 Registrando IPC: ${channel}`)
//               ipcMain.handle(channel, (_, ...args) => {
//                 try {
//                   return handler(...args)
//                 } catch (error) {
//                   console.error(`Error en handler ${channel}:`, error)
//                   throw error
//                 }
//               })
//             })
//           } else {
//             console.warn(`   No se encontro router válido en ${mod}`)
//           }
//         } else {
//           // Usar el export default
//           const router = module.default as IpcRouter
//           console.log(` Router cargado para ${mod} con ${Object.keys(router).length} handlers`)
          
//           Object.entries(router).forEach(([channel, handler]) => {
//             console.log(`   🔌 Registrando IPC: ${channel}`)
//             ipcMain.handle(channel, (_, ...args) => {
//               try {
//                 return handler(...args)
//               } catch (error) {
//                 console.error(`Error en handler ${channel}:`, error)
//                 throw error
//               }
//             })
//           })
//         }
        
//       } catch (error) {
//         console.error(` Error cargando el modulo ${mod}:`, error)
        
//         // Información adicional para debug
//         if (error === 'ERR_MODULE_NOT_FOUND') {
//           console.error(`   Dependencia faltante en ${mod}.router.ts`)
//           console.error(`   Buscando: ${error}`)
//         }
//       }
//     } else {
//       console.log(`  No se encontro archivo router para el modulo: ${mod}`)
//       console.log(`   Extensiones buscadas: ${extensions.join(', ')}`)
//     }
//   }
  
//   console.log('Proceso de carga de routers completado')
// }