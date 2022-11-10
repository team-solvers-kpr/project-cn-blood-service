import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const MegaMenu = ({menu}) => {
  return (
    <div>
        <div  className={`text-left transition-all  absolute top-[9.5rem] z-50  w-fit flex flex-row space-x-10 p-8 bg-white shadow-2xl py-3`}>
                                <div className='drop flex flex-col mt-4'>
                                    <h1 className='font-semibold'>Am I eligible to donate blood</h1>
                                    <hr className='h-0 w-24 my-6 rounded  bg-red-600 border-solid border-2 border-red-600' />
                                    <ul className='space-y-4 font-medium '>
                                        <li className=''>
                                            <Link to='/blood' className='hover:text-red-600 '>ABCs of eligible</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className='  hover:text-red-600'>Change to donate criteria</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Trans Individusls</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Sexual behaviour-based screen</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <h1>Donating blood</h1>
                                    <hr className='h-0 w-24 my-6 rounded  bg-red-600 border-solid border-2 border-red-600' />
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/blood'className='  hover:text-red-600'>ABCs of eligible</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Change to donate criteria</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Trans Individusls</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Sexual behaviour-based screen</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Sexual behaviour-based screen</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='space-y-4 mt-4'>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>ABCs of eligible</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Change to donate criteria</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Trans Individusls</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Sexual behaviour-based screen</Link>
                                        </li>
                                        <li>
                                            <Link to='/blood'className=' hover:text-red-600'>Sexual behaviour-based screen</Link>
                                        </li>
                                        <li className='bg-red-600 space-x-10 h-20 font-bold flex justify-center items-center'>
                                            <Link className='focus:underline text-white'>
                                            View all blood info
                                            </Link>
                                            <span><BsArrowRight className='text-white' /></span>
                                        </li>
                                    </ul>
                                </div>
</div>
    </div>
  )
}

export default MegaMenu