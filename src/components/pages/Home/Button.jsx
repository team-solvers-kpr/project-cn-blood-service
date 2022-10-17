import React from 'react'

export const Button = ({
    title = '',
}) => {
  return (
    <button className='bg-slate-500 rounded-full text-white uppercase h-16 w-28'>
        {title}
    </button>
  )
}
