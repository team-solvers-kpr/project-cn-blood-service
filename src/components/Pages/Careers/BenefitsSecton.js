import React, { useEffect, useState } from "react";
import SingleBenefit from "./SingleBenefit";

const BenefitsSecton = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./benefits.JSON");
      const data = await res.json();
      setBenefits(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-36">
      <h2 className="py-2 text-5xl font-bold text-slate-700 text-start">
        Benefits
      </h2>
      <p className="text-start my-3 text-lg text-slate-700 mb-5">
        We take pride in providing our employees with the tools and support they
        need to feel empowered while fulfilling meaningful work.
      </p>
      <div className="grid grid-cols-3 gap-6">
        {benefits &&
          benefits.map((benefit) => (
            <SingleBenefit key={benefit.id} benefit={benefit}></SingleBenefit>
          ))}
      </div>
    </div>
  );
};

export default BenefitsSecton;

