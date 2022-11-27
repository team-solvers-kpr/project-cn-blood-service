import React from 'react'

const Email = () => {
  return (
   <div>
     <div className='text-justify'>
        <input
        type='email'
        placeholder=''
        className='w-4/5 h-9 rounded border-gray-400'
        />
       
    </div>
    <div className='text-justify mt-4'>
    <button className=' border rounded  bg-gray-400 text-white py-2 px-5 text-sm'>Subscribe</button>
    </div>
   </div>
    
  )
}

export default Email