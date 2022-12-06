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
    e.preventDefault();
  };

  const clearForm = () => {
    setSearchData([]);
    document.getElementById("clear-from").reset();
  };

  return (
    <div className="bg-red-600 lg:flex justify-evenly py-4 lg:px-12 md:mt-[168px]">
      <div className="text-start text-white lg:mb-0 mb-4">
        <h3 className="lg:ml-0 ml-12 text-2xl font-semibold">
          Book now to donate blood
        </h3>
        <div className="lg:ml-0 ml-12 font-semibold inline hover:text-gray-300 hover:delay-100 hover:duration-300 duration-300 hover:transition-all hover:ease-in-out">
          <a
            href="/am-i-eligible"
            className="text-lg underline hover:no-underline"
          >
            Am I eligible?{"  "}
          </a>
          <AiIcons.AiOutlineArrowRight className="inline-block mb-1 text-2xl cursor-pointer" />
        </div>
      </div>
      <form action="" id="clear-from" className="lg:w-1/3">
        <div className="relative lg:flex items-center">
          <MdIcons.MdLocationOn className="absolute lg:text-5xl text-4xl lg:mt-0 mt-3 lg:ml-2 ml-14 text-red-600 pointer-events-none z-10" />
          {searchData.length !== 0 && (
            <ImIcons.ImCross
              className="lg:mt-0 mt-6 absolute flex items-center text-xs text-blue-600 lg:ml-64 ml-96 cursor-pointer"
              onClick={clearForm}
            />
          )}
          <input
            type="text"
            name="Search"
            placeholder="Location or web code"
            aria-label="Location"
            onChange={handleSearch}
            className="lg:mb-0 mb-4 lg:w-full w-5/6 bg-white lg:rounded-l-full lg:rounded-none rounded-full border-r border-red-600
             py-4 pl-16 pr-12 shadow-md focus:outline-none text-lg text-black placeholder-slate-500"
            required
          />
          <input
            type="submit"
            value="Start Booking"
            className="lg:mb-0 mb-4 lg:rounded-r-full lg:rounded-none rounded-full py-4 bg-gray-600 border-l border-red-600 shadow-md font-semibold text-white text-lg lg:px-7 px-36 hover:bg-white hover:text-red-700 hover:transition-all duration-300 hover:duration-300 cursor-pointer"
          />
        </div>
      </form>
      <div className="lg:ml-0 ml-12 flex items-center gap-3">
        <a
          href="https://apps.apple.com/app/id804765636"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={appStoreIcon}
            alt=""
            className="lg:w-[146px] w-[191px] lg:h-[44px] h-[57px]"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=ca.blood.giveblood"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={playStoreIcon}
            alt=""
            className="lg:w-[146px] w-[191px] lg:h-[44px] h-[57px]"
          />
        </a>
      </div>
    </div>
  );
};

export default SearchFiled;
