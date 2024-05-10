import React, { useContext } from "react";
import { Doc } from "./Doctors/Doctors";

const EditPatients = () => {
    const{handleCancelPatientsClick}=useContext(Doc);
  return (
    <>
      <div className="w-[473px] h-[700px] mt-[125px] ml-[600px] border-[2px] bg-white">
        <h1 className="  font-semibold text-2xl pt-[28px] pl-[44px] pb-[45px]">
          Edit Your Information
        </h1>
        <input
          type="Fields"
          className="w-[384px] h-[50px] ml-[44px] mb-[27px] bg-slate-100 rounded"
        />
        <input
          type="Fields"
          className="w-[384px] h-[50px] ml-[44px] mb-[27px] bg-slate-100 rounded"
        />
        <input
          type="Fields"
          className="w-[384px] h-[50px] ml-[44px] mb-[27px] bg-slate-100 rounded"
        />
        <input
          type="Fields"
          className="w-[384px] h-[50px] ml-[44px] mb-[27px] bg-slate-100 rounded"
        />
        <input
          type="Fields"
          className="w-[384px] h-[50px] ml-[44px] mb-[24px] bg-slate-100 rounded"
        />
        <h1 className="mb-[17px] ml-[44px] text-2xl font-semibold">Gender</h1>
        <div className="flex gap-14 ml-[44px] mb-[67px]">
          <div className="flex">
            <input
              type="radio"
              name="gender"
              id="male"
              className="w-4 h-4 mt-1.5 cursor-pointer hover:-green-600"
            />
            <label for="male" className="text-black text-xl ml-[6px] ">
              Male
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              name="gender"
              id="female"
              className="w-4 h-4 mt-1.5 cursor-pointer hover:text-green-600"
            />
            <label for="female" className="text-black text-xl ml-[6px]">
              Female
            </label>
          </div>
        </div>
        <div className="flex">
          <button className="w-[123px] h-[48px] ml-[44px] rounded bg-[#ECF0FF] text-[#2D5BFF] text-lg font-semibold"
          onClick={handleCancelPatientsClick}
          >
            Cancel
          </button>
          <button className="flex justify-center pt-2 gap-1  w-[237px] h-[48px] ml-[24px] mb-[73px] rounded bg-[#1E9AF1] text-white text-lg font-semibold">
            Update Information
            <img src="/image/arrow.png" alt="arrow" className="mt-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default EditPatients;
