import React from "react";
import bannerImage1 from "../../../assets/bannerCard1.png";
import bannerImage2 from "../../../assets/bannerCard2.png";
import bannerImage3 from "../../../assets/bannerCard3.png";
import bannerImage4 from "../../../assets/bannerCard4.png";

const BannerCard = () => {
  return (
    <div>
      <h3 className="text-xl text-gray-400 pt-2 pb-5">
        Discover how you can{" "}
        <span className="font-bold text-red-600">make all the difference</span>.
      </h3>
      <hr className="mx-32" />

      <section className="pb-6 flex justify-center items-center gap-[1px] mb-64">
        <div className="w-[311px] h-[411px] bg-transparent ">
          <div className="relative preserve-3d hover:my-rotate-x-180 w-full h-full duration-500 delay-200">
            <div className="absolute flex flex-col backface-hidden w-full h-full">
              <img
                src={bannerImage1}
                alt="banner card 1"
                className="w-full h-full"
              />
              <div className="bg-red-600 text-white text-2xl font-semibold py-4">
                Blood <br /> for Life
              </div>
            </div>
            <div className="absolute flex flex-col justify-center items-center my-rotate-x-180 backface-hidden w-full h-full bg-red-600">
              <h2 className="text-white text-4xl font-semibold">
                Blood <br /> for Life
              </h2>
              <p className="text-white py-4 text-md px-4">
                You can save lives and change many more.
              </p>
              <button class="bg-white hover:bg-gray-200 text-red-600 text-lg font-semibold py-3 px-6 rounded-full">
                Book Now
              </button>
            </div>
          </div>
          <div className="my-4 text-gray-600">
            <h2 className="text-3xl font-md pb-2">Lee</h2>
            <h4 className="text-lg font-bold mb-12">
              Book recipient |{" "}
              <span className="font-normal">Future Olympian</span>
            </h4>
            <p className="text-lg">
              Your donation could go on to <br /> captivate a country.
            </p>
            <button class="bg-red-600 text-white text-lg font-semibold py-3 px-6 rounded-full my-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-[311px] h-[411px] bg-transparent">
          <div className="relative preserve-3d hover:my-rotate-x-180 w-full h-full duration-500 delay-200">
            <div className="absolute flex flex-col backface-hidden w-full h-full">
              <img
                src={bannerImage2}
                alt="banner card 1"
                className="w-full h-full"
              />
              <div className="bg-red-700 text-white text-2xl font-semibold py-4">
                Plasma <br /> for Life
              </div>
            </div>
            <div className="absolute flex flex-col justify-center items-center my-rotate-x-180 backface-hidden w-full h-full bg-red-700">
              <h2 className="text-white text-4xl font-semibold">
                Plasma <br /> for Life
              </h2>
              <p className="text-white py-4 text-md px-6">
                For many, plasma is the only treatment.
              </p>
              <button class="bg-white hover:bg-gray-200 text-red-700 text-lg font-semibold py-3 px-6 rounded-full">
                Book Now
              </button>
            </div>
          </div>
          <div className="my-4 text-gray-600">
            <h2 className="text-3xl font-md pb-2">Christina</h2>
            <h4 className="text-lg font-bold mb-5">
              Plasma recipient |{" "}
              <span className="font-normal">Sign languge teacher</span>
            </h4>
            <p className="text-lg">
              Your donation could go on to fuel the
              <br /> future.
            </p>
            <button class="bg-red-600 text-white text-lg font-semibold py-3 px-6 rounded-full my-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-[311px] h-[411px] bg-transparent ">
          <div className="relative preserve-3d hover:my-rotate-x-180 w-full h-full duration-500 delay-200">
            <div className="absolute flex flex-col backface-hidden w-full h-full">
              <img
                src={bannerImage3}
                alt="banner card 1"
                className="w-full h-full"
              />
              <div className="bg-teal-500 text-white text-2xl font-semibold py-4">
                Steam Cells <br /> for Life
              </div>
            </div>
            <div className="absolute flex flex-col justify-center items-center my-rotate-x-180 backface-hidden w-full h-full bg-teal-500">
              <h2 className="text-white text-4xl font-semibold">
                Stem Cells <br /> for Life
              </h2>
              <p className="text-white py-4 text-md px-4">
                You may be someone's lifesaving match.
              </p>
              <button class="bg-white hover:bg-gray-200 text-red-600 text-lg font-semibold py-3 px-6 rounded-full">
                Register today
              </button>
            </div>
          </div>
          <div className="my-4 text-gray-600">
            <h2 className="text-3xl font-md pb-2">Lee</h2>
            <h4 className="text-lg font-bold mb-12">
              Stem cell recipient |{" "}
              <span className="font-normal">Role Model</span>
            </h4>
            <p className="text-lg">
              Your donation could go on to be the <br /> best dad.
            </p>
            <button class="bg-teal-500 text-white text-lg font-semibold py-3 px-6 rounded-full my-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-[311px] h-[411px] bg-transparent ">
          <div className="relative preserve-3d hover:my-rotate-x-180 w-full h-full duration-500 delay-200">
            <div className="absolute flex flex-col backface-hidden w-full h-full">
              <img
                src={bannerImage4}
                alt="banner card 1"
                className="w-full h-full"
              />
              <div className="bg-teal-600 text-white text-2xl font-semibold py-4">
                Organs & Tissues <br /> for Life
              </div>
            </div>
            <div className="absolute flex flex-col justify-center items-center my-rotate-x-180 backface-hidden w-full h-full bg-teal-600">
              <h2 className="text-white text-4xl font-semibold">
                Organ & Tissues <br /> for Life
              </h2>
              <p className="text-white py-4 text-md px-4">
                More than 4,000 people in Canada are waiting for an organ
                transplant.
              </p>
              <button class="bg-white hover:bg-gray-200 text-red-600 text-lg font-semibold py-3 px-6 rounded-full">
                Book Now
              </button>
            </div>
          </div>
          <div className="my-4 text-gray-600">
            <h2 className="text-3xl font-md pb-2">Mary</h2>
            <h4 className="text-lg font-bold mb-12">
              Organ recipient | <span className="font-normal">Storyteller</span>
            </h4>
            <p className="text-lg">
              Your donation could go on to support
              <br /> cultures to thribe.
            </p>
            <button class="bg-teal-600 text-white text-lg font-semibold py-3 px-6 rounded-full my-4">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerCard;
