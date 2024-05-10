import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Booking from "../Booking";
import Cards from "./Cards";
import EditPatients from "../EditPatients";

export const Doc = createContext();
const Doctors = () => {
  console.log("in docker comp")
  const { showBook, editPatients } = useContext(Doc);
  console.log("showbook", showBook)

  return (
    <div className=" static ">
      {showBook ? (
        <>
          <div className=" absolute backdrop-blur-[2px] w-[1800px]">
            <Booking />
          </div>
          <div>
            <Navbar />
            <div className="flex mt-16">
              <div className="ml-20">
                <button className="text-2xl font-semibold rounded text-[#53B781] bg-slate-50 hover:shadow-lg pt-2 pl-3 pr-3 pb-2">
                  Doctors
                </button>
                <Link to="/Appointments">
                  <button className="ml-20 text-2xl font-semibold rounded hover:text-[#53B781] hover:shadow-lg pt-2 pl-3 pr-3 pb-2">
                    Appointments
                  </button>
                </Link>
              </div>
              <input
                type="search"
                placeholder="Search Doctors"
                className="border-[1px] ml-[800px]  w-[406px] h-[48px] rounded-[55px] pl-6 pr-6"
              />
            </div>
            <Cards />
          </div>
        </>
      ) : (
        <div className="static">
          {editPatients ? (
            <>
              <div className=" absolute backdrop-blur-[2px] w-[1800px]">
                <EditPatients />
              </div>
              <div>
              <Navbar />
              <div className="flex mt-16">
                <div className="ml-20">
                  <button className="text-2xl font-semibold rounded text-[#53B781] bg-slate-50 hover:shadow-lg pt-2 pl-3 pr-3 pb-2">
                    Doctors
                  </button>
                  <Link to="/Appointments">
                    <button className="ml-20 text-2xl font-semibold rounded hover:text-[#53B781] hover:shadow-lg pt-2 pl-3 pr-3 pb-2">
                      Appointments
                    </button>
                  </Link>
                </div>
                <input
                  type="search"
                  placeholder="Search Doctors"
                  className="border-[1px] ml-[800px]  w-[406px] h-[48px] rounded-[55px] pl-6 pr-6"
                />
              </div>
              <Cards />
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="flex mt-16">
                <div className="ml-20">
                  <button className="text-2xl font-semibold rounded text-[#53B781] bg-slate-50 hover:shadow-lg pt-2 pl-3 pr-3 pb-2">
                    Doctors
                  </button>
                  <Link to="/Appointments">
                    <button className="ml-20 text-2xl font-semibold rounded hover:text-[#53B781] hover:shadow-lg pt-2 pl-3 pr-3 pb-2">
                      Appointments
                    </button>
                  </Link>
                </div>
                <input
                  type="search"
                  placeholder="Search Doctors"
                  className="border-[1px] ml-[800px]  w-[406px] h-[48px] rounded-[55px] pl-6 pr-6"
                />
              </div>
              <Cards />
            </>
          )}
        </div>
      )}
      ;
    </div>
  );
};

export default Doctors;
