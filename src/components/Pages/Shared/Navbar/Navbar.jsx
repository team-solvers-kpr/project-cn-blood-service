import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { CgClose, CgMenuLeft } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Logo from '../../../assets/footerimage.png';
import Button from './Button';
import Nav from './Nav';
import { ExpandableSearchbar } from './ExpandableSearchbar';
import { Disclosure } from '@headlessui/react';
import { BsArrowRight } from 'react-icons/bs';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isExpand, setExpand] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const logOut=()=>{
        signOut(auth)
    }
    
    const navigate = useNavigate();
  return (
    <div className='lg:fixed w-full bg-white z-40 top-0 left-0 transition-all ease-in-out'>
        <div className='manuBar grid grid-flow-col '>
            <div className='logo flex lg:m-0 m-5 flex-row items-center col-span-3 lg:border-b-8 border-sky-50'>
                <Link to='/'>
                    <img  src={Logo} alt="logo" className='h-[52px] lg:pl-32 ' />
                </Link>
                {!isOpen && (
                            <div className='menu-icon cursor-pointer font-bold  absolute inline-block right-4 lg:hidden outline-none'
                            onClick={() => setOpen(!isOpen)}
                        >
                            <CgMenuLeft fontSize={40} className="text-red-600" />
                            <span className='uppercase text-[#BEBEC2]'>Menu</span>
                        </div>
                        )}
                    {isOpen &&  (<div className='closeIcon cursor-pointer absolute right-4 inline-block lg:hidden outline-none'
                    onClick={() => setOpen(!isOpen)}
                    >
                            <CgClose fontSize={40} className="text-red-600" />
                        </div>
                        )}
            </div>
            <div className=' md:block hidden pt-2 col-span-9'>
                <div>
                    <nav className='lg:flex justify-center gap-2 lg:flex-row hidden'>
                        <ul className={`${isExpand ? 'hidden': 'block'} flex gap-4 pt-1`}>
                            <li>
                                <Link to='/hospital-services' className='font-semibold opacity-50 hover:opacity-80 hover:underline'>Hospital Services</Link>
                            </li>
                            <li>
                                <Link to='/research' className='font-semibold opacity-50 hover:opacity-80 hover:underline'>Research</Link>
                            </li>
                            <li>
                                <Link to='/careers' className='font-semibold opacity-50 hover:opacity-80 hover:underline'>Careers</Link>
                            </li>
                            <li>
                                <Link to='/shop' className='font-semibold opacity-50 hover:opacity-80 hover:underline'>Shop</Link>
                            </li>
                            <li>
                                <Link to='/about-us' className='font-semibold opacity-50 hover:opacity-80 hover:underline'>About us</Link>
                            </li>
                        </ul>
                        <div className={`inline-flex  gap-2 ${isExpand ? 'hidden': 'block'}`}>
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
                                        textprimary="text-red-600"
                                        borderprimary="border-red-600"
                                        bgsecondary="bg-white"
                                        textColor='text-white'
                                        fontwidth="font-bold"
                                        fontsize="text-base"
                                        onClick={(e) => navigate("/bookNow")}
                                    />

                                    {!user ?
                                        <Button
                                        btnText={"Sign In"}
                                        buttonIcon= { <FaUserAlt className='inline-block -mt-1 mr-2' /> }
                                        bgprimary="bg-white"
                                        height="h-10"
                                        width="w-28"
                                        fontwidth="font-bold"
                                        fontsize="text-base"
                                        textprimary="text-white"
                                        borderprimary="border-red-600"
                                        bgsecondary="bg-red-600"
                                        textColor='text-red-600'
                                        onClick={() => navigate("/signin")}
                                    />
                                    :
                                    <Button
                                        btnText={"Log out"}
                                        bgprimary="bg-white"
                                        height="h-10"
                                        width="w-28"
                                        fontwidth="font-bold"
                                        textTransform='uppercase'
                                        fontsize="text-base"
                                        textprimary="text-white"
                                        borderprimary="border-red-700"
                                        bgsecondary="bg-[#C4161C]"
                                        textColor='text-[#C4161C]'
                                        onClick={logOut}
                                    />}
                                </div>
                            </div>  
                        </div>
                        
                        <div className='pb-4'>
                                <div>
                                    <form action="" className={` ${isExpand ? 'float-left' : 'hidden'} max-w-full transition-all duration-500 ease-in-out`}>
                                        <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                                            <div className='border rounded-full p-2 bg-gray-700 pointer-events-none  absolute'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path strokeLinecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                            <input type="text" placeholder="What are we search for?" className="input input-bordered input-success w-full max-w-full h-[45px] pr-16 pl-16 font-semibold placeholder:italic placeholder-gray-500 text-gray-500 rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2" />
                                            <div 
                                                onClick={() => setExpand(false)}
                                                className="btn btn-sm btn-circle absolute top-2 right-1"
                                            >✕
                                             </div>
                                        </div>
                                    </form>
                                </div>
                                <button  
                                    onClick={() => setExpand(true)} 
                                    className={` ${isExpand ? 'hidden': 'block'} border rounded-full p-2 bg-gray-700`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                        </div>
                    </nav>
                </div>
                <div className="main-menu flex">
                    <Nav  />
                </div>
            </div>
        </div>


                            {/* mobile menu navigation  */}

        <div className={`md:hidden bg-white h-full w-full py-24 pt-4 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } ease-in-out duration-700 z-50`}>

                        <div className='searchBar'>
                            <ExpandableSearchbar   />
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
                                {/* <li className='border-l-8 hover:text-white border-red-600 w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:bg-red-600 focus:outline-none h-20 ease-in-out'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Blood
                                    </Link>
                                </li> */}
                                <li className='group '>
                                    <div className="w-full ">
                                        <div className="mx-auto w-full">
                                            <Disclosure>
                                            {({ open }) => (
                                                <>
                                                <Disclosure.Button className="flex gap-2 border-l-8 border-red-600 hover:text-white focus:text-white focus:bg-red-600  w-full group-hover:bg-red-600 cursor-pointer text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
                                                    <RiArrowDropDownLine
                                                        className={`${
                                                            open ? 'rotate-180 transform' : ''
                                                        } h-8 w-8 text-black duration-300 my-8 `}
                                                    />
                                                    <span className='py-8'>Blood</span>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="bg-red-600 px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Blood info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </Disclosure.Panel>
                                                <Disclosure.Panel className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Am I eligible to donate blood?</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to=''>
                                                                    ABCs of eligibility
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                     Changes to donation criteria
                                                                </Link>
                                                            </li>
                                                                <li>
                                                                    <Link to={``}>
                                                                        Trans individuals
                                                                    </Link>
                                                                </li>

                                                                    
                                                                <li>
                                                                    <Link>
                                                                        Sexual behaviour-based screening
                                                                    </Link>
                                                                </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8'>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Donating blood</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                    What is my blood type?
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donation process
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Rare Blood Program
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donor Questionnaire
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donor health and safety
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 mb-12'>
                                                        <ul className='font-semibold space-y-8 opacity-80'>
                                                            <li>
                                                                <Link>
                                                                    Donating platelets
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Recognition program
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors Donor centre  hours & locations
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    COVID-19 information
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Disclosure.Panel>
                                                </>
                                            )}
                                            </Disclosure>
                                        </div>
                                    </div>
                                </li>
                                <li className='group '>
                                    <div className="w-full ">
                                        <div className="mx-auto w-full">
                                            <Disclosure>
                                            {({ open }) => (
                                                <>
                                                <Disclosure.Button className="flex gap-2 border-l-8 border-red-700 hover:text-white focus:text-white focus:bg-red-700  w-full group-hover:bg-red-700 cursor-pointer text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
                                                    <RiArrowDropDownLine
                                                        className={`${
                                                            open ? 'rotate-180 transform' : ''
                                                        } h-8 w-8 text-black duration-300 my-8 `}
                                                    />
                                                    <span className='py-8'>Plasma</span>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="bg-red-700 px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Plasma info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </Disclosure.Panel>
                                                <Disclosure.Panel className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Am I eligible to donate plasma?</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to=''>
                                                                    Become a plasma donor
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                    Eligibility quiz
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                    ABC of eligibility
                                                                </Link>
                                                            </li>
                                                                <li>
                                                                    <Link to={``}>
                                                                        Men who have sex with men plasma eligibility
                                                                    </Link>
                                                                </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8'>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Donating plasma</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                How your plasma donation helps




                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donor Questionnaire
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donor health and safety
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donor centres hours & locations
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    COVID-19 information
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 mb-12'>
                                                        <ul className='font-semibold space-y-8 opacity-80'>
                                                            <li>
                                                                <Link>
                                                                Securing Canada’s plasma supply
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Plasma and the blood system supply chain
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Plasma protein and related products
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    COVID-19 and convalescent plasma
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Disclosure.Panel>
                                                </>
                                            )}
                                            </Disclosure>
                                        </div>
                                    </div>
                                </li>
                                <li className='group '>
                                    <div className="w-full ">
                                        <div className="mx-auto w-full">
                                            <Disclosure>
                                            {({ open }) => (
                                                <>
                                                <Disclosure.Button className="flex gap-2   border-l-8 border-[#54C3BB] hover:bg-[#54C3BB] hover:text-white focus:text-white focus:bg-[#54C3BB]  w-full group-hover:bg-[#54C3BB]cursor-pointer text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
                                                    <RiArrowDropDownLine
                                                        className={`${
                                                            open ? 'rotate-180 transform' : ''
                                                        } h-8 w-8 text-black duration-300 my-8 `}
                                                    />
                                                    <span className='py-8'>Stem Cells</span>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="bg-[#54C3BB] px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Stem Cells info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </Disclosure.Panel>
                                                <Disclosure.Panel className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Adult stem cell registry</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to=''>
                                                                Donating stem cells

                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                Stem cell donation eligibility and registration

                                                                </Link>
                                                            </li>
                                                                <li>
                                                                    <Link to={``}>
                                                                    How stem cell donation works
                                                                    </Link>
                                                                </li>

                                                                    
                                                                <li>
                                                                    <Link>
                                                                    Collection and transplant hospital resources
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link>
                                                                    
                                                                        Stem cell FAQs
                                                                    </Link>
                                                                </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8'>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Cord blood bank</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                Donating cord blood

                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Cord blood eligibility
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                How cord blood donation works
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Safety Standards
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donate cord blood for research
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Cord blood FAQs
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Disclosure.Panel>
                                                </>
                                            )}
                                            </Disclosure>
                                        </div>
                                    </div>
                                </li>
                                <li className='group '>
                                    <div className="w-full ">
                                        <div className="mx-auto w-full">
                                            <Disclosure>
                                            {({ open }) => (
                                                <>
                                                <Disclosure.Button className="flex gap-2 border-l-8 border-[#419B96] hover:text-white focus:text-white focus:bg-[#419B96] w-full group-hover:bg-[#419B96] cursor-pointer text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
                                                    <RiArrowDropDownLine
                                                        className={`${
                                                            open ? 'rotate-180 transform' : ''
                                                        } h-8 w-8 text-black duration-300 my-8 `}
                                                    />
                                                    <span className='py-8'>Organs & Tissues</span>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="bg-[#419B96] px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Organs & Tissues info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </Disclosure.Panel>
                                                <Disclosure.Panel className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Living Organ Donation</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to=''>
                                                                Am I eligible to be a living kidney donor?
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                What is living kidney donation?
                                                                </Link>
                                                            </li>
                                                                <li>
                                                                    <Link to={``}>
                                                                    Living Kidney Donation Programs
                                                                    </Link>
                                                                </li>

                                                                    
                                                                <li>
                                                                    <Link>
                                                                    About the Living Donation Storytelling Project
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link>
                                                                    Kidney paired donation
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link>
                                                                    My Transplant Coach Canada
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link>
                                                                    My Paired Donation Coach Canada
                                                                    </Link>
                                                                </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8'>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Deceased donation</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                Am I eligible to donate organs or tissue?
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Organ donation after death
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Tissue donation after death
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 mb-12'>
                                                        <ul className='font-semibold space-y-8 opacity-80'>
                                                            <li>
                                                                <Link>
                                                                COVID-19 information
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Professional Education Resources 
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Education Portal for Teachers and Students
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Disclosure.Panel>
                                                </>
                                            )}
                                            </Disclosure>
                                        </div>
                                    </div>
                                </li>
                                <li className='group '>
                                    <div className="w-full ">
                                        <div className="mx-auto w-full">
                                            <Disclosure>
                                            {({ open }) => (
                                                <>
                                                <Disclosure.Button className="flex gap-2 border-l-8 border-red-600 hover:text-white focus:text-white focus:bg-red-600  w-full group-hover:bg-red-600 cursor-pointer text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
                                                    <RiArrowDropDownLine
                                                        className={`${
                                                            open ? 'rotate-180 transform' : ''
                                                        } h-8 w-8 text-black duration-300 my-8 `}
                                                    />
                                                    <span className='py-8'>Blood</span>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="bg-red-600 px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Blood info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </Disclosure.Panel>
                                                <Disclosure.Panel className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Am I eligible to donate blood?</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to=''>
                                                                    ABCs of eligibility
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                     Changes to donation criteria
                                                                </Link>
                                                            </li>
                                                                <li>
                                                                    <Link to={``}>
                                                                        Trans individuals
                                                                    </Link>
                                                                </li>

                                                                    
                                                                <li>
                                                                    <Link>
                                                                        Sexual behaviour-based screening
                                                                    </Link>
                                                                </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8'>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Donating blood</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                    What is my blood type?
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donation process
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Rare Blood Program
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donor Questionnaire
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donor health and safety
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 mb-12'>
                                                        <ul className='font-semibold space-y-8 opacity-80'>
                                                            <li>
                                                                <Link>
                                                                    Donating platelets
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Recognition program
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors Donor centre  hours & locations
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    COVID-19 information
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Disclosure.Panel>
                                                </>
                                            )}
                                            </Disclosure>
                                        </div>
                                    </div>
                                </li>
                                <li className='group '>
                                    <div className="w-full ">
                                        <div className="mx-auto w-full">
                                            <Disclosure>
                                            {({ open }) => (
                                                <>
                                                <Disclosure.Button className="flex gap-2 border-l-8 border-red-600 hover:text-white focus:text-white focus:bg-red-600  w-full group-hover:bg-red-600 cursor-pointer text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
                                                    <RiArrowDropDownLine
                                                        className={`${
                                                            open ? 'rotate-180 transform' : ''
                                                        } h-8 w-8 text-black duration-300 my-8 `}
                                                    />
                                                    <span className='py-8'>Blood</span>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="bg-red-600 px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Blood info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </Disclosure.Panel>
                                                <Disclosure.Panel className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Am I eligible to donate blood?</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to=''>
                                                                    ABCs of eligibility
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                     Changes to donation criteria
                                                                </Link>
                                                            </li>
                                                                <li>
                                                                    <Link to={``}>
                                                                        Trans individuals
                                                                    </Link>
                                                                </li>

                                                                    
                                                                <li>
                                                                    <Link>
                                                                        Sexual behaviour-based screening
                                                                    </Link>
                                                                </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8'>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Donating blood</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                    What is my blood type?
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donation process
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Rare Blood Program
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donor Questionnaire
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Donor health and safety
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 mb-12'>
                                                        <ul className='font-semibold space-y-8 opacity-80'>
                                                            <li>
                                                                <Link>
                                                                    Donating platelets
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Recognition program
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors Donor centre  hours & locations
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    COVID-19 information
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Disclosure.Panel>
                                                </>
                                            )}
                                            </Disclosure>
                                        </div>
                                    </div>
                                </li>
                                {/* <li className='border-l-8 border-red-700 w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:bg-red-700 hover:text-white focus:outline-none h-20'>
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
                                </li> */}
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