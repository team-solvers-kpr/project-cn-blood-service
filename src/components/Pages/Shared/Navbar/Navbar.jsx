import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { CgClose, CgMenuLeft } from 'react-icons/cg';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Logo from '../../../assets/footerimage.png';
import Button from './Button';
import Nav from './Nav';
import { ExpandableSearchbar } from './ExpandableSearchbar';
import MobileMenuNav from './MobileMenuNav';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isExpand, setExpand] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const logOut=()=>{
        signOut(auth)
    }

    if(error || loading){
        console.log(loading, error);
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
                    <nav className='lg:flex justify-center gap-2 lg:flex-row hidden py-3'>
                        <ul className={`${isExpand ? 'hidden': 'block'} flex gap-4 pt-1 transition-all ease-in-out duration-500`}>
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
                        <div className={`inline-flex transition-all ease-in-out duration-500 gap-2 ${isExpand ? 'hidden': 'block'}`}>
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
                        
                        <div>
                                <div>
                                    <form action="" className={` ${isExpand ? 'float-left' : 'hidden'} ml-[30rem] max-w-full transition-all duration-500 ease-in-out`}>
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

        <div className={`md:hidden bg-white h-full w-full pt-4 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } ease-in-out duration-700 z-50`}>

                        <div className='searchBar px-4 py-4'>
                            <ExpandableSearchbar   />
                        </div>
                        
                        <div className='py-8 flex justify-around'>
                            <div className='pr-8'>
                                <button className='rounded-full bg-[#f0f0f0] text-lg font-bold text-red-700 h-14 w-14'>FR</button>
                            </div>
                            <button className='h-14 transition-all duration-300 w-28 bg-red-600 hover:border text-white hover:bg-white hover:text-red-600 border-[#C4161C] rounded-full font-bold outline-none inline-block uppercase'>
                                        Book Now
                            </button>
                            <button className='h-14 transition-all duration-300 w-28 hover:bg-red-600 text-red-600 border border-red-600 hover:text-white bg-white rounded-full font-bold outline-none uppercase'>
                            <FaUserAlt className='inline-block mr-2 -mt-1'  color='red-600' /> 
                            Sign in
                            </button>
                        </div>
                        <div className='border-[#f0f0f0] pt-4'>
                            <MobileMenuNav />
                        </div>
                        <div className='links bg-[#4D4D4D]'>
                            <ul>
                                <li className='font-normal text-left text-white uppercase px-3 pt-10'>
                                    <Link to='/hospital-services' className=''>
                                        Hospital Services
                                    </Link>
                                </li>
                                <li className='font-normal text-left text-white uppercase px-3 pt-10'>
                                    <Link to='/research'>
                                        Research
                                    </Link>
                                </li>
                                 <li className='font-normal text-left text-white uppercase px-3 pt-10'>
                                    <Link to='/careers'>
                                        Careers
                                    </Link>
                                </li>               
                                <li className='font-normal text-left text-white uppercase px-3 pt-10'>
                                    <Link to='/shop'>
                                        Shop
                                    </Link>
                                </li>
                                <li className='font-normal text-left text-white uppercase px-3 pt-10 pb-4'>
                                    <Link to='/about-us'>
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