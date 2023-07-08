import React from "react";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";
import { Link } from "react-router-dom";
import CardUser from "../components/CardUser";

function Users() {
  return (
    <>
      <div className="w-full flex justify-end">
        <Navbar />
        <Navtop />
        <div className="flex flex-col p-5 pt-24 w-[81%]">
          <h1 className="text-[17px] text-[gray]">
            Here you can manage user information:
          </h1>

          <div className="grid grid-cols-4 gap-2 place-items-center mt-6">
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
                tCard="See All Users"
                bColor="indigo-500"
                dCard="Aqui puedes crear ver todos los Usuarios"
                imgCard="usuario2.png"
              />
            </Link>
            <Link to="/">
              <CardUser
                tCard="Search Users"
                bColor="indigo-500"
                dCard="Aqui puedes crear un buscar un Usuario"
                imgCard="usuario3.png"
              />
            </Link>
            <Link to="/">
              <CardUser
                tCard="Edit Users"
                bColor="indigo-500"
                dCard="Aqui puedes crear un nuevo Usuario"
                imgCard="usuario4.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
