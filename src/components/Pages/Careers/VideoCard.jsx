import React, { useEffect, useState } from 'react';
import VideoModal from '../../Modal/VideoModal';


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
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-2 lg:gap-x-2 lg:gap-y-12 md:gap-2 max-w-full items-center'>
      {careerCardData && careerCardData.map( data =>
        <div key={data.id} className='bg-[#F0F0F0] flex  flex-col overflow-hidden'>
          <div className='video w-full relative'>
             
            
            <VideoModal images={data.image} videourl={data.video} /> 
             
          </div>
          <div className='content text-left p-12 lg:mb-12'>
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