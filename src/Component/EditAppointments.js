import React, { useContext } from "react";
import { Doc } from "./Doctors/Doctors";

const EditAppointments = () => {
  const { handleCancelEditClick } = useContext(Doc);
  return (
    <>
      <div className="w-[473px] h-[602] mt-[160px] ml-[600px] border-[2px] bg-white">
        <h1 className="  font-semibold text-2xl pt-[28px] pl-[44px] pb-[45px]">
          Edit Appointments
        </h1>
        <label className="flex ml-[44px] pb-[12px]">Appointment Date</label>
        <input
          type="Fields"
          className="w-[384px] h-[50px] ml-[44px] mb-[27px] bg-slate-100 rounded"
        />
        <label className="flex ml-[44px] pb-[12px]">Appointment Time</label>
        <input
          type=" Dropdown"
          className="w-[184px] h-[50px] ml-[44px] bg-slate-100 rounded"
        />
        <input
          type=" Dropdown"
          className="w-[184px] h-[50px] ml-[16px] mb-[22px] bg-slate-100 rounded"
        />
        <label className="flex ml-[44px] pb-[12px]">What's the issue? </label>
        <input
          type="Fields"
          className="w-[384px] h-[100px] ml-[44px] mb-[43px]  bg-slate-100"
        />
        <div className="flex">
          <button
            className="w-[123px] h-[48px] ml-[44px] rounded bg-[#ECF0FF] text-[#2D5BFF] text-lg font-semibold"
            onClick={handleCancelEditClick}
          >
            Cancel
          </button>
          <button className="flex justify-center pt-2 gap-1  w-[237px] h-[48px] ml-[24px] mb-[73px] rounded bg-[#1E9AF1] text-white text-lg font-semibold">
            Update Booking
            <img src="/image/arrow.png" alt="arrow" className="mt-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default EditAppointments;
