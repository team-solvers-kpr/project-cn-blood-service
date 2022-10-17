import React from 'react'

export const Button = ({
    title = '',
}) => {
  return (
    <button className='bg-[#C4161C] font-bold rounded-full text-white uppercase h-14 w-24 '>
        {title}
    </button>
  )
}
