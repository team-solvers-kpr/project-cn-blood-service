import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";
import * as FaIcons from "react-icons/fa";

const Notfound = () => {
  const [searchData, setSearchData] = useState([]);

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const clearForm = (e) => {
    setSearchData([]);
    document.getElementById("clear-from").reset();
  };

  return (
    <div className="lg:mt-[158px]">
      <section className="flex items-center h-full p-10 bg-red-600">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-bold lg:text-9xl text-7xl">
              <span className="text-gray-700">4</span>
              <span className="text-gray-600">0</span>
              <span className="text-gray-700">4</span>
              <span className="text-red-200 ml-3">error</span>
            </h2>{" "}
            <p className="text-4xl font-bold text-white">Page is under development</p>
            <p className="mt-4 mb-8 text-white">
              The link you clicked on may be broken or the page may have been
              removed.
            </p>
            <Link
              to="/"
              className="px-8 py-5 font-semibold rounded-full bg-white"
            >
              <BsIcons.BsFillArrowLeftCircleFill className="inline-block text-2xl mr-4 mb-1 text-blue-800" />
              Back to main page
            </Link>
            <div className="my-16">
              <h4 className="text-white text-3xl font-semibold border rounded-full inline p-3">
                OR
              </h4>
            </div>
            <form action="" id="clear-from">
              <div className="relative flex items-center">
                {searchData.length !== 0 && (
                  <ImIcons.ImCross
                    className="absolute text-xs lg:ml-[350px] ml-[340px] text-blue-600 cursor-pointer z-10"
                    onClick={clearForm}
                  />
                )}
                <input
                  type="text"
                  name="Search"
                  placeholder="Search ..."
                  aria-label="Location"
                  onChange={handleSearch}
                  className="w-full lg:mx-12 bg-red-800 placeholder:text-white focus:bg-white rounded-full border-red-600
             py-4 pl-8 shadow-md focus:outline-none text-lg text-black"
                  required
                />
                <FaIcons.FaSearch className="absolute lg:ml-[350px] ml-[340px] w-5 h-5 text-white pointer-events-none" />
              </div>
            </form>
            <p className="mt-2 text-gray-400">
              Enter some keywords to search for.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notfound;
