import React, { useState } from "react";
import playStoreIcon from "../../../assets/playStore.png";
import appStoreIcon from "../../../assets/appStore.png";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";

const SearchFiled = () => {
  const [searchData, setSearchData] = useState([]);

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const clearForm = (e) => {
    setSearchData([]);
    document.getElementById("clear-from").reset();
  };

  return (
    <div className="bg-red-600 flex justify-evenly py-4">
      <div className="text-start text-white">
        <h3 className="text-2xl font-semibold">Book now to donate blood</h3>
        <div className="font-semibold inline hover:text-gray-300 hover:delay-100 hover:duration-300 duration-300 hover:transition-all hover:ease-in-out">
          <a
            href="/am-i-eligible"
            className="text-lg underline hover:no-underline"
          >
            Am I eligible?{"  "}
          </a>
          <AiIcons.AiOutlineArrowRight className="inline-block mb-1 text-2xl cursor-pointer" />
        </div>
      </div>
      <form action="" id="clear-from" className="w-1/3">
        <div className="flex items-center">
          <MdIcons.MdLocationOn className="absolute text-5xl ml-2 text-red-600 pointer-events-none z-10" />
          {searchData.length !== 0 && (
            <ImIcons.ImCross
              className="absolute text-xs text-blue-600 ml-72 cursor-pointer"
              onClick={clearForm}
            />
          )}
          <input
            type="text"
            name="Search"
            placeholder="Location or web code"
            aria-label="Location"
            onChange={handleSearch}
            className="w-full bg-white rounded-l-full border-r border-red-600
             py-4 pl-16 pr-16 shadow-md focus:outline-none text-lg text-black placeholder-slate-500"
            required
          />
          <input
            type="submit"
            value="Start Booking"
            className="rounded-r-full py-4 bg-gray-600 border-l border-red-600 shadow-md font-semibold text-white text-lg px-8 hover:bg-white hover:text-red-700 hover:transition-all duration-300 hover:duration-300 cursor-pointer"
          />
        </div>
      </form>
      <div className="flex items-center gap-3">
        <a
          href="https://apps.apple.com/app/id804765636"
          target="_blank"
          rel="noreferrer"
        >
          <img src={appStoreIcon} alt="" className="w-[146px] h-[44px]" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=ca.blood.giveblood"
          target="_blank"
          rel="noreferrer"
        >
          <img src={playStoreIcon} alt="" className="w-[146px] h-[44px]" />
        </a>
      </div>
    </div>
  );
};

export default SearchFiled;
