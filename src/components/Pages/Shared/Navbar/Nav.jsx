import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { CgClose, CgMenuLeft } from 'react-icons/cg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/footerimage.png';
import Button from './Button';
import { SearchBar } from './SearchBar';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false)
    const navigate = useNavigate();
  return (
    <div className='manuBar flex flex-row'>
        <div className='logo flex flex-row'>
            <img src={Logo} alt="logo" className='h-16' />
            {!isOpen && (
                        <div className='menu-icon cursor-pointer font-bold  absolute inline-block right-4 lg:hidden outline-none'
                        onClick={() => setOpen(!isOpen)}
                    >
                        <CgMenuLeft fontSize={40}  />
                        <span className='uppercase text-[#BEBEC2]'>Menu</span>
                    </div>
                    )}
                   {isOpen &&  (<div className='closeIcon cursor-pointer absolute right-4 inline-block lg:hidden outline-none '
                   onClick={() => setOpen(!isOpen)}
                   >
                        <CgClose fontSize={40} />
                    </div>
                    )}
        </div>
        <div className='right pt-4'>
            <div className="menu-top">
                <nav className='lg:flex justify-center gap-2 lg:flex-row hidden'>
                    <ul className='flex gap-2 pt-1'>
                        <li className='hover:underline'>
                            <Link to='/hospital-service' className=' opacity-80 hover:opacity-100 font-medium'>Hospital Services</Link>
                        </li>
                        <li className='hover:underline'>
                            <Link to='/research' className=' opacity-80 hover:opacity-100 font-medium'>Research</Link>
                        </li>
                        <li className='hover:underline'>
                            <Link to='/careers' className=' opacity-80 hover:opacity-100 font-medium'>Careers</Link>
                        </li>
                        <li className='hover:underline'>
                            <Link to='/shop' className=' opacity-80 hover:opacity-100 font-medium'>Shop</Link>
                        </li>
                        <li className='hover:underline'>
                            <Link to='/about-us' className=' opacity-80 hover:opacity-100 font-medium'>About us</Link>
                        </li>
                    </ul>
                    <div className='inline-flex  gap-2'>
                        <div className='topbuttons inline-flex gap-2'>
                            <div className='link pt-1'>
                                <Link className='text-red-500 font-bold'>
                                    Français
                                </Link>
                            </div>
                            <div className='buttons inline-flex gap-2'>
                                <Button
                                    btnText={"Book Now"}
                                    bgprimary="bg-[#C4161C]"
                                    height="h-10"
                                    width="w-28"
                                    textprimary="text-[#C4161C]"
                                    borderprimary="border-red-700"
                                    bgsecondary="bg-white"
                                    textColor='text-white'
                                    fontwidth="font-bold"
                                    fontsize="text-base"
                                    onClick={(e) => navigate("/bookNow")}
                                />

                                <Button
                                    btnText={"Sign in"}
                                    bgprimary="bg-white"
                                    height="h-11"
                                    width="w-28"
                                    fontwidth="font-bold"
                                    textTransform='uppercase'
                                    fontsize="text-base"
                                    textprimary="text-white"
                                    borderprimary="border-red-700"
                                    bgsecondary="bg-[#C4161C]"
                                    textColor='text-[#C4161C]'
                                    onClick={(e) => navigate("/signin")}
                                />
                            </div>
                        </div>
                        <div className='topsearchbar '>
                            <SearchBar width='w-12' pr= 'focus:pr-4' />
                        </div>
                    </div>
                </nav>
            </div>
            <div className="main-menu flex">
                {!showDropdown &&(<div onClick={() => setShowDropdown(!showDropdown)} className="border-b-8 inline-flex items-center hover:text-white text-lg font-bold border-red-500 w-full pt-2 cursor-pointer text-left bg-white  text-gray-700 shadow-sm hover:bg-red-500 focus:outline-none">
                    <span><RiArrowDropDownLine /></span>
                    <span className=''>Blood</span>


                    {/* 
                    
                        dropdown start
                    
                    */}
                    <div  className={`absolute top-28 container flex flex-row space-x-10 p-8 bg-white shadow-2xl py-3`}>
                            <div className='drop flex flex-col'>
                                <h1>Am I eligible to donate blood</h1>
                                <hr className='h-0 w-24 my-6 rounded  bg-red-500 border-solid border-2 border-red-500' />
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/'>ABCs of eligible</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Change to donate criteria</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Trans Individusls</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Sexual behaviour-based screen</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col'>
                                <h1>Donating blood</h1>
                                <hr className='h-0 w-24  rounded  bg-red-900 border-solid border-2 border-[#E7131A]' />
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/'>ABCs of eligible</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Change to donate criteria</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Trans Individusls</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Sexual behaviour-based screen</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Sexual behaviour-based screen</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/'>ABCs of eligible</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Change to donate criteria</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Trans Individusls</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Sexual behaviour-based screen</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Sexual behaviour-based screen</Link>
                                    </li>
                                    <li className='bg-red-500 space-x-10 h-20 left-0 flex items-center'>
                                        <Link className='focus:underline text-white'>
                                        View all blood info
                                        </Link>
                                        <span><BsArrowRight className='text-white' /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>)}
                <div className="border-b-8 inline-flex items-center hover:text-white text-lg font-bold border-red-500 w-full pt-2 cursor-pointer text-left bg-white  text-gray-700 shadow-sm hover:bg-red-500 focus:outline-none">
                    <span><RiArrowDropDownLine /></span>
                    <span className=''>Blood</span>
                </div>
                <div className="border-b-8 inline-flex items-center hover:text-white text-lg font-bold border-red-500 w-full pt-2 cursor-pointer text-left bg-white  text-gray-700 shadow-sm hover:bg-red-500 focus:outline-none">
                    <span><RiArrowDropDownLine /></span>
                    <span className=''>Blood</span>
                </div>
                <div className="border-b-8 inline-flex items-center hover:text-white text-lg font-bold border-red-500 w-full pt-2 cursor-pointer text-left bg-white  text-gray-700 shadow-sm hover:bg-red-500 focus:outline-none">
                    <span><RiArrowDropDownLine /></span>
                    <span className=''>Blood</span>
                </div>
                <div className="border-b-8 inline-flex items-center hover:text-white text-lg font-bold border-red-500 w-full pt-2 cursor-pointer text-left bg-white  text-gray-700 shadow-sm hover:bg-red-500 focus:outline-none">
                    <span><RiArrowDropDownLine /></span>
                    <span className=''>Blood</span>
                </div>
                <div className="border-b-8 inline-flex items-center hover:text-white text-lg font-bold border-red-500 w-full pt-2 cursor-pointer text-left bg-white  text-gray-700 shadow-sm hover:bg-red-500 focus:outline-none">
                    <span><RiArrowDropDownLine /></span>
                    <span className=''>Blood</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav;