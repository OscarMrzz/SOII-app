import React from "react";
import BotonHamburguesa from "@/components//UI/Botones/BotonHamburguesa";
import BotonBuscar from "@/components//UI/Botones/BotonBuscar";
import BotonHome from "@/components//UI/Botones/BotonHome";
import BotonFavorito from "@/components//UI/Botones/BotonFavorito";
import UserIcon from "@/Icons/UserIcon";
import SidebarMovil from "../Sidebar/SidebarMovil";

export default function HeaderComponent() {
  return (
    <div className=" felx w-full h-24 p-4 flex justify-between fixed   top-0 z-50">
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
       
          <SidebarMovil />
        </div>
      </div>
    </div>
  );
}
