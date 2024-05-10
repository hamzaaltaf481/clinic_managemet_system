import React, { useContext } from 'react'
import { Doc } from '../Doctors/Doctors';

const Card = () => {
  const{handleEditClick}=useContext(Doc);
  return (
    <>
      <div className="grid grid-cols-2 gap-x-0 gap-y-6">
        <div className="flex w-[625px] h-[253px] ml-20 mt-10 shadow-lg bg-gray-50">
          <div className="ml-8 ">
            <h1 className="text-2xl font-semibold mt-5">Ahmed Gulzar</h1>
            <div className="flex gap-x-2 mt-[33px]">
              <img
                src="/image/cal.png"
                alt="days"
                className="w-[14px] h-[14px] mt-[6px]"
              />
              <h2>
                Appointment On{" "}
                <span className=" text-[#1E9AF1]">Monday 28 August 2022</span>
              </h2>
            </div>
            <div className="flex gap-x-3 mt-[18px]">
              <img
                src="/image/Des.png"
                alt="days"
                className="w-[9px] h-[9px] mt-[8px]"
              />
              <h2>Description</h2>
            </div>
            <div className="flex mt-[34px] gap-x-[14px]">
              <div className="flex font-semibold text-white w-[230px]  h-[44px] rounded-lg shadow-lg bg-slate-200 hover:bg-[#c9576c]">
                <button className=" text-[22px] text-[#CF6F80] hover:text-[white]  ml-4">Cancel Appoinment</button>
              </div>
              <div className="flex mr-[19px] bg-[#1E9AF1] font-semibold text-white w-[320px] h-[44px] rounded-lg gap-2 hover:bg-[#3c92d0]">
                <img
                  src="/image/Edit.png"
                  alt="add"
                  className="w-[20px] h-[20px] mt-3 ml-11"
                />
                <button className=" text-[22px]" onClick={handleEditClick}>Edit Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
