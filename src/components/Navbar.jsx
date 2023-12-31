import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-[70px] z-20 overflow-hidden lg:w-[19%] fixed left-0 h-screen text-center bg-[#00324D] flex flex-col items-center justify-between p-5 pt-4">
        <div className="w-full flex flex-col gap-2 text-white">
          <h1 className="w-full flex gap-2 items-center justify-center font-bold text-[30px]">
            CAS
            <span className="hidden lg:block mt-2 font-normal text-[18px]">
              Centro Acopio
            </span>
          </h1>

          <Link to="/dashboard">
            <div className="flex items-center justify-start gap-10 border-b pb-2 pt-10">
              <img className="w-[30px]" src="apps-sharp.png" alt="" />
              <h2 className="hidden lg:block font-normal  text-xl">
                Dashboard
              </h2>
            </div>
          </Link>
        </div>

        <div className="flex w-full justify-center items-center">
          <ul className="w-full flex flex-col justify-center text-white">
            <Link to="/residuos">
              <li className="flex items-center gap-12 h-12 text-center">
                <img className="w-[30px]" src="icon-one.png" alt="" />
                Residuos
              </li>
            </Link>
            <Link to="/users">
              <li className="flex items-center gap-12 border-t h-10">
                <img className="w-[30px]" src="icon-twopng.png" alt="" />
                Usuarios
              </li>
            </Link>
            <li className="flex items-center gap-12  h-10">
              <img className="w-[30px]" src="icon-three.png" alt="" />
              <a href="">Reportes</a>
            </li>
            <li className="flex items-center gap-12  border-b h-10">
              <img className="w-[30px]" src="icon-four.png" alt="" />
              <a href="">Elementos</a>
            </li>
            <Link to="/">
              <li className="flex items-center gap-12  h-12">
                <img className="w-[30px]" src="icon-five.png" alt="" />
                Pages
              </li>
            </Link>
          </ul>
        </div>

        <div
          id="final"
          className="w-full flex items-center justify-center gap-2 text-white"
        >
          <img
            className="w-[30px] decoration-white"
            src="icon-six.png"
            alt=""
          />
          <a className="hidden lg:block " href="">
            <h2>Centro de Ayuda</h2>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
