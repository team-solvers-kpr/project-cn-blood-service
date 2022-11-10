import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/footerimage.png';

const Nav = () => {
  return (



<header class="container mx-auto px-4 py-6 flex items-center justify-between">
    <a href="/" class="font-bold text-white text-xl">Pipe</a>
    <nav>
      <ul class="flex items-center justify-center font-semibold">
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Products</button>
          <div
            class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div class="relative z-10">
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">The Suite</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Course Editor
                          <p class="text-gray-500 font-normal">All-in-one editor</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Accept payments
                          <p class="text-gray-500 font-normal">Pre-build payments page</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Closed Captioning
                          <p class="text-gray-500 font-normal">Use AI to generate captions</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Extensions</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Plugins
                          <p class="text-gray-500 font-normal">Tweak existing functionality</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Batch uploads
                          <p class="text-gray-500 font-normal">Get your time back</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Social sharing
                          <p class="text-gray-500 font-normal">Generate content for socials</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Solutions</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Use cases</p>
                <ul class="mt-3 text-[15px]">
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Creators
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Streamers
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Influence
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Programming
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Developers</button>
          <div
            class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div class="relative z-10">
                <a href="#"
                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                  Documentation
                  <p class="text-gray-500 font-normal">Start integrating in no time</p>
                </a>
                <div class="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Get started</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Libraries and SDKs
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Plugins
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Code samples
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Tutorials
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Guides</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Accept online payments
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Editing video like a pro
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Automation techniques
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                          Create stunning effects
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default">Resources</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <ul class="text-[15px]">
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Get Support
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                      News &amp; Events
                    </a>
                  </li>
                </ul>


              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <a href="#" class="hover:opacity-50 cursor-default">Pricing
          </a>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <a href="#" class="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group">
            <span class="mr-2">Sign in</span>
            <svg class="stroke-current" width="10" height="10" stroke-width="2" viewBox="0 0 10 10" aria-hidden="true">
              <g fill-rule="evenodd">
                <path class="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200" d="M0 5h7"></path>
                <path
                  class="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                  d="M1 1l4 4-4 4"></path>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
</header>
  )
}

export default Nav;





// import React, { useEffect, useState } from 'react'
// import { BsArrowRight } from 'react-icons/bs';
// import { CgClose, CgMenuLeft } from 'react-icons/cg';
// import { FaUserAlt } from 'react-icons/fa';
// import { RiArrowDropDownLine } from 'react-icons/ri';
// import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../../assets/footerimage.png';
// import Button from './Button';
// import PrimaryMenu from './PrimaryMenu';
// import primaryMenus from '../../../../temp/menus.json';
// import { SearchBar } from './SearchBar';
// import MegaMenu from './MegaMenu';

// const Nav = () => {
//     console.log(primaryMenus);
//     const { menus } = primaryMenus;
//     const [isOpen, setOpen] = useState(false);
//     // const [showDropdown, setShowDropdown] = useState(false)
//     // const [showDropdownData, setShowDropdownData] = useState(false)
//     const navigate = useNavigate();


//     // useEffect(() => {

//     //     const fetchData = async () => {
//     //       const res = await fetch('./menus.JSON');
//     //       const data = await res.json();
//     //       setShowDropdownData(data);
//     //     }
//     //     fetchData();
    
//     //   }, []);
//   return (
//     <div>
//         <div className='manuBar  grid grid-flow-col'>
//             <div className='logo flex lg:m-0 m-5 flex-row items-center col-span-3 lg:border-b-8 border-sky-50'>
//                 <img src={Logo} alt="logo" className='h-12 lg:pl-7 ' />
//                 {!isOpen && (
//                             <div className='menu-icon cursor-pointer font-bold  absolute inline-block right-4 lg:hidden outline-none'
//                             onClick={() => setOpen(!isOpen)}
//                         >
//                             <CgMenuLeft fontSize={40} className="text-red-600" />
//                             <span className='uppercase text-[#BEBEC2]'>Menu</span>
//                         </div>
//                         )}
//                     {isOpen &&  (<div className='closeIcon cursor-pointer absolute right-4 inline-block lg:hidden outline-none '
//                     onClick={() => setOpen(!isOpen)}
//                     >
//                             <CgClose fontSize={40} className="text-red-600" />
//                         </div>
//                         )}
//             </div>
//             <div className='right md:block hidden pt-2 col-span-9'>
//                 <div className="menu-top">
//                     <nav className='lg:flex justify-center gap-2 lg:flex-row hidden'>
//                         <ul className='flex gap-2 pt-1'>
//                             <li className='hover:underline'>
//                                 <Link to='/hospital-service' className=' opacity-80 hover:opacity-100 font-medium'>Hospital Services</Link>
//                             </li>
//                             <li className='hover:underline'>
//                                 <Link to='/research' className=' opacity-80 hover:opacity-100 font-medium'>Research</Link>
//                             </li>
//                             <li className='hover:underline'>
//                                 <Link to='/careers' className=' opacity-80 hover:opacity-100 font-medium'>Careers</Link>
//                             </li>
//                             <li className='hover:underline'>
//                                 <Link to='/shop' className=' opacity-80 hover:opacity-100 font-medium'>Shop</Link>
//                             </li>
//                             <li className='hover:underline'>
//                                 <Link to='/about-us' className=' opacity-80 hover:opacity-100 font-medium'>About us</Link>
//                             </li>
//                         </ul>
//                         <div className='inline-flex  gap-2'>
//                             <div className='topbuttons inline-flex gap-2'>
//                                 <div className='link pt-1'>
//                                     <Link className='text-red-500 font-bold'>
//                                         Français
//                                     </Link>
//                                 </div>
//                                 <div className='buttons inline-flex gap-2'>
//                                     <Button
//                                         btnText={"Book Now"}
//                                         bgprimary="bg-[#C4161C]"
//                                         height="h-10"
//                                         width="w-28"
//                                         textprimary="text-[#C4161C]"
//                                         borderprimary="border-red-700"
//                                         bgsecondary="bg-white"
//                                         textColor='text-white'
//                                         fontwidth="font-bold"
//                                         fontsize="text-base"
//                                         onClick={(e) => navigate("/bookNow")}
//                                     />

//                                     <Button
//                                         btnText={"Sign in"}
//                                         bgprimary="bg-white"
//                                         height="h-11"
//                                         width="w-28"
//                                         fontwidth="font-bold"
//                                         textTransform='uppercase'
//                                         fontsize="text-base"
//                                         textprimary="text-white"
//                                         borderprimary="border-red-700"
//                                         bgsecondary="bg-[#C4161C]"
//                                         textColor='text-[#C4161C]'
//                                         onClick={(e) => navigate("/signin")}
//                                     />
//                                 </div>
//                             </div>
//                             <div className='topsearchbar '>
//                                 <SearchBar width='w-12' pr= 'focus:pr-4' />
//                             </div>
//                         </div>
//                     </nav>
//                 </div>
//                 <div>
//                     <MegaMenu menus={menus} />
//                 </div>
//             </div>
//         </div>


//                             {/* mobile menu navigation  */}

//         <div className={`md:hidden bg-white relative  h-full w-full bottom-0 py-24 pt-4 ${
//               isOpen ? "translate-x-0" : "-translate-x-full"
//             } ease-in-out duration-700 z-50`}>

//                         <div className='searchBar'>
//                             <SearchBar width="w-full"  />
//                         </div>
                        
//                         <div className='py-5 flex justify-around'>
//                             <div className='pr-8'>
//                                 <button className='rounded-full bg-[#f0f0f0] text-lg font-bold text-red-900 h-14 w-14'>FR</button>
//                             </div>
//                             <button className='h-14 w-28 bg-[#C4161C] hover:border text-white hover:bg-white hover:text-[#C4161C] border-[#C4161C] rounded-full font-bold outline-none inline-block uppercase'>
//                                         Book Now
//                             </button>
//                             <button className='h-14 w-28 hover:bg-red-600 text-red-600 border border-red-600 hover:text-white bg-white rounded-full font-bold outline-none uppercase'>
//                             <FaUserAlt className='inline-block'  color='#C4161C' /> 
//                             Sign in
//                             </button>
//                         </div>
//                         <ul className='border-[#f0f0f0]'>
//                                 <li className='border-l-8 hover:text-white border-red-700 w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:bg-red-700 focus:outline-none h-20 ease-in-out'>
//                                     <Link className=' pt-4 pb-0 pr-2 pl-2'>
//                                         <span className='inline-block'><RiArrowDropDownLine /></span>
//                                         Blood
//                                     </Link>
//                                 </li>
//                                 <li className='border-l-8 border-red-900 w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:bg-red-900 hover:text-white focus:outline-none h-20'>
//                                     <Link className=' pt-4 pb-0 pr-2 pl-2'>
//                                         <span className='inline-block'><RiArrowDropDownLine /></span>
//                                         Plasma
//                                     </Link>
//                                 </li>
//                                 <li className='border-l-8 border-[#54C3BB] hover:bg-[#54C3BB] w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:text-white focus:outline-none h-20'>
//                                     <Link className=' pt-4 pb-0 pr-2 pl-2'>
//                                         <span className='inline-block'><RiArrowDropDownLine /></span>
//                                         Stem Cells
//                                     </Link>
//                                 </li>
//                                 <li className='border-l-8 border-[#419B96] hover:bg-[#419B96] w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 hover:text-white shadow-sm  focus:outline-none h-20'>
//                                     <Link className=' pt-4 pb-0 pr-2 pl-2'>
//                                         <span className='inline-block'><RiArrowDropDownLine /></span>
//                                         Organ & 
//                                             Tissues
//                                     </Link>
//                                 </li>
//                                 <li className=' border-l-8 border-[#F0F0F0] w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm  hover:bg-[#4D4D4D] hover:border-[#4D4D4D] hover:text-white focus:outline-none h-20'>
//                                     <Link className=' pt-4 pb-0 pr-2 pl-2'>
//                                         <span className='inline-block'><RiArrowDropDownLine /></span>
//                                         Ways to donet
//                                     </Link>
//                                 </li>
                                
//                                 <li className=' border-l-8 border-[#F0F0F0]  w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm hover:text-white hover:border-[#4D4D4D] hover:bg-[#4D4D4D] focus:outline-none h-20'>
//                                     <Link className=' pt-4 pb-0 pr-2 pl-2'>
//                                         <span className='inline-block'><RiArrowDropDownLine /></span>
//                                         Stories
//                                     </Link>
//                                 </li>
//                             </ul>
//                         <div className='links bg-[#4D4D4D]'>
//                             <ul>
//                                 <li className='font-normal text-left text-white uppercase px-3 pt-10'>
//                                     <Link to='/hospital services' className=''>
//                                         Hospital Services
//                                     </Link>
//                                 </li>
//                                 <li className='font-normal text-left text-white uppercase px-3 pt-10'>
//                                     <Link>
//                                         Reserch
//                                     </Link>
//                                 </li>
//                                  <li className='font-normal text-left text-white uppercase px-3 pt-10'>
//                                     <Link>
//                                         Careers
//                                     </Link>
//                                 </li>               
//                                 <li className='font-normal text-left text-white uppercase px-3 pt-10'>
//                                     <Link>
//                                         Shop
//                                     </Link>
//                                 </li>
//                                 <li className='font-normal text-left text-white uppercase px-3 pt-10 pb-4'>
//                                     <Link>
//                                         About us
//                                     </Link>
//                                 </li>
//                             </ul>
//                     </div>
//             </div>
//     </div>
//   )
// }

// export default Nav;