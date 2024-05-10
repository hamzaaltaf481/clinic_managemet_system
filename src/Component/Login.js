import React, { useRef } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import Doctors from "./Doctors/Doctors";
import Swal from "sweetalert2";

// import swal from "sweetalert2";

const Login = () => {
  const email = useRef();
  const Password = useRef();
  const navigate = useNavigate();
  const getemail = localStorage.getItem("email");
  const getPassword = localStorage.getItem("Password");
  const handleLogin = () => {
    if (
      email.current.value === "abc@gmail.com" &&
      Password.current.value === "12345"
    ) {
      localStorage.setItem("email", "abc@gmail.com");
      localStorage.setItem("password", "12345");
        navigate("/");
    } else {
      alert("Invalid Credentials")
    }
  };
  return (
    <>
      <div className="flex overflow-hidden">
        <div
          className="h-[900px] w-[60%]"
          style={{ backgroundColor: "rgba(83, 183, 129, 0.2)" }}
        >
          <img
            src="/image/pana.png"
            alt="Signup"
            className="h-[400px] w-[600px] mt-[200px] ml-[200px]"
          />
        </div>
        <div className=" w-[40%] mt-40">
          <div className="flex ml-20 gap-6">
            <img src="/image/i.png" alt="i" className="w-[68.65px] h-[78PX]" />
            <h1 className="text-[#53B781] text-5xl text-justify font-bold capitalize mt-4">
              Wah International
            </h1>
          </div>
          <div className="flex w-[473px] h-[393px] mt-8 ml-20 shadow-xl ">
            <form className="ml-8">
              <h1 className="text-3xl font-bold mt-2">Register Yourself</h1>
              <input
                ref={email}
                placeholder="User Name"
                type="text"
                className="mt-6 w-[384px] text-2xl shadow-md rounded-md bg-[#F8F8F8] p-3 border-gray-500"
              />
              <input
                ref={Password}
                placeholder="Password"
                type="password"
                className="mt-6 w-[384px] text-2xl shadow-md rounded-md bg-[#F8F8F8] p-3 capitalize border-gray-500"
              />{" "}
              <button
                className="flex justify-center gap-2 text-center mt-6 border w-[384px] h-[40px]  bg-[#53B781] border-[#53B781] text-2xl text-white font-bold rounded"
                onClick={handleLogin}
              >
                Login
                <img src="/image/arrow.png" alt="arrow" />
              </button>
            </form>
          </div>
          <div className="text-center mt-2">
            <h1>
              New here?{" "}
              <Link to="/Signup">
                <button className="text-[#53B781] hover:text-[#4bdb8e]">
                  Regiter with us
                </button>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
