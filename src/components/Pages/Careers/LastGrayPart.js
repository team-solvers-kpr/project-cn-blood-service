import React from "react";
import HandshakePic from "../../assets/icon-covid19.jpg";

const LastGrayPart = () => {
  return (
    <div className="bg-gray-200">
      <div className="lg:flex lg:justify-between px-3 xl:px-28">
        {/* left side  */}
        <div className=" lg:w-1/2 lg:mr-16 py-12">
          <div className="w-full bg-white h-80">
            <div className="flex justify-center content-center">
              <img alt="" src={HandshakePic} />
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className=" lg:pl-10 lg:w-1/2  mr-4 py-12">
          <h1 className="text-3xl font-semibold text-stone-600 text-justify">
            COVID-19 Measures
          </h1>
          <p className="text-justify 2xl:mt-5 text-base text-stone-600">
            Since the beginning of the pandemic, Canadian Blood Services'
            approach has been cautious and measured. All decisions have been
            made in consultation with our medical and epidemiology experts and,
            at minimum, meeting applicable public health requirements. Although
            we provide life-saving products to hospitals, we are not a hospital
            or healthcare setting. While not required in our environments,
            masks, including N95s, are available to staff, volunteers, visitors
            and donors. Hand sanitizer is available throughout our spaces.
          </p>
          <p className="text-justify mt-5 text-base text-stone-600">
            We continue to closely monitor the epidemiology and scientific
            knowledge.
          </p>
          <p className="hover:text-red-800 hover:no-underline underline cursor-pointer text-justify  text-base text-red-600">
            <a
              href="https://www.blood.ca/en/wellness-measures"
              target="_blank"
              rel="noreferrer"
            >
              Learn more about our wellness measures.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastGrayPart;
