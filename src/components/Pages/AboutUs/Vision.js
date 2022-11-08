import React from "react";



const Vision = () => {
  return (
    <div className="px-40 py-10 mb-6">
        <h1 className="text-5xl font-bold text-justify mb-6 text-gray-600">Our vision, mission & values</h1>

        <div className="mb-16">
        <div className="flex cursor-pointer hover:bg-gray-100  bg-white hover:border-1 hover:rounded p-4 hover:shadow-md">
        <p className="text-3xl font-semibold mr-4 text-red-600">+</p>
       <div className="text-2xl mt-1 text-justify text-gray-600">Our vision</div>
        </div>
        <div className="flex cursor-pointer hover:bg-gray-100  bg-white hover:border-1 hover:rounded p-4 hover:shadow-md">
        <p className="text-3xl font-semibold mr-4 text-red-600">+</p>
       <div className="text-2xl mt-1 text-justify text-gray-600">Our mission</div>
        </div>
        <div className="flex cursor-pointer hover:bg-gray-100  bg-white hover:border-1 hover:rounded p-4 hover:shadow-md">
        <p className="text-3xl font-semibold mr-4 text-red-600">+</p>
       <div className="text-2xl mt-1 text-justify text-gray-600">Our values</div>
        </div>
        </div>

        <div className="text-justify mt-6">
        <button className="hover:bg-red-800 bg-red-600 text-lg font-semibold py-3 px-6 rounded-full mt-4" style={{color:'#fff'}}><a href="https://www.blood.ca/sites/default/files/our_brand_stakeholder/story.html"  target="_blank"
        rel="noopener noreferrer">Learn more about our brand</a> </button>
        </div>
        
     
      
    </div>
  );
};

export default Vision;
