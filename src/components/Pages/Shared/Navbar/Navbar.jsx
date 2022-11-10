import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { CgClose, CgMenuLeft } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/footerimage.png';
import Button from './Button';
import MegaMenu from './MegaMenu';
import { SearchBar } from './SearchBar';
import SingleMenu from './SingleMenu';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    
    let menuRef = useRef();
    useEffect(() => {
        const closeDropDown = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setShowDropDown(false);
            console.log(menuRef.current);
          }     
        
          console.log(e);
        };
    
        document.addEventListener('click', closeDropDown);
        
    
        return() =>{
          document.removeEventListener("click", closeDropDown);
        }
    
      }, []);
    const navigate = useNavigate();
  return (
    <div>
        <div className='manuBar  grid grid-flow-col '>
            <div className='logo flex lg:m-0 m-5 flex-row items-center col-span-3 lg:border-b-8 border-sky-50'>
                <img src={Logo} alt="logo" className='h-12 lg:pl-7 ' />
                {!isOpen && (
                            <div className='menu-icon cursor-pointer font-bold  absolute inline-block right-4 lg:hidden outline-none'
                            onClick={() => setOpen(!isOpen)}
                        >
                            <CgMenuLeft fontSize={40} className="text-red-600" />
                            <span className='uppercase text-[#BEBEC2]'>Menu</span>
                        </div>
                        )}
                    {isOpen &&  (<div className='closeIcon cursor-pointer absolute right-4 inline-block lg:hidden outline-none '
                    onClick={() => setOpen(!isOpen)}
                    >
                            <CgClose fontSize={40} className="text-red-600" />
                        </div>
                        )}
            </div>
            <div className='right md:block hidden pt-2 col-span-9'>
                <div className="menu-top">
                    <nav className='lg:flex justify-center gap-2 lg:flex-row hidden'>
                        <ul className='flex gap-4 pt-1'>
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
                <div className="main-menu" ref={menuRef}>
                    <ul className='flex'>
                        <li>
                            <button onClick={()=> setShowDropDown (!showDropDown)} className="relative group border-b-8 hover:text-white transition-all font-bold border-red-600  pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:bg-red-600 focus:outline-none">
                            <span><RiArrowDropDownLine className='inline-block' />Blood </span>
                            <br /><span className='text-white pl-4 pb-4'>for Life</span>

                            </button>
                            { showDropDown && (
                                <SingleMenu heading={"Am I eligible to donate plasma"} textleft1='ABCs of eligible' textleft2='Change to donate criteria' textleft3="Trans Individusls" textleft4='Sexual behaviour-based screen' heading2={"Donating blood"} textright1={"ABCs of eligible"} textright2="Change to donate criteria" textright3="Trans Individusls" textright4={"Sexual behaviour-based screen"} textright5="Sexual behaviour-based screen" textcenter1={"Sexual behaviour-based screen"} textcenter2="Sexual behaviour-based screen" textcenter3={"Sexual behaviour-based screen"} textcenter4={"Sexual behaviour-based screen"} textcenter5="Sexual behaviour-based screen" btnText="view all blood info" />
                            )}
                        </li>
                        <li>
                            <button onClick={()=> setShowDropDown (!showDropDown)} className="border-b-8 hover:text-white font-bold border-red-700 pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:bg-red-700 focus:outline-none">
                            <span><RiArrowDropDownLine className='inline-block' />Plasma</span>
                            <br /><span className='text-white pl-4'>for Life</span>

                            </button>

                            {/* { showDropDown && ( <div  className={`text-left transition-all ${showDropDown?'visible':'invisible'} absolute top-[9.5rem] z-50  w-fit flex flex-row space-x-10 p-8 bg-white shadow-2xl py-3`}>
                                <div className='drop flex flex-col mt-4'>
                                    <h1 className='font-semibold'>Am I eligible to donate plasma</h1>
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
                        </div>)} */}

                        </li>
                        <li>
                            <button onClick={()=> setShowDropDown (!showDropDown)}  className="border-b-8 hover:text-white font-bold pt-4 cursor-pointer text-left bg-white  text-gray-700 border-teal-500  hover:bg-teal-500 focus:outline-none">

                            <span><RiArrowDropDownLine className='inline-block' />Stem Cells</span>
                            <br /><span className='text-white pl-4 '>for Life</span>
                            </button>
                        </li>
                        <li>
                            <button  onClick={()=> setShowDropDown (!showDropDown)} className="border-b-8 hover:text-white font-bold pt-4 cursor-pointer text-left bg-white  text-gray-700 border-teal-600  hover:bg-teal-600 focus:outline-none">

                            <span><RiArrowDropDownLine className='inline-block' />Organs &</span>
                            <br /> <span className='pl-4'>Tissues</span>
                            <br /><span className='text-white pl-4'>for Life</span>
                            </button>
                        </li>
                        <li >
                            <button onClick={()=> setShowDropDown (!showDropDown)} className="border-b-8 hover:text-white font-bold border-sky-50  pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:border-gray-600 hover:bg-gray-600 focus:outline-none">
                                
                            <span><RiArrowDropDownLine className='inline-block' />Ways to</span>
                            <br /> <span className='pl-4'>Donate</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={()=> setShowDropDown (!showDropDown)} className="border-b-8 hover:text-white font-bold border-sky-50  pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:border-gray-600 hover:bg-gray-600 focus:outline-none">

                            <span><RiArrowDropDownLine className='inline-block' />Stories</span>
                            </button>
                        </li>

                    </ul>

                        {/* 
                        
                            dropdown start
                        
                        */}

                        {/* drop down for blood  */}
                    {/* { showDropDown && (
                        <MegaMenu menu={menu}/>
                    )} */}

{/* ${showDropDown?'visible':'invisible'} */}
                                        {/* { showDropDown && ( <div  className={`text-left transition-all ${showDropDown?'visible':'invisible'} absolute top-[9.5rem] z-50  w-fit flex flex-row space-x-10 p-8 bg-white shadow-2xl py-3`}>
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
                        </div>)} */}

                        {/* drop down for plasma  */}

                        {/* drop down for psteme cell */}

                        
                        {/* drop down for Organ & tissues  */}

                        
                        {/* drop down for Donaate  */}

                        
                        {/* drop down for Stories  */}

                        
                </div>
            </div>
        </div>


                            {/* mobile menu navigation  */}

        <div className={`md:hidden bg-white relative  h-full w-full bottom-0 py-24 pt-4 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } ease-in-out duration-700 z-50`}>

                        <div className='searchBar'>
                            <SearchBar width="w-full"  />
                        </div>
                        
                        <div className='py-5 flex justify-around'>
                            <div className='pr-8'>
                                <button className='rounded-full bg-[#f0f0f0] text-lg font-bold text-red-700 h-14 w-14'>FR</button>
                            </div>
                            <button className='h-14 w-28 bg-red-600 hover:border text-white hover:bg-white hover:text-red-600 border-[#C4161C] rounded-full font-bold outline-none inline-block uppercase'>
                                        Book Now
                            </button>
                            <button className='h-14 w-28 hover:bg-red-600 text-red-600 border border-red-600 hover:text-white bg-white rounded-full font-bold outline-none uppercase'>
                            <FaUserAlt className='inline-block'  color='red-600' /> 
                            Sign in
                            </button>
                        </div>
                        <ul className='border-[#f0f0f0]'>
                                <li className='border-l-8 hover:text-white border-red-600 w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:bg-red-600 focus:outline-none h-20 ease-in-out'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Blood
                                    </Link>
                                </li>
                                <li className='border-l-8 border-red-700 w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:bg-red-700 hover:text-white focus:outline-none h-20'>
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
                                <li className='font-normal text-left text-white uppercase px-3 pt-10'>
                                    <Link to='/hospital-services' className=''>
                                        Hospital Services
                                    </Link>
                                </li>
                                <li className='font-normal text-left text-white uppercase px-3 pt-10'>
                                    <Link>
                                        Reserch
                                    </Link>
                                </li>
                                 <li className='font-normal text-left text-white uppercase px-3 pt-10'>
                                    <Link>
                                        Careers
                                    </Link>
                                </li>               
                                <li className='font-normal text-left text-white uppercase px-3 pt-10'>
                                    <Link>
                                        Shop
                                    </Link>
                                </li>
                                <li className='font-normal text-left text-white uppercase px-3 pt-10 pb-4'>
                                    <Link>
                                        About us
                                    </Link>
                                </li>
                            </ul>
                    </div>
            </div>
    </div>
  )
}

export default Navbar;