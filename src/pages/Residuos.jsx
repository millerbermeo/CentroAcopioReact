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
            Here you can manage residuos information:
          </h1>

          <div className="w-full grid grid-cols-4 gap-2 place-items-center mt-6">
            <Link to="/crear-residuo">
              <CardUser
                tCard="Create Waste"
                bColor="indigo-500"
                dCard="Aqui puedes crear un nuevo Usuario"
                imgCard="desperdiciar.png"
              />
            </Link>
            <Link to="/allresiduos">
              <CardUser
                tCard="See All Waste"
                bColor="indigo-500"
                dCard="Aqui puedes crear ver todos los Usuarios"
                imgCard="papelera-de-reciclaje.png"
              />
            </Link>
            <Link to="/showresiduos">
              <CardUser
                tCard="Search Waste"
                bColor="indigo-500"
                dCard="Aqui puedes crear un buscar un Usuario"
                imgCard="material-peligroso.png"
              />
            </Link>
            <Link to="/">
              <CardUser
                tCard="Edit Waste"
                bColor="indigo-500"
                dCard="Aqui puedes crear un nuevo Usuario"
                imgCard="gestion-de-residuos.png"
              />
            </Link>
            <Link to="/">
              <CardUser
                tCard="Waste Input"
                bColor="indigo-500"
                dCard="Aqui puedes crear un buscar un Usuario"
                imgCard="ingresar (1).png"
              />
            </Link>
            <Link to="/">
              <CardUser
                tCard="Waste Output"
                bColor="indigo-500"
                dCard="Aqui puedes crear un nuevo Usuario"
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
