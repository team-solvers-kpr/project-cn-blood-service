import React from 'react'
import Button from '../../Shared/Navbar/Button'
import LatestCard from './LatestCard';
import { useNavigate } from 'react-router-dom';
const OurLatestUpdate = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-gray-100'>
    <div className='pt-96 lg:py-16 px-4 lg:mx-8'>
        <div className='ourLatestUpdate flex justify-between items-center'>
            <div className='lg:ml-16'>
                <span>
                    <h1 className='font-bold text-[#4D4D4D] lg:text-5xl text-xl'>Our latest updates</h1>
                </span>
            </div>
            <div className='flex flex-row gap-4'>
                <Button btnText='Read All News' bgprimary='bg-red-500' bgsecondary='bg-red-700' textColor='text-white'width='w-32' height="h-10" fontwidth="font-semibold" fontsize="text-sm" onClick={(e) => navigate("/readAllNews")} />
                <Button btnText='Read All Stories' bgprimary='bg-red-500' bgsecondary='bg-red-700' textColor='text-white'width='w-32' height="h-10" fontwidth="font-semibold" fontsize="text-sm" onClick={(e) => navigate("/readAllStories")}/>
                
            </div>
        </div>
        <div className='pt-12'>
            <LatestCard />
        </div>
    </div>
    </div>
  )
}

export default OurLatestUpdate;