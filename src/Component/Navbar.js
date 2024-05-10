import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Doc } from "./Doctors/Doctors";


const Navbar = () => {
  const{handleEditPatientsClick }=useContext(Doc);
  return (
    <>
      <div className="overflow-hidden">
        <header className="w-full h-[120px] bg-[#53B781]">
          <div className="flex ml-[80px] gap-[24px]">
            <img
              src="/image/dri.png"
              alt="i"
              className="w-[42.25px] h-[48px] mt-10"
            />
            <h1 className="text-white text-4xl text-justify font-bold capitalize mt-10">
              Wah International
            </h1>
            <div className="flex justify-center sm:w-[237px]  h-[72px] border-[1px] rounded-e-[54px] rounded-s-[54px] mt-6 ml-[890px] gap-3">
              <button onClick= {handleEditPatientsClick}>
                <img
                  src="/image/Edit.png"
                  alt="Edit"
                  className="w-[16px] h-[16px] mt-[5px]"
                  />
              </button>
              <div className="flex gap-10">
                <h1 className="text-white text-3xl font-semibold capitalize mt-4">
                  Name
                </h1>
                <img
                  src="/image/pr.png"
                  alt="profile"
                  className="w-[57px] h-[57px] mt-1.5"
                />
              </div>
            </div>
            <Link to="/Login">
              <img
                src="/image/Logout.png"
                alt=""
                className="w-[24px] h-[24px] mt-[54px]"
              />
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
