import { useEffect } from "react";
import { unidadCreate, unidadGet } from "../../services/home.service";
// import type { IUnidad } from "@/types/home";

export const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const post = await unidadCreate();
        console.log("post", post);
        // console.log("funcion", unidadCreate());
        const get = await unidadGet();
        console.log("get", get);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return <div className="">Home</div>;
};
