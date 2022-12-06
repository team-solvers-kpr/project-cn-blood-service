import React from "react";
import dropLogo from "../../../assets/icon-inventory-drop.svg";

const SingleBlood = ({ bloodGroup, days, bloodDrop, tooltip }) => {
  return (
    <div className="cursor-pointer">
      <div className="relative group inline-block">
        <div className="hover:scale-150 hover:duration-700">
          <img
            src={dropLogo}
            alt="grey blood drop icon"
            className="mb-7 h-[128.5px] w-[140.5px]"
          />
          <img
            src={bloodDrop}
            alt="red blood drop"
            className="absolute top-0 h-[128.5px] w-[140.5px]"
          />
          <h4 className="absolute text-sm font-bold top-[48px] left-[55px]">
            {days} <br /> days
          </h4>
        </div>
        <span className="invisible group-hover:visible opacity-0 font-semibold group-hover:opacity-100 transition bg-red-600 text-white p-4 rounded-xl absolute mt-4 bottom-60 right-0 shadow-md z-50">
          {tooltip}
        </span>
      </div>
      <h2 className="text-3xl font-bold">{bloodGroup}</h2>
    </div>
  );
};

export default SingleBlood;
