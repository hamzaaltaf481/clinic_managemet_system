import React, { useContext } from "react";
import { Doc } from "./Doctors";

const Cards = () => {
  const{handleBookingClick}=useContext(Doc);
  return (
    <>
      <div className="grid grid-cols-2 gap-x-0 gap-y-6">
        <div className="flex w-[625px] h-fit ml-20 mt-10 shadow-lg">
          <div className="w-[30%]">
            <img src="/image/D1.png" alt="D1" />
          </div>
          <div className="ml-5 mt-5">
            <h1 className="text-2xl font-semibold">Ahmed Gulzar</h1>
            <div className="flex gap-x-2">
              <img
                src="/image/cal.png"
                alt="days"
                className="w-[14px] h-[14px] mt-[6px]"
              />
              <h2>Monday-Thursday</h2>
            </div>
            <div className="flex gap-x-3">
              <img
                src="/image/avail.png"
                alt="days"
                className="w-[9px] h-[9px] mt-[8px]"
              />
              <h2>Available</h2>
            </div>
            <div className="flex ml-[180px] mt-16 bg-[#1E9AF1] font-semibold text-white w-[205px] h-[44px] rounded-lg gap-2">
              <img
                src="/image/add.png"
                alt="add"
                className="w-[24px] h-[24px] mt-3 ml-3"
              />
              <button className="" onClick={handleBookingClick}>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
