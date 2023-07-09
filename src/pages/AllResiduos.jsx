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
          <table className="md:table-fixed w-full">
            <thead className="bg-[#6c79e0]">
              <tr className="h-12">
                <th className="w-12 border border-white text-center pl-1">
                  id
                </th>
                <th className="w-36 border border-white">Nombre</th>
                <th className="border border-white">Tipo</th>
                <th className="w-24 border border-white">Cantidad (Kg)</th>
                <th className="w-64 border border-white">Descripcion</th>
                <th className="w-32 border border-white">Deposito</th>
                <th className="pl-2 border border-white">Area</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-base">
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={
                    index % 2 === 0 ? "bg-white h-9" : "bg-[#edecff] h-9"
                  }
                >
                  <td className="pl-2">{item.id}</td>
                  <td className="pl-2">{item.nombre_residuo}</td>
                  <td className=" pl-2">{item.tipo_residuo}</td>
                  <td className=" pl-2">{item.cantidad_residuo}</td>
                  <td className="pl-2 overflow-hidden">
                    {item.descripcion_residuo}
                  </td>
                  <td className="pl-2">{item.deposito}</td>
                  <td className="pl-2">{item.area}</td>
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
