import React, { useState } from 'react'

export const ExpandableSearchbar = () => {
  return (
    <div>
      <form action="" className=' max-w-md transition-all duration-100 ease-in-out '>
        <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
          <div className='btn pointer-events-none btn-ghost btn-circle bg-red-600 text-white absolute'>

        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path strokeLinecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
          </div>
         <input type="text" placeholder="what are we search for?" className="input input-bordered  input-success w-full max-w-xs h-[50px] pr-16 pl-16 py-2 font-semibold placeholder:italic placeholder-gray-500 text-gray-500 rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2" />
        </div>
      </form>
    </div>
  )
}


