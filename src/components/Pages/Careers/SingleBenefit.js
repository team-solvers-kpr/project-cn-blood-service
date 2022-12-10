import React from "react";

const SingleBenefit = (props) => {
  const { title, description, image } = props.benefit;

  return (
    <div className="bg-white mx-auto">
      <img src={image} alt="" className="lg:px-20" />
      <h3 className="font-semibold mb-3 text-2xl text-slate-600">{title}</h3>
      <div className="border-b-4 my-7 border-red-600 rounded-md w-28 mx-auto"></div>
      <p className="text-[17px] px-4 pb-5 text-slate-60-0">{description}</p>
    </div>
  );
};

export default SingleBenefit;
