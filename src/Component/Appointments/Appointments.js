import React, { useContext } from "react";
import Navbar from "../Navbar";
import Card from "./Card";
import { Link } from "react-router-dom";
import EditAppointments from "../EditAppointments";
import { Doc } from "../Doctors/Doctors";
import EditPatients from "../EditPatients";
const Appointments = () => {
  const { editApp,editPatients } = useContext(Doc);
  return (
    <div className=" static ">
      {editApp ? (
        <>
          <div className=" absolute backdrop-blur-[2px] w-[1800px]">
            <EditAppointments />
          </div>
          <div>
            <Navbar />
            <div className="flex mt-16">
              <div className="ml-20">
                <Link to="/">
                  <button className="text-2xl font-semibold rounded  hover:text-[#53B781] hover:shadow-lg pt-2 pl-3 pr-3 pb-2">
                    Doctors
                  </button>
                </Link>
                <button className="ml-20 text-2xl font-semibold text-[#53B781] hover:shadow-lg bg-slate-50 rounded pt-2 pl-3 pr-3 pb-2">
                  Appointments
                </button>
              </div>
              <input
                type="search"
                placeholder="Search Doctors"
                className="border-[1px] ml-[800px]  w-[406px] h-[48px] rounded-[55px] pl-6 pr-6"
              />
            </div>
            <Card />
          </div>
        </>
      ) : (
        <div className="static">
        {editPatients?(
          <>
          <div className=" absolute backdrop-blur-[2px] w-[1800px]">
            <EditPatients />
          </div>
          <div>
          <Navbar />
          <div className="flex mt-16">
            <div className="ml-20">
              <Link to="/">
                <button className="text-2xl font-semibold rounded  hover:text-[#53B781] hover:shadow-lg pt-2 pl-3 pr-3 pb-2">
                  Doctors
                </button>
              </Link>
              <button className="ml-20 text-2xl font-semibold text-[#53B781] hover:shadow-lg bg-slate-50 rounded pt-2 pl-3 pr-3 pb-2">
                Appointments
              </button>
            </div>
            <input
              type="search"
              placeholder="Search Doctors"
              className="border-[1px] ml-[800px]  w-[406px] h-[48px] rounded-[55px] pl-6 pr-6"
            />
          </div>
          <Card />
        </div>
          </>
        ):(
          <>
          <Navbar />
          <div className="flex mt-16">
            <div className="ml-20">
              <Link to="/">
                <button className="text-2xl font-semibold rounded  hover:text-[#53B781] hover:shadow-lg pt-2 pl-3 pr-3 pb-2">
                  Doctors
                </button>
              </Link>
              <button className="ml-20 text-2xl font-semibold text-[#53B781] hover:shadow-lg bg-slate-50 rounded pt-2 pl-3 pr-3 pb-2">
                Appointments
              </button>
            </div>
            <input
              type="search"
              placeholder="Search Doctors"
              className="border-[1px] ml-[800px]  w-[406px] h-[48px] rounded-[55px] pl-6 pr-6"
              />
          </div>
          <Card />
          </>
        )}
        </div>
      )}
    </div>
  );
};

export default Appointments;
