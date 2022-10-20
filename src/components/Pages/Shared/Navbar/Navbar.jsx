import React, { useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import  LogoImg  from '../../../assets/logo.png';
import NavLinks  from './NavLinks';
import  Button  from './Button';
import { CgMenuLeft, CgClose } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav>
            <div className='lg:flex justify-around items-center'>
                <div className='header-left logo  z-50 p-5 md:w-auto w-full flex justify-between'>
                    <img src={LogoImg} alt="logo" />
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
                <div className=' header-right'>
                    <div className='header-right-top lg:ml-28'>
                            <ul className='md:flex hidden items-center gap-3 pl-0 mb-0'>
                                <li className='font-normal'>
                                    <Link to='/hospital services' className='pt-0 pb-0 pr-4 pl-4 hover:underline text-[#4D4D4D]'>
                                        Hospital Services
                                    </Link>
                                </li>
                                <NavLinks />
                                <div className='flex items-center gap-3'>
                                    <button className='font-bold text-[#C4161C]'>Francia</button>
                                    {/* <button className='h-11 w-28 bg-[#C4161C] hover:border text-white hover:bg-white hover:text-[#C4161C] border-[#C4161C] rounded-full font-bold outline-none inline-block uppercase'>
                                        Book Now
                                    </button> */}
                                    <Button
                                        btnText={"Book Now"}
                                        bgprimary="bg-[#C4161C]"
                                        textprimary="text-[#C4161C]"
                                        borderprimary="border-red-700"
                                        bgsecondary="bg-white"
                                        textColor='text-white'
                                        onClick={(e) => Navigate("/bookNow")}
                                    />
                                    {/* <button className='h-11 w-28 hover:bg-[#C4161C] text-[#C4161C] border border-[#C4161C] hover:text-white bg-white rounded-full font-bold outline-none uppercase'>
                                    <FaUserAlt className='inline-block'  color='#C4161C' /> 
                                    Sign in
                                    </button> */}

                                    <Button
                                        btnText={"Sign in"}
                                        bgprimary="bg-white"
                                        textprimary="text-white"
                                        borderprimary="border-red-700"
                                        bgsecondary="bg-[#C4161C]"
                                        textColor='text-[#C4161C]'
                                        onClick={(e) => Navigate("/signin")}
                                    />
                                    <button className='bg-[#4D4D4D] hover:bg-[#C4161C] rounded-full h-10 w-10'>
                                        <AiOutlineSearch className='inline-block'  color='#ffff' fontSize={28} />
                                    </button>
                                </div>
                            </ul>
                    </div>
                    <div className='mt-4'>
                            <ul className='md:flex hidden border-[#f0f0f0]'>
                                <li className='border-b-8 hover:text-white text-lg font-bold border-red-500 w-full pt-2 cursor-pointer text-left bg-white  text-gray-700 shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <Link  to='/'  className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Blood
                                    </Link>
                                </li>
                                <li className='border-b-8 border-red-700 w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <Link  to='/' className=' pt-4 pb-0 pr-2 pl-2 '>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Plasma
                                    </Link>
                                </li>
                                <li className='border-b-8 border-[#54C3BB] hover:bg-[#54C3BB] hover:text-white w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm  focus:outline-none '>
                                    <Link  to='/' className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Stem Cells
                                    </Link>
                                </li>
                                <li className=' border-b-8 border-[#419B96] hover:bg-[#419B96] w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 hover:text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <Link to='/about'  className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Organ & Tissues
                                    </Link>
                                </li>
                                <li className=' border-b-8 border-[#F0F0F0] w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm  hover:bg-[#4D4D4D] hover:border-[#4D4D4D] hover:text-white focus:outline-none h-20'>
                                    <Link  to='/' className=' pt-4 pb-0 pr-2 pl-2 '>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Ways to donet
                                    </Link>
                                </li>
                                
                                <li className=' border-b-8 border-[#F0F0F0]  w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:text-white hover:border-[#4D4D4D] hover:bg-[#4D4D4D] focus:outline-none h-20'>
                                    <Link  to='/' className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Stories
                                    </Link>
                                </li>
                            </ul>
                    </div>

                    {/* mobile menu navigation  */}

                    <div className={`md:hidden bg-white relative  h-full w-full bottom-0 py-24 pt-4 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } ease-in-out duration-700 z-10`}>
                        
                        <div className='py-5 flex justify-around'>
                            <div className='pr-8'>
                                <button className='rounded-full bg-[#f0f0f0] text-lg font-bold text-red-900 h-14 w-14'>FR</button>
                            </div>
                            <button className='h-14 w-28 bg-[#C4161C] hover:border text-white hover:bg-white hover:text-[#C4161C] border-[#C4161C] rounded-full font-bold outline-none inline-block uppercase'>
                                        Book Now
                            </button>
                            <button className='h-14 w-28 hover:bg-[#C4161C] text-[#C4161C] border border-[#C4161C] hover:text-white bg-white rounded-full font-bold outline-none uppercase'>
                            <FaUserAlt className='inline-block'  color='#C4161C' /> 
                            Sign in
                            </button>
                        </div>
                        <ul className='border-[#f0f0f0]'>
                                <li className='border-l-8 hover:text-white border-red-700 w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:bg-red-700 focus:outline-none h-20 ease-in-out'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Blood
                                    </Link>
                                </li>
                                <li className='border-l-8 border-red-900 w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:bg-red-900 hover:text-white focus:outline-none h-20'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Plasma
                                    </Link>
                                </li>
                                <li className='border-l-8 border-[#54C3BB] hover:bg-[#54C3BB] w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:text-white focus:outline-none h-20'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Stem Cells
                                    </Link>
                                </li>
                                <li className='border-l-8 border-[#419B96] hover:bg-[#419B96] w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 hover:text-white shadow-sm  focus:outline-none h-20'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Organ & 
                                            Tissues
                                    </Link>
                                </li>
                                <li className=' border-l-8 border-[#F0F0F0] w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm  hover:bg-[#4D4D4D] hover:border-[#4D4D4D] hover:text-white focus:outline-none h-20'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Ways to donet
                                    </Link>
                                </li>
                                
                                <li className=' border-l-8 border-[#F0F0F0]  w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:text-white hover:border-[#4D4D4D] hover:bg-[#4D4D4D] focus:outline-none h-20'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Stories
                                    </Link>
                                </li>
                            </ul>
                        <div className='links bg-[#4D4D4D]'>
                            <ul>
                                <li className='font-normal text-left text-white uppercase pt-10'>
                                    <Link to='/hospital services' className='px-3'>
                                        Hospital Services
                                    </Link>
                                </li>
                                <NavLinks textColor='text-white' textTransform='uppercase' />
                            </ul>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;