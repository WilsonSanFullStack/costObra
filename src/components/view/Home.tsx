import { useEffect } from "react";
import { unidadCreate } from "../services/home.service";

export const Home = () => {
  useEffect(() => {
    try {
      
      unidadCreate();
      console.log("funcion", unidadCreate());
    } catch (error) {
      console.log(error)
    }
  }, []);
  return <div className="">Home</div>;
};
