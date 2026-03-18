import { useEffect, useState } from "react";
import {
  unidadCreate,
  unidadGet,
  categoriaInsumoCreate,
  categoriaInsumoGet,
} from "../../services/home.service";
import type { ICategoriaInsumos, IUnidad } from "@shared/types";
// import type { IUnidad } from "@/types/home";

export const Home = () => {
  const [unidad, setUnidad] = useState<IUnidad[]>([]);
  const [categoriaInsumo, setCategoriaInsumo] = useState<ICategoriaInsumos[]>(
    [],
  );
  useEffect(() => {
    const post = async () => {
      try {
        await unidadCreate();
        await categoriaInsumoCreate();
        // console.log("funcion", unidadCreate());
        const U = await unidadGet(setUnidad);
        const C = await categoriaInsumoGet(setCategoriaInsumo);
        console.log("unidad", U);
        console.log("categoriaInsimo", C);
      } catch (error) {
        console.log(error);
      }
    };
    post();
  }, []);
  return (
    <div className="text-white grid grid-cols-2 text-center justify-between h-full mt-20">
      <div className="space-y-3 bg-gray-500">
        {unidad.map((u) => {
          return (
            <div key={u.id} className="flex justify-center flex-row space-x-3">
              <div>id: {u.id}</div>
              <div>nombre: {u.name}</div>
              <div className="uppercase">simbolo: {u.simbolo}</div>
            </div>
          );
        })}
      </div>
      <div className="space-y-3">
        {categoriaInsumo.map((c) => {
          return (
            <div key={c.id} className="flex justify-center flex-row space-x-3">
              <div>id: {c.id}</div>
              <div>nombre: {c.name}</div>
              <div>activo: {c.activo?'si':'no'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
