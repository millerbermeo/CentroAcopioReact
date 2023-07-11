import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";
import CardUser from "../components/CardUser";
import { Link } from "react-router-dom";
import React from "react";

function Residuos() {
  return (
    <>
      <div className="w-full flex justify-end">
        <Navbar />
        <Navtop />
        <div className="flex flex-col p-5 pt-24 w-[81%]">
          <h1 className="text-[17px] text-[gray]">
            Aqui puedes controlar la informacion de los Residuos:
          </h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center mt-6">
            <Link to="/crear-residuo">
              <CardUser
                tCard="Crear Residuo"
                bColor="indigo-500"
                dCard="Aqui puedes crear un nuevo Residuo"
                imgCard="desperdiciar.png"
              />
            </Link>
            <Link to="/allresiduos">
              <CardUser
                tCard="Ver Residuos"
                bColor="indigo-500"
                dCard="Aqui puedes ver todos los Residuos"
                imgCard="papelera-de-reciclaje.png"
              />
            </Link>
            <Link to="/showresiduos">
              <CardUser
                tCard="Buscar Residuo"
                bColor="indigo-500"
                dCard="Aqui puedes buscar un Residuo"
                imgCard="material-peligroso.png"
              />
            </Link>
            <Link to="/edit">
              <CardUser
                tCard="Editar Residuo"
                bColor="indigo-500"
                dCard="Aqui puedes actualizar un Residuo"
                imgCard="gestion-de-residuos.png"
              />
            </Link>
            <Link to="/entrada">
              <CardUser
                tCard="Entrada Residuo"
                bColor="indigo-500"
                dCard="Aqui puedes ingresar un Residuo ya existente"
                imgCard="ingresar (1).png"
              />
            </Link>
            <Link to="/salida">
              <CardUser
                tCard="Salida Residuo"
                bColor="indigo-500"
                dCard="Aqui puedes darle salida a un residuo"
                imgCard="cerrar-sesion.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Residuos;
