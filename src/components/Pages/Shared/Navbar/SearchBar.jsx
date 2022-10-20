import React from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

export const SearchBar = () => {
  return (
    <div>
        <div className='relative bg-slate-50 border rounded-full inline-flex justify-between items-center'>
            <div className='bg-[#4D4D4D] hover:bg-[#C4161C] rounded-full h-11 w-11 absolute cursor-pointer inline-flex justify-center items-center'>
                <AiOutlineSearch  className='' color='fff' fontSize={28} />
             </div>
            <form action="">
                <input type='text' className='h-11 ml-12 w-[290px] bg-transparent outline-none' placeholder='What are we searching for?' name='name' />
                <AiOutlineClose className='' fontSize={18} color='#C4161C' />
            </form>
            <AiOutlineClose className='cursor-pointer' fontSize={28} color='#C4161C' />                                        
        </div>
    </div>
  )
}
