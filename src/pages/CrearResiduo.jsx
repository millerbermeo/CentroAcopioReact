import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../axios-client";
import fondo from "../../public/IMG-20220823-WA0019.jpg";
import { Link } from "react-router-dom";

function CrearResiduo() {
  // const navigate = useNavigate();

  const nombre_residuo = useRef();
  const tipo_residuo = useRef();
  const cantidad_residuo = useRef();
  const deposito = useRef();
  const descripcion_residuo = useRef();
  const area = useRef();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombre_residuo: nombre_residuo.current.value,
      tipo_residuo: tipo_residuo.current.value,
      cantidad_residuo: cantidad_residuo.current.value,
      deposito: deposito.current.value,
      descripcion_residuo: descripcion_residuo.current.value,
      area: area.current.value,
    };

    axiosClient.post("/residuos", data, {}).finally(() => {
      navigate("/residuos");
    });
  };

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
      >
        <div className="w-[62%] bg-[white] m-auto border rounded-md text-black p-2">
          <h2>Informacion del Residuo</h2>
          <p className="text-xs font-extralight opacity-40">
            This information will be displayed publicly so be careful what you
            share.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex p-3 gap-0 w-full justify-center items-center">
              {" "}
              <p className="w-full flex flex-col">
                <label htmlFor="nombre_residuo">Nombre Residuo</label>
                <input
                  type="text"
                  id="nombre_residuo"
                  name="nombre_residuo"
                  ref={nombre_residuo}
                  className="bg-[#edecff] border-none outline-none w-96 h-10 rounded-lg border border-gray-700 pl-2 text-[#5f727e]"
                />
              </p>
              <p>
                <label htmlFor="tipo_residuo">Tipo Residuo</label>
                <select
                  id="tipo_residuo"
                  name="tipo_residuo"
                  ref={tipo_residuo}
                  className="bg-[#edecff] border-none outline-none w-96 h-10 rounded-lg border border-gray-700 pl-1 pt-3 flex flex-col justify-center items-center"
                >
                  {" "}
                  <option value=""></option>
                  <option value="Aprovechables" selected>
                    Aprovechables
                  </option>
                  <option value="NoAprovechables">No Aprovechables</option>
                  <option value="Quimicos">Químicos</option>
                  <option value="Infecciosos">Infecciosos</option>
                  <option value="Otros">Otros</option>
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
                  ref={cantidad_residuo}
                  className="bg-[#edecff] border-none outline-none w-96 h-10 rounded-lg border border-gray-700 pl-2 text-[#5f727e]"
                />
              </p>
              <p className="flex flex-col">
                <label htmlFor="">Descripcion Residuo</label>
                <textarea
                  type="text"
                  id="descripcion_residuo"
                  name="descripcion_residuo"
                  ref={descripcion_residuo}
                  className="bg-[#edecff] border-none h-20  outline-none rounded-lg border border-gray-700 pl-2 text-[#5f727e]"
                ></textarea>
              </p>
            </div>

            <div className="flex p-3 gap-4 w-full">
              {" "}
              <p>
                <label htmlFor="deposito">Deposito</label>
                <select
                  id="deposito"
                  required
                  name="deposito"
                  ref={deposito}
                  className="bg-[#edecff] border-none outline-none w-96 h-10 rounded-lg border border-gray-700 pl-1 pt-3 flex flex-col justify-center items-center"
                >
                  {" "}
                  <option value=""></option>
                  <option value="DepositoA" selected>
                    Deposito A
                  </option>
                  <option value="DepositoB">Deposito B</option>
                  <option value="DepositoC">Desposito C</option>
                </select>
              </p>
              <p>
                <label htmlFor="area">Area Recoleccion</label>
                <select
                  id="area"
                  required
                  name="area"
                  ref={area}
                  className="bg-[#edecff] border-none outline-none w-96 h-10 rounded-lg border border-gray-700 pl-1 pt-3 flex flex-col justify-center items-center"
                >
                  {" "}
                  <option value=""></option>
                  <option value="ENNCC">ENNCC</option>
                  <option value="ComplejoDeportivo">Complejo Deportivo</option>
                  <option value="Gastronomia">Gastronomia</option>
                  <option value="Agroindustria">Agroindustria</option>
                  <option value="Laboratorios" selected>
                    Laboratorios
                  </option>
                  <option value="Sennova">Sennova</option>
                  <option value="AreasComunes">Areas Comunes</option>
                  <option value="Enfermeria">Enfermeria</option>
                </select>
              </p>
            </div>

            <div className="">
              <div className="p-3">
                <button
                  type="submit"
                  className="shadow bg-[#1d2432] hover:bg-[#1d2432] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mr-4 rounded"
                >
                  Sign Up
                </button>
                <Link to="/residuos">Cancelar</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CrearResiduo;
