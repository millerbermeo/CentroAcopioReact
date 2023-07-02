import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-[280px] h-screen text-center bg-[#00324D] flex flex-col items-center justify-between p-10 pt-4 z-10">
        <div className="w-full flex flex-col gap-2 text-white">
          <h1 className="w-full flex gap-2 items-center justify-center font-bold text-[30px]">
            CAS
            <span className="mt-2 font-normal text-[18px]">Centro Acopio</span>
          </h1>

          <div className="flex items-center justify-start gap-5 border-b pb-2 pt-10">
            <img className="w-[30px]" src="apps-sharp.png" alt="" />
            <h2 className="font-normal text-xl">Dashboard</h2>
          </div>
        </div>

        <div className="flex w-full">
          <ul className="w-full flex flex-col justify-center text-white">
            <li className="flex items-center gap-8 h-12 text-center">
              <img className="w-[30px]" src="icon-one.png" alt="" />
              <a href="">Residuos</a>
            </li>
            <li className="flex items-center gap-8 border-t h-10">
              <img className="w-[30px]" src="icon-twopng.png" alt="" />
              <a href="">Usuarios</a>
            </li>
            <li className="flex items-center gap-8  h-10">
              <img className="w-[30px]" src="icon-three.png" alt="" />
              <a href="">Reportes</a>
            </li>
            <li className="flex items-center gap-8  border-b h-10">
              <img className="w-[30px]" src="icon-four.png" alt="" />
              <a href="">Elementos</a>
            </li>
            <li className="flex items-center gap-8  h-12">
              <img className="w-[30px]" src="icon-five.png" alt="" />
              <a href="">Pages</a>
            </li>
          </ul>
        </div>

        <div className="w-full flex items-center justify-center gap-2 mr-8 text-white">
          <img
            className="w-[30px] decoration-white"
            src="icon-six.png"
            alt=""
          />
          <a href="">
            <h2>Centro de Ayuda</h2>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;