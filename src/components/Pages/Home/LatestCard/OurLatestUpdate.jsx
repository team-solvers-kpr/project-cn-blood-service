import React from 'react'
import Button from '../../Shared/Navbar/Button'
import LatestCard from './LatestCard'

export const OurLatestUpdate = () => {
  return (
    <div className='pt-8 container'>
        <div className='ourLatestUpdate flex justify-between items-center'>
            <div className='ml-12'>
                <span>
                    <h1 className='font-bold text-[#4D4D4D] text-5xl'>Our latest updates</h1>
                </span>
            </div>
            <div className=''>
                <Button btnText='Read All News' bgprimary='bg-red-500' bgsecondary='bg-red-700' textColor='text-white'width='w-32' height="h-10" fontwidth="font-semibold" fontsize="text-sm" />
                <Button btnText='Read All Stories' bgprimary='bg-red-500' bgsecondary='bg-red-700' textColor='text-white'width='w-32' height="h-10" fontwidth="font-semibold" fontsize="text-sm" />
                
            </div>
        </div>
        <div className='pt-12 '>
            <LatestCard />
        </div>
    </div>
  )
}
