import type { IOptionMenu } from "@/types/navbar";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<string | null >(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const optionMenu: IOptionMenu = {
    Vista: [{ name: "home", path: "/" }],
    Registro: [{ name: "material", path: "/registro/material" }],
    Editar: [{ name: "material", path: "/registro/material" }],
  };
  // Cerrar menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-around items-center bg-gray-500 shadow-md px-3 py-1 rounded-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 w-36 bg-amber-500">
        {/* <img
          src={notebook}
          alt="logo"
          className="cursor-pointer noMover hover:scale-110 transition-transform"
          onClick={() => navigate("/")}
          width={28}
        /> */}
        <h1 className="text-white font-bold tracking-wide text-sm">
          COSTOBRA
        </h1>
      </div>

      {/* Menú */}
      <div className="flex space-x-4 relative bg-amber-900" ref={menuRef}>
        {(Object.keys(optionMenu) as (keyof IOptionMenu)[]).map((menu) => (
          <div key={menu} className="relative">
            <button
              className={`px-3 py-1 text-white hover:bg-slate-800 hover:rounded-lg transition-colors ${
                openMenu === menu ? "bg-slate-800 rounded-lg" : ""
              }`}
              onMouseEnter={() => openMenu && setOpenMenu(menu)}
              onClick={() => setOpenMenu(openMenu === menu ? null : menu)}>
              {menu}
            </button>

            {/* Submenú animado */}
            {/* <AnimatePresence> */}
            {openMenu === menu && (
              <div
                // initial={{ opacity: 0, y: -10 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -10 }}
                // transition={{ duration: 0.2 }}
                className="absolute left-0 mt-1 w-36 bg-slate-950 shadow-lg rounded-md border border-slate-600 z-50">
                <ul className="divide-y divide-slate-700">
                  {optionMenu[menu].map((option) => (
                    <li
                      key={option.name}
                      className="px-4 py-2 text-sm text-white hover:bg-slate-700 cursor-pointer transition-colors"
                      onClick={() => {
                        setOpenMenu(null);
                        option.path ? navigate(option.path) : null;
                      }}>
                      {option.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* </AnimatePresence> */}
          </div>
        ))}
      </div>

      {/* Botones de ventana */}
      {/* <div className="flex space-x-2">
        <button
          onClick={() => window.Electrom.minimize()}
          className="p-1 rounded-md hover:bg-slate-700 transition"
        >
          <BsZoomOut className="text-lg text-yellow-400" />
        </button>
        <button
          onClick={() => window.Electron.maximize()}
          className="p-1 rounded-md hover:bg-slate-700 transition"
        >
          <BsZoomIn className="text-lg text-green-400" />
        </button>
        <button
          onClick={() => window.Electron.close()}
          className="p-1 rounded-md hover:bg-red-600 transition"
        >
          <BsXCircle className="text-lg text-red-400" />
        </button>
      </div> */}
    </nav>
  );
};
