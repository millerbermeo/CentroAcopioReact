import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // version 5.2.0

function CrearResiduo() {
  const navigate = useNavigate();

  const [nombre_residuo, setnombre_residuo] = useState("");
  const [tipo_residuo, settipo_residuo] = useState("");
  const [cantidad_residuo, setcantidad_residuo] = useState("");
  const [deposito, setdeposito] = useState("");
  const [descripcion_residuo, setdescripcion_residuo] = useState("");
  const [area, setarea] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "nombre_residuo") {
      setnombre_residuo(value);
    } else if (name === "tipo_residuo") {
      settipo_residuo(value);
    } else if (name === "cantidad_residuo") {
      setcantidad_residuo(value);
    } else if (name === "deposito") {
      setdeposito(value);
    } else if (name === "descripcion_residuo") {
      setdescripcion_residuo(value);
    } else if (name === "area") {
      setarea(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nombre_residuo,
      tipo_residuo,
      cantidad_residuo,
      descripcion_residuo,
      deposito,
      area,
    };

    axios
      .post("http://127.0.0.1:8000/api/residuos", data)
      .then((response) => {
        console.log(response.data);
        // Aquí puedes realizar acciones con la respuesta de la API
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/residuos");
  };

  return (
    <>
      <div className="w-full h-screen bg-[#111827] pt-12">
        <div className="w-[60%] m-auto border border-l-pink-600 text-white p-2">
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
                  value={nombre_residuo}
                  onChange={handleChange}
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-2 text-[#5f727e]"
                />
              </p>
              <p>
                <label htmlFor="tipo_residuo">Tipo Residuo</label>
                <select
                  id="tipo_residuo"
                  name="tipo_residuo"
                  value={tipo_residuo}
                  required
                  onChange={handleChange}
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-1 pt-3 flex flex-col justify-center items-center"
                >
                  {" "}
                  <option value=""></option>
                  <option value="Aprovechables">Aprovechables</option>
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
                  value={cantidad_residuo}
                  onChange={handleChange}
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-2 text-[#5f727e]"
                />
              </p>
              <p className="flex flex-col">
                <label htmlFor="">Descripcion Residuo</label>
                <textarea
                  type="text"
                  id="descripcion_residuo"
                  name="descripcion_residuo"
                  value={descripcion_residuo}
                  onChange={handleChange}
                  className="bg-[#1d2432] h-20  outline-none rounded-lg border border-gray-700 pl-2 text-[#5f727e]"
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
                  value={deposito}
                  onChange={handleChange}
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-1 pt-3 flex flex-col justify-center items-center"
                >
                  {" "}
                  <option value=""></option>
                  <option value="DepositoA">Deposito A</option>
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
                  value={area}
                  onChange={handleChange}
                  className="bg-[#1d2432] outline-none w-96 h-10 rounded-lg border border-gray-700 pl-1 pt-3 flex flex-col justify-center items-center"
                >
                  {" "}
                  <option value=""></option>
                  <option value="ENNCC">ENNCC</option>
                  <option value="ComplejoDeportivo">Complejo Deportivo</option>
                  <option value="Gastronomia">Gastronomia</option>
                  <option value="Agroindustria">Agroindustria</option>
                  <option value="Laboratorios">Laboratorios</option>
                  <option value="Sennova">Sennova</option>
                  <option value="AreasComunes">Areas Comunes</option>
                  <option value="Enfermeria">Enfermeria</option>
                </select>
              </p>
            </div>

            <div className="">
              <div className="p-3">
                <button className="shadow bg-[#1d2432] hover:bg-[#1d2432] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CrearResiduo;
