import React from "react";
import { Link } from "react-router-dom";

function CrearResiduo() {
  return (
    <>
      <div className="w-full h-screen bg-[#111827] pt-12">
        <div className="w-[60%] m-auto border border-l-pink-600 text-white p-2">
          <h2>Informacion del Residuo</h2>
          <p className="text-xs font-extralight opacity-40">
            This information will be displayed publicly so be careful what you
            share.
          </p>
          <form action="post">
            <div className="flex p-3 gap-0 w-full justify-center items-center">
              {" "}
              <p className="w-full flex flex-col">
                <label htmlFor="nombre_residuo">Nombre Residuo</label>
                <input
                  type="text"
                  id="nombre_residuo"
                  name="nombre_residuo"
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-2 text-[#5f727e]"
                />
              </p>
              <p>
                <label htmlFor="">Tipo Residuo</label>
                <select
                  id="tipo_residuo"
                  name="tipo_residuo"
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-1 pt-3 flex flex-col justify-center items-center"
                >
                  <option value="value1">Aprovechables</option>
                  <option value="value2" selected>
                    No Aprovechables
                  </option>
                  <option value="value3">Infecciosos</option>
                  <option value="value4">Químicos</option>
                  <option value="value5">Otros</option>
                </select>
              </p>
            </div>

            <div className="flex flex-col p-3 gap-2 w-full">
              <p className="w-full flex flex-col">
                <label htmlFor="nombre_residuo">Cantidad</label>
                <input
                  type="number"
                  id="cantidad_residuo"
                  name="cantidad_residuo"
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-2 text-[#5f727e]"
                />
              </p>
              <p className="flex flex-col">
                <label htmlFor="">Descripcion Residuo</label>
                <textarea
                  name="textarea"
                  rows="5"
                  cols="60"
                  className="bg-[#1d2432] outline-none rounded-lg border border-gray-700 pl-2 text-[#5f727e]"
                ></textarea>
              </p>
            </div>

            <div className="flex p-3 gap-4 w-full">
              {" "}
              <p>
                <label htmlFor="">Deposito</label>
                <select
                  id="tipo_residuo"
                  name="tipo_residuo"
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-1 pt-3 flex flex-col justify-center items-center"
                >
                  <option value="value1">Deposito A</option>
                  <option value="value2">Deposito B</option>
                  <option value="value3" selected>
                    Desposito C
                  </option>
                </select>
              </p>
              <p>
                <label htmlFor="">Area Recoleccion</label>
                <select
                  id="tipo_residuo"
                  name="tipo_residuo"
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-1 pt-3 flex flex-col justify-center items-center"
                >
                  <option value="value1">ENNCC</option>
                  <option value="value2" selected>
                    Complejo Deportivo
                  </option>
                  <option value="value3">Gastronomia</option>
                  <option value="value4">Agroindustria</option>
                  <option value="value5">Laboratorios</option>
                  <option value="value3">Sennova</option>
                  <option value="value4">Agroindustria</option>
                  <option value="value5">Areas Comunes</option>
                  <option value="value5">Enfermeria</option>
                </select>
              </p>
            </div>
          </form>
          <div className="">
            <Link to="/">
              {" "}
              <div class="p-3">
                <button
                  class="shadow bg-[#1d2432] hover:bg-[#1d2432] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrearResiduo;
