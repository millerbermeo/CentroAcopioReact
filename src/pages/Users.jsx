import React from "react";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";
import { Link } from "react-router-dom";
import CardUser from "../components/CardUser";

function Users() {
  return (
    <>
      <div className="w-full flex">
        <Navbar />
        <Navtop />
        <div className="flex flex-col p-5 pt-24 w-[81%]">
          <h1>Esta es la pagina Usuarios</h1>

          <div className="grid grid-cols-4 gap-2 place-items-center mt-5">
            <Link to="/">
              <CardUser
                tCard="Create User"
                bColor="indigo-500"
                dCard="Aqui puedes crear un nuevo Usuario"
                imgCard="boligrafo.gif"
              />
            </Link>
            <Link to="/">
              <CardUser
                tCard="User All"
                bColor="indigo-500"
                dCard="Aqui puedes crear un nuevo Usuario"
                imgCard="boligrafo.gif"
              />
            </Link>
            <Link to="/">
              <CardUser
                tCard="Search User"
                bColor="indigo-500"
                dCard="Aqui puedes crear un nuevo Usuario"
                imgCard="boligrafo.gif"
              />
            </Link>
            <Link to="/">
              <CardUser
                tCard="Search User"
                bColor="indigo-500"
                dCard="Aqui puedes crear un nuevo Usuario"
                imgCard="boligrafo.gif"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
