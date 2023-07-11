import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navtop from "../components/Navtop";

function EditResiduo() {
  const idResiduo = useRef();
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
      id: idResiduo.current.value,
      nombre_residuo: nombre_residuo.current.value,
      tipo_residuo: tipo_residuo.current.value,
      cantidad_residuo: cantidad_residuo.current.value,
      deposito: deposito.current.value,
      descripcion_residuo: descripcion_residuo.current.value,
      area: area.current.value,
    };

    axiosClient
      .put(`/residuos/${data.id}`, data)
      .then((response) => {
        console.log(response);
        navigate("/residuos");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Aquí puedes mostrar algún mensaje de error o realizar alguna acción adicional si lo deseas
      });
  };
  return (
    <>
      <div className="w-full h-screen flex justify-end">
        <Navbar />
        <Navtop />
        <div className="w-[81%] flex justify-center">
          <div className="flex h-[500px] mt-28 items-center flex-col border rounded-md boder-[#212529] text-black p-2">
            <h1 className="">Informacion del Residuo</h1>
            <p className="text-xs font-extralight opacity-40">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex p-3 gap-4 w-full justify-center items-center">
                {" "}
                <p className="flex flex-col">
                  <label htmlFor="nombre_residuo">Nombre Residuo</label>
                  <input
                    type="text"
                    id="nombre_residuo"
                    name="nombre_residuo"
                    ref={nombre_residuo}
                    className="bg-[#e9ecef] border-none outline-none w-96 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
                  />
                </p>
                <p>
                  <label htmlFor="tipo_residuo">Tipo Residuo</label>
                  <select
                    id="tipo_residuo"
                    name="tipo_residuo"
                    ref={tipo_residuo}
                    className="bg-[#e9ecef] border-none outline-none w-96 h-10 border rounded-[4px] boder-[#212529] pl-1 pt-3 flex flex-col justify-center items-center"
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

              <div className="flex items-center p-3 gap-4 w-full">
                <p className="flex flex-col">
                  <label htmlFor="nombre_residuo">Cantidad</label>
                  <input
                    type="number"
                    id="cantidad_residuo"
                    name="cantidad_residuo"
                    ref={cantidad_residuo}
                    className="bg-[#e9ecef] border-none outline-none w-96 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
                  />
                </p>
                <p className="flex flex-col">
                  {" "}
                  <label htmlFor="nombre_residuo">Id Residuo</label>
                  <input
                    type="number"
                    ref={idResiduo}
                    placeholder="Ingrese el ID del Residuo..."
                    className="bg-[#e9ecef] border-none outline-none w-96 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
                  />
                </p>
              </div>
              <p className="flex flex-col p-3">
                <label htmlFor="">Descripcion Residuo</label>
                <textarea
                  type="text"
                  id="descripcion_residuo"
                  name="descripcion_residuo"
                  ref={descripcion_residuo}
                  className="bg-[#e9ecef] border-none h-20  outline-none border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
                ></textarea>
              </p>

              <div className="flex p-3 gap-4 w-full">
                {" "}
                <p>
                  <label htmlFor="deposito">Deposito</label>
                  <select
                    id="deposito"
                    required
                    name="deposito"
                    ref={deposito}
                    className="bg-[#e9ecef] border-none outline-none w-96 h-10 border rounded-[4px] boder-[#212529] pl-1 pt-3 flex flex-col justify-center items-center"
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
                    className="bg-[#e9ecef] border-none outline-none w-96 h-10 border rounded-[4px] boder-[#212529] pl-1 pt-3 flex flex-col justify-center items-center"
                  >
                    {" "}
                    <option value=""></option>
                    <option value="ENNCC">ENNCC</option>
                    <option value="ComplejoDeportivo">
                      Complejo Deportivo
                    </option>
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
                    Actualizar
                  </button>
                  <Link to="/residuos">Cancelar</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditResiduo;

{
  /* <div className="flex p-3 gap-2 w-full">
<p className="w-full flex flex-col">
  <label htmlFor="nombre_residuo">Cantidad</label>
  <input
    type="number"
    id="cantidad_residuo"
    name="cantidad_residuo"
    ref={cantidad_residuo}
    className="bg-[#e9ecef] border-none outline-none w-96 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
  />
</p>
<p>
  {" "}
  <label htmlFor="nombre_residuo">Id Residuo</label>
  <input
    type="number"
    ref={idResiduo}
    placeholder="Ingrese el ID del Residuo..."
    className="bg-[#e9ecef] border-none outline-none w-96 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
  />
</p>
</div> */
}
