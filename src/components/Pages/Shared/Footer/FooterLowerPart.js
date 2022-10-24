import React from "react";

const FooterLowerPart = () => {
  return (
    <div className="mb-12">
    <div className="my-4">
      <h1 className="font-bold text-3xl text-red-600">1 888 2 DONATE</h1>
      <h1 className="font-bold text-3xl text-gray-500">(1-888-236-6283)</h1>
    </div>
      <div>
      <p className="text-sm text-gray-700 mt-8">© Copyright 2022 Canadian Blood Services. All Rights Reserved.</p>
      </div>
      <div className="flex justify-center text-sm my-6">
      <div>
        <p className="hover:text-red-800 cursor-pointer text-red-600">Publications and reports </p>
        </div>
        <div className="border-r border-gray-500 mx-4"></div>
       <div>
       <p className="hover:text-red-800 cursor-pointer text-red-600">Media </p>
       </div>
       <div className="border-r border-gray-500 mx-4 "></div>
       <div>  <p className="hover:text-red-800 cursor-pointer text-red-600">Corporate policies</p>
       </div>
       <div className="border-r border-gray-500 mx-4"></div>
      <div>
      <p className="hover:text-red-800 cursor-pointer text-red-600">Privacy/Legal </p>
      </div>
      <div className="border-r border-gray-500 mx-4"></div>
       <div>
       <p className="hover:text-red-800 cursor-pointer text-red-600">Site Map </p>
       </div>
       <div className="border-r border-gray-500 mx-4"></div>
       <div>
       <p className="hover:text-red-800 cursor-pointer text-red-600">Contact us</p>
       </div>
      </div>
      <div className="mx-60 mt-10">
        <p className="text-sm text-gray-700">Canadian Blood Services acknowledges the funding of provincial, territorial and federal governments. The views expressed in this document are those of
Canadian Blood Services and do not necessarily reflect those of governments.</p>
      </div>
      <div className="text-sm text-gray-700 mt-6">
        <p>Charitable Registration No. 870‍ 157‍ 641‍ RR0001</p>
      </div>
    </div>
  );
};

export default FooterLowerPart;
