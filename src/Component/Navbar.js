import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Doc } from "./Doctors/Doctors";

const Navbar = () => {
  const { handleEditPatientsClick } = useContext(Doc);
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("users"));
  // const checkName = userName.find((user)=> user.name)
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Loggedin");
    navigate("/Login");
    console.log("userName", userName);
  };
  return (
    <>
      <div className="overflow-hidden">
        <header className=" w-full h-[120px] bg-[#53B781] ">
          <div className="flex">
            <div className="flex ml-[80px] gap-[24px] ">
              <img
                src="/image/dri.png"
                alt="i"
                className="w-[42.25px] h-[48px] mt-10"
              />
              <h1 className="text-white text-4xl text-justify font-bold capitalize mt-10 ">
                Wah International
              </h1>
            </div>
            <div className="flex w-fit h-[72px] border-[1px] rounded-e-[54px] rounded-s-[54px] mt-6  gap-3 pt-1 ml-[750px]">
              <button onClick={handleEditPatientsClick}>
                <img
                  src="/image/Edit.png"
                  alt="Edit"
                  className="w-[16px] h-[16px]  ml-2"
                />
              </button>
              <div className="flex gap-10 ">
                <h1 className="text-white text-2xl font-semibold capitalize mt-4">
                  {userName.name}
                </h1>
                <img
                  src="/image/pr.png"
                  alt="profile"
                  className="w-[57px] h-[57px] mt-1.5 mr-1 pb-1 pr-1"
                />
              </div>
            </div>
            <button onClick={handleLogout}>
              <img
                src="/image/Logout.png"
                alt=""
                className="w-[24px] h-[24px] mt-[35px] ml-3"
              />
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
