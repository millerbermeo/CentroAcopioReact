import axiosClient from "../axios-client";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";
import { Link } from "react-router-dom";

function EntradaResiduos() {
  const [data, setData] = useState(null);
  const [numId, setNumId] = useState("");
  const [elementId, setElementId] = useState("");

  const handleSearch = () => {
    axiosClient.post(`/count/${numId}/${elementId}`).then((response) => {
      setData(response.data);
    });
  };
  return (
    <>
      <div className="w-[81%] h-screen p-8 flex items-center justify-center">
        <Navbar />
        <Navtop />

        <div className="w-72 h-44 border border-gray-300 rounded-xl shadow-xl p-3">
          <h1 className="font-bold text-lg">Ingreso Cantidad</h1>
          <input
            type="number"
            value={numId}
            onChange={(e) => setNumId(e.target.value)}
            placeholder="Ingrese el cantidad entrada..."
            className="w-[100%] h-9 border border-gray-300 rounded-md outline-none pl-2 mt-3"
          />
          <h1 className="font-bold text-lg">id Residuo</h1>
          <input
            type="number"
            value={elementId}
            onChange={(e) => setElementId(e.target.value)}
            placeholder="Ingrese el ID del Residuo..."
            className="w-[100%] h-9 border border-gray-300 rounded-md outline-none pl-2 mt-3"
          />
          <div className="w-full flex justify-end items-end gap-5 mt-6">
            <Link to="/residuos">Cancelar</Link>
            <Link to="/residuos">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={handleSearch}
              >
                Entrada
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EntradaResiduos;
