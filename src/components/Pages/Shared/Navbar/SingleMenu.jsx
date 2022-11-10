import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SingleMenu = ({heading, textleft1, textleft2, textleft3, textleft4, textcenter1, heading2, textcenter2, textcenter3, textcenter4, textcenter5, link, textright1, textright2, textright3, textright4, textright5, btnText }) => {
  return (
    <div>
        <div  className={`text-left transition-all  absolute top-[9.5rem] z-50 flex w-[90rem] space-x-10 p-8 bg-white shadow-2xl py-3`}>
                                <div className='drop flex flex-col mt-4'>
                                    <h1 className='font-semibold'>{heading}</h1>
                                    <hr className='h-0 w-24 my-6 rounded  bg-red-600 border-solid border-2 border-red-600' />
                                    <ul className='space-y-4 font-medium '>
                                        <li className=''>
                                            <Link to={link} className='hover:text-red-600 '>{textleft1}</Link>
                                        </li>
                                        <li>
                                            <Link to={link}className='  hover:text-red-600'>{textleft2}</Link>
                                        </li>
                                        <li>
                                            <Link to={link}className=' hover:text-red-600'>{textleft3}</Link>
                                        </li>
                                        <li>
                                            <Link to={link}className=' hover:text-red-600'>{textleft4}</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <h1>{heading2}</h1>
                                    <hr className='h-0 w-24 my-6 rounded  bg-red-600 border-solid border-2 border-red-600' />
                                    <ul className='space-y-4 font-medium'>
                                        <li>
                                            <Link to={link} className='  hover:text-red-600'>{textcenter1}</Link>
                                        </li>
                                        <li>
                                            <Link to={link} className=' hover:text-red-600'>{textcenter2}</Link>
                                        </li>
                                        <li>
                                            <Link to={link} className=' hover:text-red-600'>{textcenter3}</Link>
                                        </li>
                                        <li>
                                            <Link to={link} className=' hover:text-red-600'>{textcenter4}</Link>
                                        </li>
                                        <li>
                                            <Link to={link} className=' hover:text-red-600'>{textcenter5}</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='space-y-4 mt-4 font-medium'>
                                        <li>
                                            <Link to={link} className=' hover:text-red-600'>{textright1}</Link>
                                        </li>
                                        <li>
                                            <Link to={link} className=' hover:text-red-600'>{textright2}</Link>
                                        </li>
                                        <li>
                                            <Link to={link} className=' hover:text-red-600'>{textright3}</Link>
                                        </li>
                                        <li>
                                            <Link to={link} className=' hover:text-red-600'>{textright4}</Link>
                                        </li>
                                        <li>
                                            <Link to={link} className=' hover:text-red-600'>{textright5}</Link>
                                        </li>
                                        <li className='bg-red-600 space-x-10 h-20 font-bold flex justify-center items-center'>
                                            <Link to={link} className='focus:underline text-white'>
                                                {btnText}
                                            </Link>
                                            <span><BsArrowRight className='text-white' /></span>
                                        </li>
                                    </ul>
                                </div>
</div>
    </div>
  )
}

export default SingleMenu