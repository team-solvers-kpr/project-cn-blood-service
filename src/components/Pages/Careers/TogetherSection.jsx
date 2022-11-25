import React from 'react'
import VideoModal from '../../Modal/VideoModal';

const TogetherSection = () => {
  return (
    <div className='bg-red-700'>
        <div className='grid grid-flow-col m-12 gap-12'>

            <div className="content w-full grid-cols-4 text-white text-left">
                <h1 className='text-3xl mt-12 mb-8 font-bold'>Together, we make a difference</h1>
                <p className='mb-4 font-xl' >Thousands of Canadians depend on us every day for reliable access to safe blood, plasma, stem cells and organs and tissues.</p>
            <p className='mb-4 font-xl'>If you are looking for a rewarding experience and the opportunity to make a meaningful difference, we encourage you to consider joining our dedicated team.</p>
            <h2 className='font-xl font-medium'>This is our people promise.</h2>
            </div>
            <div className="video grid-cols-6 my-8">
                <VideoModal images={`https://www.blood.ca/sites/default/files/video_thumbnails/QAP3SMTCsVo.jpg`} videourl={`https://www.youtube.com/watch?v=QAP3SMTCsVo`} />
            </div>
        </div>
    </div>
  )
}

export default TogetherSection