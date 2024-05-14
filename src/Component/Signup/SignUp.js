import React, { useRef, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
    ph_no: "",
    age: "",
    gender: "",
  });

  const navigate = useNavigate();
  const handleOnClick = (e) => {
    e.preventDefault();
    if (
      (input.name &&
        input.password &&
        input.email &&
        input.ph_no &&
        input.age &&
        input.gender) !== ""
      ) {
        
        // Get existing users from local storage (if any)
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
        // Add the new user to the array
        existingUsers.push(input);
    
        // Store the updated array of users in local storage
        localStorage.setItem("users", JSON.stringify(existingUsers));
        navigate("/login");
      } else {
        alert("Please Fill Complete Data");
      }
    };

  return (
    <>
      <div className="flex">
        <div
          className="h-[100vh] w-[60%] overflow-hidden"
          style={{ backgroundColor: "rgba(83, 183, 129, 0.2)" }}
        >
          <img
            src="/image/Sign_up.png"
            alt="Signup"
            className="h-[600px] w-[643px] mt-[150px] ml-[100px]"
          />
        </div>
        <div className=" w-[40%]">
          <div className="flex mt-14 ml-20 gap-6">
            <img src="/image/i.png" alt="i" className="w-[68.65px] h-[78PX]" />
            <h1 className="text-[#53B781] text-5xl text-justify font-bold capitalize mt-4">
              Wah International
            </h1>
          </div>
          <div className="flex w-[473px] h-[625px] mt-8 ml-20 shadow-xl  bg-gray-50">
            <form className="ml-8">
              <h1 className="text-3xl font-bold mt-2">Register Yourself</h1>
              <input
                name="name"
                value={input.name}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="text"
                placeholder="Full Name"
                className="mt-6 w-[384px] text-2xl shadow-md rounded-md bg-[#F8F8F8] p-3 capitalize border-gray-500"
              />
              <input
                name="email"
                value={input.email}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  });
                }}
                placeholder="Email"
                type="text"
                className="mt-6 w-[384px] text-2xl shadow-md rounded-md bg-[#F8F8F8] p-3 capitalize border-gray-500"
              />
              <input
                name="ph_no"
                value={input.ph_no}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  });
                }}
                placeholder="Phone Number"
                type="integer"
                className="mt-6 w-[384px] text-2xl shadow-md rounded-md bg-[#F8F8F8] p-3 capitalize border-gray-500"
              />
              <input
                name="password"
                value={input.password}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  });
                }}
                placeholder="Password"
                type="password"
                className="mt-6 w-[384px] text-2xl shadow-md rounded-md bg-[#F8F8F8] p-3 capitalize border-gray-500"
              />
              <input
                name="age"
                value={input.age}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  });
                }}
                placeholder="Age"
                type="number"
                className="mt-6 w-[384px] text-2xl shadow-md rounded-md bg-[#F8F8F8] p-3 capitalize border-gray-500"
              />
              <h1 className="mt-6 text-2xl font-semibold">Gender</h1>
              <div className="flex gap-14 mt-4">
                <div className="flex">
                  <input
                    name="gender"
                    value="male"
                    onChange={(e) => {
                      setInput({
                        ...input,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type="radio"
                    id="male"
                    className="w-4 h-4 mt-1.5 cursor-pointer hover:-green-600"
                  />
                  <label for="male" className="text-black text-xl ml-[6px] ">
                    Male
                  </label>
                </div>
                <div className="flex">
                  <input
                    name="gender"
                    value="female"
                    onChange={(e) => {
                      setInput({
                        ...input,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type="radio"
                    id="female"
                    className="w-4 h-4 mt-1.5 cursor-pointer hover:text-green-600"
                  />
                  <label for="female" className="text-black text-xl ml-[6px]">
                    Female
                  </label>
                </div>
              </div>
              <button
                className="flex justify-center gap-2 text-center mt-6 border w-[384px] h-[40px]  bg-[#53B781] border-[#53B781] text-2xl text-white font-bold rounded"
                onClick={handleOnClick}
              >
                Signup
                <img src="/image/arrow.png" alt="arrow" />
              </button>
            </form>
          </div>
          <div className="text-center mt-2">
            <h1>
              Have you been here?{" "}
              <Link to="/Login">
                <button className="text-[#53B781] hover:text-[#4bdb8e]">
                  Login
                </button>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
