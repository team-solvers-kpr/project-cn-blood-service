import React from 'react'

export const SearchBar = ({
  width,
  pr
}) => {
  return (
    <div className="mx-auto max-w-md ">
      <form action="" className="relative mx-auto w-max ">
        <input type="search" 
        placeholder='what you are searching for?'
              className={`cursor-pointer relative z-10 h-12  rounded-full border bg-transparent pl-12 outline-none ${width} focus:w-full focus:cursor-text focus:border-red-700 ${pr}  `} />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-red-700 peer-focus:stroke-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>
    </div>
  )
}


