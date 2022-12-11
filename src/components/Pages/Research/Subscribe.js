import React from "react";
import Email from "./ValidateEmail/Email";

const Subscribe = () => {
  return (
    <div className="bg-gray-100">
      <div className="lg:flex lg:justify-between">
        {/* left side  */}
        <div className="ml-4 lg:w-1/2 lg:px-28 py-12">
          <h1 className="text-gray-600 text-4xl font-bold text-justify">
            Subscribe
          </h1>
          <p className="text-justify mt-4 text-base text-gray-600">
            The latest news, publications and events from Canadian Blood
            Services’ Medical Affairs and Innovation research and education
            network.
          </p>
          <div className="flex mt-6">
            <div className=" ">
              {" "}
              <p className="hover:text-red-800 cursor-pointer text-red-700 text-justify text-base font-semibold underline mt-1">
                <a
                  href="https://us12.campaign-archive.com/home/?u=8fcd40bcdd74ee6eede38f01c&id=cc7f69014e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Past Issues{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className=" lg:w-1/2  px-8 mt-8 py-9">
          <p className="text-xs text-gray-600 flex justify-end mr-32">
            <span className="text-red-400">* </span>indicates required
          </p>
          <div className="flex">
            <h1 className=" text-gray-700 text-justify text-sm">
              Email Address{" "}
            </h1>
            <p className="text-red-400 text-lg ml-1">*</p>
          </div>
          <Email></Email>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
