import React, { useEffect, useState } from 'react';
import VideoModal from '../../Modal/VideoModal';
import {BsPlayCircleFill} from 'react-icons/bs';


const VideoCard = () => {
  const [ careerCardData, setCareerCardData ] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('./careerVideo.JSON');
      const data = await res.json();
      setCareerCardData(data);
    }
    fetchData();

  }, []);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-2 lg:gap-2 md:gap-2 max-w-full items-center'>
      {careerCardData && careerCardData.map( data =>
        <div key={data.id} className='bg-[#F0F0F0] flex  flex-col '>
          <div className='video w-full'>
            <BsPlayCircleFill  fontSize={100} className={`text-red-600 -my-14 transition-all ease-in ml-[16rem] mt-[8rem] absolute `}/>
             <VideoModal images={data.image} videourl={data.video} /> 
             
          </div>
          <div className='content text-left p-12 mb-12'>
           <h1 className='employes-name mb-4 font-bold text-xl'>{data.name}</h1>
           <hr className='h-0 w-24  rounded  bg-red-900 border-solid border-2 border-red-600' />
           <p className='pra-top mt-4'>{data.pragraphtop}</p>
           <p className='pra-bottom mt-8'>{data.pragraphbottom}</p>
          </div>
      </div>)}
    </div>
  )
}

export default VideoCard