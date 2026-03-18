import React from "react";
import BotonHamburguesa from "./UI/Botones/BotonHamburguesa";
import BotonBuscar from "./UI/Botones/BotonBuscar";
import BotonHome from "./UI/Botones/BotonHome";
import BotonFavorito from "./UI/Botones/BotonFavorito";
import UserIcon from "@/app/Icons/UserIcon";

export default function HeaderComponent() {
  return (
    <div className=" felx w-full h-24 p-4 flex justify-between">
      <h2 className="text-2xl font-black text-slate-700">LOGO</h2>
      <div>
        <div className="hidden  lg:flex gap-4">
          
          <BotonFavorito size={32} />
          <BotonHome size={32} />
          <div className="bg-slate-300 rounded-full h-12 w-12 flex justify-center items-center">
              <UserIcon size={32} Styles='text-slate-700' />
          </div>
        </div>
        <div className="flex lg:hidden ">
          <BotonHamburguesa />
        </div>
      </div>
    </div>
  );
}
