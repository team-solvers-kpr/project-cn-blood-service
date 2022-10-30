import React, { useEffect, useState } from "react";
import bloodIcon from "../../../assets/icon-inventory-drop.svg";

const BookDonationButton = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="lg:fixed bottom-0 right-[42%]">
      <div
        className={`${
          isVisible ? "translate-y-0" : "translate-y-full"
        } flex justify-center items-center rounded-t-xl text-lg bg-red-700 h-[48px] w-[240px] ease-in-out duration-700`}
      >
        <img
          src={bloodIcon}
          alt="blood ico"
          className="inline h-7 w-8 brightness-200 mr-1"
        />
        <h2 className="text-white hover:underline hover:text-gray-200 cursor-pointer">
          Book your donation
        </h2>
      </div>
    </div>
  );
};

export default BookDonationButton;
