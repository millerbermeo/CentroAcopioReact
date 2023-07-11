import Navbar from "../../components/Navbar";
import Navtop from "../../components/Navtop";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../../axios-client";

import React from "react";
import userImg from "../../../public/pexels-jacob-colvin-1761279.jpg";

function CrearUsuario() {
  const nombre_usuario = useRef();
  const apellido_usuario = useRef();
  const identificacion = useRef();
  const email = useRef();
  const password = useRef();
  const rol = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombre_usuario: nombre_usuario.current.value,
      apellido_usuario: apellido_usuario.current.value,
      identificacion: identificacion.current.value,
      email: email.current.value,
      password: password.current.value,
      rol: rol.current.value,
    };

    axiosClient.post("/usuarios", data, {}).finally(() => {
      navigate("/users");
    });
  };

  return (
    <>
      <div className="w-full h-screen flex justify-end">
        <Navbar />
        <Navtop />

        <div className="w-[81%] h-screen">
          <div className="w-full flex items-center justify-center mt-14 p-10">
            <div
              className="w-[32%] h-[500px] border bg-cover bg-center"
              style={{ backgroundImage: `url(${userImg})` }}
            ></div>
            <div className="w-[55%] h-[500px] border pt-8">
              <form onSubmit={handleSubmit}>
                <h1 className="text-center font-bold text-2xl">
                  Crear una Cuenta
                </h1>

                <div className="w-full justify-center items-center flex p-4 gap-6">
                  <p>
                    <input
                      type="text"
                      id="nombre_usuario"
                      name="nombre_usuario"
                      ref={nombre_usuario}
                      className="bg-[#e9ecef] border-none outline-none w-64 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
                      placeholder="Enter Name"
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      id="apellido_usuario"
                      name="apellido_usuario"
                      ref={apellido_usuario}
                      className="bg-[#e9ecef] border-none outline-none w-64 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
                      placeholder="Enter Lastname"
                    />
                  </p>
                </div>
                <div className="w-full justify-start items-center flex p-3">
                  <p>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      ref={email}
                      className="bg-[#e9ecef] border-none outline-none w-96 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
                      placeholder="Enter Email"
                    />
                  </p>
                </div>
                <div className="w-full justify-center items-center flex p-3 gap-6">
                  <p>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      ref={password}
                      className="bg-[#e9ecef] border-none outline-none w-64 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
                      placeholder="Enter Password"
                    />
                  </p>
                  <p>
                    <select
                      id="rol"
                      name="rol"
                      ref={rol}
                      className="bg-[#e9ecef] border-none outline-none w-64 h-10 border rounded-[4px] boder-[#212529] pl-1 pt-3 flex flex-col justify-center items-center"
                    >
                      {" "}
                      <option value=""></option>
                      <option value="administrador">Administrador</option>
                      <option value="aprendiz" selected>
                        Aprendiz
                      </option>
                    </select>
                  </p>
                </div>
                <div className="w-full justify-start items-center flex p-3 gap-4">
                  <p>
                    <input
                      type="text"
                      id="identificacion"
                      name="identificacion"
                      ref={identificacion}
                      className="bg-[#e9ecef] border-none outline-none w-64 h-10 border rounded-[4px] boder-[#212529] pl-2 text-[#5f727e]"
                      placeholder="Enter Identificacion"
                    />
                  </p>
                </div>
                <div className="w-[95%] m-auto justify-center items-center flex p-3 gap-4  border-t-[1px] border-b-[1px]">
                  <p className="pt-4 pb-3">
                    <button
                      type="submit"
                      className="bg-[#0080ff] border-none outline-none w-96 h-10 border m-auto rounded-[4px] text-[#fff]"
                    >
                      Registar
                    </button>
                  </p>
                </div>

                <Link to="/users">
                  <p className="w-full text-center text-xs text-gray-500 mt-4">
                    Cancelar Registro
                  </p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrearUsuario;
