// import axios from "axios";
import fondo from "../../public/IMG-20220823-WA0019.jpg";
import fondoLogin from "../../public/disparo-vertical-palmeras-playa-arena.jpg";
// configuraciones
// import { Link } from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../axios-client";
import { useNavigate } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    axiosClient
      .post("/login", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.api_token);
      })
      .finally(() => {
        navigate("/dashboard");
      });
  };
  return (
    <>
      <div className="flex items-center justify-center gap-0">
        <div
          className="w-full relative h-screen bg-cover bg-center blur-[2px] opacity-90"
          style={{ backgroundImage: `url(${fondo})` }}
        ></div>

        <div className="absolute flex">
          <form onSubmit={handleSubmit} className="flex">
            <div
              className="hidden lg:block bg-cyan-800 w-[420px] h-[550px] bg-cover bg-center"
              style={{ backgroundImage: `url(${fondoLogin})` }}
            ></div>
            <div className="w-[500px] h-screen bg-white lg:w-[420px] lg:h-[550px] px-14 pt-20 flex flex-col shadow-lg">
              <h1 className="text-center font-bold text-2xl">Welcome Back!</h1>
              <div className="flex flex-col gap-5 h-auto mt-10 text-xs">
                <input
                  className="w-full h-11 bg-white border-solid border border-neutral-400 pl-2 rounded-full outline-none"
                  type="email"
                  ref={email}
                  placeholder="Enter Email"
                />
                <input
                  className="w-full h-11 bg-white border-solid border border-neutral-400 pl-2 rounded-full outline-none"
                  type="password"
                  ref={password}
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-left gap-2 mt-8 text-xs text-gray-400">
                <input type="checkbox" /> Remember Me
              </div>
              {/* <Link to="/dashboard"> */}
              <button
                type="submit"
                className="w-full h-11 bg-[#00324d] rounded-full outline-none text-white font-bold mt-8"
              >
                Login
              </button>
              {/* </Link> */}

              <div className="flex flex-col items-center justify-center border-t-[1px] border-grey-500 mt-6 pt-10 text-xs font-medium text-gray-400 ">
                <a href="">Forgot Password?</a>
                <a href="">Create an Account!</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
