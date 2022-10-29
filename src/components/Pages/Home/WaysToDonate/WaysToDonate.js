import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const WaysToDonate = () => {
  return (
    <div className="text-white text-left mb-20 bg-gray-700 px-32 grid grid-cols-7 gap-4 divide-x divide-slate-500">
      <div className="py-32 col-span-5">
        <h2 className="text-3xl font-bold">Ways to donate</h2>
        <hr className="mt-8 mr-[50rem] bg-white h-[.35rem] rounded-full" />
        <p className="my-8 text-lg pr-80">
          There are many ways to donate. You can give one-time or recurring
          financial donations, organize group donations in collaboration with
          other organizations or communities, sponsor a donation event or even
          volunteer your time.
        </p>
        <Link
          to="/"
          className="text-xl font-bold  hover:text-gray-300 hover:delay-100 hover:duration-300 duration-300 hover:transition-all hover:ease-in-out"
        >
          View all ways to donate
          <AiIcons.AiOutlineArrowRight className="inline-block ml-3 text-2xl text-teal-500 cursor-pointer" />
        </Link>
      </div>
      <div className="text py-20 pl-12 col-span-2">
        <h2 className="font-bold text-2xl">Jump to</h2>
        <div>
          <Link
            to="/"
            className="block pt-8 text-lg font-semibold  hover:text-gray-300 hover:delay-100 hover:duration-300 duration-300 hover:transition-all hover:ease-in-out"
          >
            <AiIcons.AiOutlineArrowRight className="inline-block mr-3 text-2xl text-teal-500 cursor-pointer" />
            Financial donations
          </Link>
          <Link
            to="/"
            className="block pt-8 text-lg font-semibold  hover:text-gray-300 hover:delay-100 hover:duration-300 duration-300 hover:transition-all hover:ease-in-out"
          >
            <AiIcons.AiOutlineArrowRight className="inline-block mr-3 text-2xl text-teal-500 cursor-pointer" />
            Donate as a partner
          </Link>
          <Link
            to="/"
            className="block pt-8 text-lg font-semibold  hover:text-gray-300 hover:delay-100 hover:duration-300 duration-300 hover:transition-all hover:ease-in-out"
          >
            <AiIcons.AiOutlineArrowRight className="inline-block mr-3 text-2xl text-teal-500 cursor-pointer" />
            Information on Recognition Program
          </Link>
          <Link
            to="/"
            className="block pt-8 text-lg font-semibold  hover:text-gray-300 hover:delay-100 hover:duration-300 duration-300 hover:transition-all hover:ease-in-out"
          >
            <AiIcons.AiOutlineArrowRight className="inline-block mr-3 text-2xl text-teal-500 cursor-pointer" />
            Volunteering
          </Link>
          <Link
            to="/"
            className="block pt-8 text-lg font-semibold  hover:text-gray-300 hover:delay-100 hover:duration-300 duration-300 hover:transition-all hover:ease-in-out"
          >
            <AiIcons.AiOutlineArrowRight className="inline-block mr-3 text-2xl text-teal-500 cursor-pointer" />
            Information on Reasons to Join Canada's Lifeline
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WaysToDonate;
