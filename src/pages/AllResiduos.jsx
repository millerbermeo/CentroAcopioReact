import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";

function AllResiduos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/residuos")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="w-full flex justify-end">
        <Navbar />
        <Navtop />
        <div className="w-[81%] text-white h-auto p-8 mt-24">
          <h1 className="text-[17px] text-[gray] mb-4">
            Aqui puedes ver todos los residuos guardados:
          </h1>
          <table className="md:table-fixed w-full border border-gray-500">
            <thead className="bg-[#00324D]">
              <tr className="h-12">
                <th className="border border-gray-500 pl-2">id</th>
                <th className="border border-white pl-2">Nombre</th>
                <th className="border border-white pl-2">Tipo</th>
                <th className="border border-white pl-2">Cantidad (Kg)</th>
                <th className="border border-white pl-2">Descripcion</th>
                <th className="border border-white pl-2">Deposito</th>
                <th className="border border-gray-500 pl-2">Area</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-base">
              {data.map((item) => (
                <tr key={item.id} className="h-9 border border-blue-500">
                  <td className="border border-gray-500 pl-2">{item.id}</td>
                  <td className="border border-gray-500 pl-2">
                    {item.nombre_residuo}
                  </td>
                  <td className="border border-gray-500 pl-2">
                    {item.tipo_residuo}
                  </td>
                  <td className="border border-gray-500 pl-2">
                    {item.cantidad_residuo}
                  </td>
                  <td className="border border-gray-500 pl-2 overflow-hidden">
                    {item.descripcion_residuo}
                  </td>
                  <td className="border border-gray-500 pl-2">
                    {item.deposito}
                  </td>
                  <td className="border border-gray-500 pl-2">{item.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllResiduos;
