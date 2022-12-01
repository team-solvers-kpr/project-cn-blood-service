import React, { useEffect, useState } from "react";
import bloodIcon from "../../../assets/icon-inventory-drop.svg";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";

const BookDonationButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchInputData, setSearchInputData] = useState([]);

    const toogleVisibility = () => {
        if (window.pageYOffset > 270) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toogleVisibility);

        return () => {
            window.removeEventListener("scroll", toogleVisibility);
        };
    }, []);

    const handleSearch = (e) => {
        setSearchInputData(e.target.value);
        e.preventDefault();
    };

    const clearForm = () => {
        document.getElementById("clear-search-from").reset();
        setSearchInputData([]);
    };

    console.log(showSearch);

    return (
        <div
            className={` w-full fixed ${
                !showSearch ? "-bottom-[192px]" : "bottom-0"
            } 
            ease-in-out duration-1000`}
        >
            <div
                className={`${
                    isVisible ? "translate-y-0" : "translate-y-full"
                } ease-in-out duration-1000 flex justify-center items-center rounded-t-xl text-lg bg-red-700 h-[48px] w-[240px]  mx-auto`}
            >
                <img
                    src={bloodIcon}
                    alt="bloodIcon"
                    className="inline h-7 w-8 brightness-200 mr-1"
                />
                <h2
                    onClick={() => setShowSearch(!showSearch)}
                    className="text-white hover:underline hover:text-gray-200 cursor-pointer"
                >
                    Book your donation
                </h2>
            </div>
            <div className="bg-red-600 w-full h-48 flex justify-center pt-10">
                <form action="" id="clear-search-from" className="lg:w-1/3">
                    <div className="relative lg:flex items-center">
                        <MdIcons.MdLocationOn className="absolute lg:text-5xl text-4xl lg:mt-0 mt-3 lg:ml-2 ml-14 text-red-600 pointer-events-none z-10" />
                        {searchInputData.length !== 0 && (
                            <ImIcons.ImCross
                                className="lg:mt-0 mt-6 absolute flex items-center text-xs text-blue-600 lg:ml-72 ml-96 cursor-pointer"
                                onClick={clearForm}
                            />
                        )}
                        <input
                            type="text"
                            name="Search"
                            placeholder="Location or web code"
                            aria-label="Location"
                            onChange={handleSearch}
                            className="lg:mb-0 mb-4 lg:w-full w-5/6 bg-white lg:rounded-l-full lg:rounded-none rounded-full border-r border-red-600 py-4 pl-16 pr-16 shadow-md focus:outline-none text-lg text-black placeholder-slate-500"
                            required
                        />
                        <input
                            type="submit"
                            value="Start Booking"
                            className="lg:mb-0 mb-4 lg:rounded-r-full lg:rounded-none rounded-full py-4 bg-gray-600 border-l border-red-600 shadow-md font-semibold text-white text-lg lg:px-7 px-36 hover:bg-white hover:text-red-700 hover:transition-all duration-300 hover:duration-300 cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookDonationButton;
