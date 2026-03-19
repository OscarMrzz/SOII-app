import RutaItem from "./components/Rutas/RutaItem";
import { rutaInterface } from "./Interfaces/rutas.iterface";



const rutasList: rutaInterface[] = [
  {
    idRuta: "1",
    ruta: "SPS - El Progreso",
    inicioRuta: "SPS",
    finRuta: "Progreso",
    paradasRuta: [],
    precioRuta: 0,
    createdAtRuta: new Date(),
    updatedAtRuta: new Date(),
    activo: "1",
    imagenRuta: "",
  },
  {
    idRuta: "2",
    ruta: "SPS - La lima",
    inicioRuta: "SPS",
    finRuta: "La lima",
    paradasRuta: [],
    precioRuta: 0,
    createdAtRuta: new Date(),
    updatedAtRuta: new Date(),
    activo: "1",
    imagenRuta: "",
  },
  {
    idRuta: "3",
    ruta: "SPS-La pas",
    inicioRuta: "SPS",
    finRuta: "La pas",
    paradasRuta: [],
    precioRuta: 0,
    createdAtRuta: new Date(),
    updatedAtRuta: new Date(),
    activo: "1",
    imagenRuta: "",
  },
  {
    idRuta: "4",
    ruta: "SPS - Tegusigalpa",
    inicioRuta: "SPS",
    finRuta: "Tegusigalpa",
    paradasRuta: [],
    precioRuta: 0,
    createdAtRuta: new Date(),
    updatedAtRuta: new Date(),
    activo: "1",
    imagenRuta: "",
  },
  {
    idRuta: "5",
    ruta: "SPS - Copan Ruinas",
    inicioRuta: "SPS",
    finRuta: "Copan Ruinas",
    paradasRuta: [],
    precioRuta: 0,
    createdAtRuta: new Date(),
    updatedAtRuta: new Date(),
    activo: "1",
    imagenRuta: "",
  },
  {
    idRuta: "6",
    ruta: "SPS - La ceiba",
    inicioRuta: "SPS",
    finRuta: "La ceiba",
    paradasRuta: [],
    precioRuta: 0,
    createdAtRuta: new Date(),
    updatedAtRuta: new Date(),
    activo: "1",
    imagenRuta: "",
  },


]



export default function Home() {
  return (
    <div className="flex flex-col  h-full w-full  mx-auto ">
      <div className="w-full h-full  justify-center items-center flex flex-col gap-4 pt-24">
        <div>

      Proximo Autobus
        </div>
      <div className="text-6xl font-bold">
        12:30 PM
      </div>

      </div>
      <div className="bg-slate-600 rounded-t-md h-32 p-2 mb-2">
        <h2 className="text-2xl font-bold text-slate-300">Rutas en tu ubicacion</h2>
      </div>
      <div className="flex flex-col w-full h-120 min-h-120 overflow-y-auto gap-2 pb-48 px-2 lg:px-8">
        {
          rutasList.map((ruta) => (
           <RutaItem key={ruta.idRuta} ruta={ruta}  />
          ))
        }

       
      </div>
    </div>
  );
}
