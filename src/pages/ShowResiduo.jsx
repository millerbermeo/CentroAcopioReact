import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";
import axiosClient from "../axios-client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowResiduo() {
  const [data, setData] = useState(null);
  const [elementId, setElementId] = useState("");

  const handleSearch = () => {
    axiosClient.get(`/residuos/${elementId}`).then((response) => {
      setData(response.data);
    });
  };

  // useEffect(() => {
  //   handleSearch();
  // }, [elementId]);

  // ...

  return (
    <>
      <div className="w-full flex justify-end">
        <Navbar />
        <Navtop />
        <div className="w-[81%] h-screen p-8 flex items-center justify-center">
          <div className="w-full flex justify-center items-start gap-16">
            <div className="w-72 h-44 border border-gray-300 rounded-xl shadow-xl p-3">
              <h1 className="font-bold text-lg">Buscar Residuo</h1>
              <input
                type="text"
                value={elementId}
                onChange={(e) => setElementId(e.target.value)}
                placeholder="Ingrese el ID del Residuo..."
                className="w-[100%] h-9 border border-gray-300 rounded-md outline-none pl-2 mt-3"
              />
              <div className="w-full flex justify-end items-end gap-5 mt-6">
                <Link to="/residuos">Cancelar</Link>
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  onClick={handleSearch}
                >
                  Buscar
                </button>
              </div>
            </div>

            {data && data.id ? (
              <div>
                <ul className="w-[450px] border border-gray-300 p-5 rounded-xl shadow-xl">
                  <li className="pb-2 w-full flex justify-start">
                    <span className="font-bold w-36">Id:</span>
                    {data.id}
                  </li>
                  <li className="pb-2 w-full flex justify-start">
                    <span className="font-bold w-36">Nombre:</span>
                    {data.nombre_residuo}
                  </li>
                  <li className="pb-2 w-full flex justify-start">
                    <span className="font-bold w-36">Tipo: </span>
                    {data.tipo_residuo}
                  </li>
                  <li className="pb-2 w-full flex justify-start">
                    <span className="font-bold w-36">Cantidad (Kg): </span>
                    {data.cantidad_residuo}
                  </li>
                  <li className="pb-2 w-full flex justify-start">
                    <span className="font-bold w-36">Descripción: </span>
                    {data.descripcion_residuo}
                  </li>
                  <li className="pb-2 w-full flex justify-start">
                    <span className="font-bold w-36">Depósito: </span>
                    {data.deposito}
                  </li>
                  <li className="pb-2 w-full flex justify-start">
                    <span className="font-bold w-36">Área: </span> {data.area}
                  </li>
                </ul>
              </div>
            ) : (
              <p>No se encontraron resultados</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowResiduo;
