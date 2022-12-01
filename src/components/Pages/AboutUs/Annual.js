import React from "react";
import { FaArrowRight } from "react-icons/fa";
import babyPic from "../../assets/baby.png";

const Annual = () => {
    return (
        <div className="bg-white lg:mx-28">
            <div className="lg:flex">
                <div className="lg:px-16 px-2 mt-10 my-auto">
                    <h1 className="text-3xl  font-semibold text-justify mb-6 text-gray-700">
                        Our annual reports
                    </h1>
                    <p className="lg:text-lg text-base text-justify mb-4 text-gray-600">
                        This year’s annual report, Changing Tomorrow, is about
                        how we’re accelerating, adapting, rethinking and
                        innovating to meet the future needs of Canadian health
                        care.
                    </p>
                    <div className="flex">
                        <p className="hover:text-red-800 hover:cursor-pointer lg:text-lg text-base text-justify mb-4 text-red-600">
                            2020-2021 Annual Report
                        </p>
                        <p
                            className="cursor-pointer text-base mt-2 ml-1 mb-4 text-gray-100"
                            style={{ color: "#54c3bb" }}
                        >
                            <FaArrowRight></FaArrowRight>
                        </p>
                    </div>
                    <div className="flex">
                        <p className="hover:text-gray-300 cursor-pointer lg:text-lg text-base text-justify mb-4 text-red-600">
                            Other publication and reports
                        </p>
                        <p
                            className="hover:text-red-800 cursor-pointer text-base mt-2 ml-1 mb-4 text-gray-100"
                            style={{ color: "#54c3bb" }}
                        >
                            <FaArrowRight></FaArrowRight>
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <img src={babyPic} alt="babyImg" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Annual;
