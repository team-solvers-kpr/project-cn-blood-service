

// bg-red-600 bg-red-700 bg-teal-500 bg-teal-600


import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { HospitalCard } from './HospitalCard';
import HospitalRelatedInformation from './HospitalRelatedInformation';
import backgroundImg from '../../assets/SS_Mercy_2560x1150_0.jpg';

export const HospitalServices = () => {
  return (
    <div>
      <div className='container m-8'>
        <div className="h-full">
          <div className='hidden'>
            <img src={backgroundImg} alt="" />
          </div>
          <div className=''>
            <div className=''>
              <div className="content flex">
                <h1 className='text-5xl font-bold text-slate-700 md:w-7/12 lg:w-8/12 text-left' >Hospital services</h1>
              </div>
              <div className='max-w-xl mt-8 mb-8 text-left text-slate-700'>
                <p className=' mb-8'>Canadian Blood Services is responsible for a secure system of life essentials for transfusion and transplantation that’s reliable, accessible and sustainable.</p>
                <p>Our hospital liaison specialists work closely with hospital technical staff, physicians, administrators and provincial blood offices to establish standardized ways of collecting information about demand for our products and services. Our physicians provide support to hospitals, physicians and care providers, public health agencies, donors and others, 24 hours daily, 7 days a week.</p>
              </div>
              <hr className='h-0 w-24  text-left rounded  bg-[#E7131A] border-solid border-2 border-[#E7131A]
              ' />
            </div> 
          <div className='mt-8'>
            <div>
              <ul>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>COVID-19 Information for Health Care Professionals</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <span className='text-lg text-red-500 font-semibold'>Customer service</span>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>Hospital Services Forms</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>Laboratory services</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>Products</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>Inventory ordering</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>Licensing and inspections</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>Transfusion practice</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>Rare Blood Program</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>HLA/HPA Selected Platelets</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>Stem Cell Registry Documents</p>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='flex items-center gap-4 focus:underline'>
                    <span><AiOutlineArrowRight fontSize={24} color="#E7131A" /></span>
                      <p className='text-lg text-red-500 font-semibold'>Cord Blood Bank</p>
                  </Link>
                </li>
              </ul>
            </div>  
          </div>
        </div> 
        </div>
      </div>
      <div className='bg-[#F0F0F0] max-w-full '>
        <div className='pt-12 grid lg:grid-cols-3 grid-cols-1  lg:pl-12 gap-4 container pb-12'>
          <HospitalCard />
        </div>
      </div>
      <div className='bg-white mt-12'>
        <h1 className='text-left lg:ml-20 ml-12 text-2xl font-bold text-slate-700'>Related information</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:pl-12  pb-12'>
          <HospitalRelatedInformation />
        </div>
      </div>
    </div>
  )
}
