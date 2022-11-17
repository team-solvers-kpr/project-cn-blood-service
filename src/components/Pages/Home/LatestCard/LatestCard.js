import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const LatestCard = () => {
  const [ latestCardData, setLatestCardData ] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('./ourlatestupdate.JSON');
      const data = await res.json();
      setLatestCardData(data);
    }
    fetchData();

  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:gap-2 md:gap-2 max-w-full items-center">
    {latestCardData && latestCardData.map(data =>
      <div >
        <div className='bg-white flex flex-col shadow-lg items-center h-[800px]' key={data.id}>
          <div className='cardImg'>
              <img src={data.img} alt="" />
          </div>
          <div className='cardContent p-12 text-left'>
            <div>
                <h1 className='py-6'>
                    <span className='text-red-600 text-3xl font-bold'>{data.title}</span>
                </h1>
                <hr className='h-0 w-24  rounded  bg-red-900 border-solid border-2 border-[#E7131A]' />
                <p className='py-6'>{data.shortDescription}</p>
            </div>
            <div className='text-xl text-red-600 '>
                <Link to='/'>
                    {data.moreLink} <AiOutlineArrowRight className='inline-block' />
                </Link>
            </div>
          </div>
        </div>
      </div>  
  )}
  </div>
)};

export default LatestCard;
