
export const IPC = {
  unidad: {
    getAll: "unidad:getAll",
    create: "unidad:create",
    update: "unidad:update",
    delete: "unidad:delete",
  },
  categoriaInsumo: {
    getAll: "categoriaInsumo:getAll",
    create: "categoriaInsumo:create",
    update: "categoriaInsumo:update",
    delete: "categoriaInsumo:delete",
  },
  insumo: {
    getAll: "insumo:getAll",
    create: "insumo:create",
    update: "insumo:update",
    delete: "insumo:delete",
  },
  categoriaApu: {
    getAll: "categoriaApu:getAll",
    create: "categoriaApu:create",
    update: "categoriaApu:update",
    delete: "categoriaApu:delete",
  },
  apu: {
    getAll: "apu:getAll",
    create: "apu:create",
    update: "apu:update",
    delete: "apu:delete",
  },
  apuInsumo: {
    getAll: "apuInsumo:getAll",
    create: "apuInsumo:create",
    update: "apuInsumo:update",
    delete: "apuInsumo:delete",
  },
  listaPrecio: {
    getAll: "listaPrecio:getAll",
    create: "listaPrecio:create",
    update: "listaPrecio:update",
    delete: "listaPrecio:delete",
  },
  precioInsumo: {
    getAll: "precioInsumo:getAll",
    create: "precioInsumo:create",
    update: "precioInsumo:update",
    delete: "precioInsumo:delete",
  },
  partida: {
    getAll: "partida:getAll",
    create: "partida:create",
    update: "partida:update",
    delete: "partida:delete",
  },
  capitulo: {
    getAll: "capitulo:getAll",
    create: "capitulo:create",
    update: "capitulo:update",
    delete: "capitulo:delete",
  },
  proyecto: {
    getAll: "proyecto:getAll",
    create: "proyecto:create",
    update: "proyecto:update",
    delete: "proyecto:delete",
  },
} as const;