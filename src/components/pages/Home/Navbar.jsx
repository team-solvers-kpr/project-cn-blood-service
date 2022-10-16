import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import  LogoImg  from '../../../assets/images/logo64.png';
const Navbar = () => {
    return (
        <header>
            <div className='flex justify-around m-8 border-b-8 border-[#F0F0F0]'>
                <div className='header-left logo border-b-8 border-[#F0F0F0]'>
                    <img src={LogoImg} alt="" />
                </div>
                <div className='header-right'>
                    <div className='header-right-top ml-28'>
                        <nav>
                            <ul className='flex flex-wrap pl-0 mb-0'>
                                <li className='font-normal'>
                                    <Link className='pt-0 pb-0 pr-4 pl-4 hover:underline'>
                                        Hospital Services
                                    </Link>
                                </li>
                                <li>
                                    <Link className='pt-0 pb-0 pr-4 pl-4 hover:underline'>
                                        Reserch
                                    </Link>
                                </li>
                                <li>
                                    <Link className='pt-0 pb-0 pr-4 pl-4 hover:underline'>
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link className='pt-0 pb-0 pr-4 pl-4 hover:underline'>
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link className='pt-0 pb-0 pr-4 pl-4 hover:underline'>
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <button>Francia</button>
                                </li>
                                <li>
                                    <button>Book now</button>
                                </li>
                                <li>
                                    <button>Sign in</button>
                                </li>
                                <li>
                                    <AiOutlineSearch />
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='mt-4'>
                        <nav>
                            <ul className='flex'>
                                <li className='border-b-8 hover:text-white border-red-700 w-full pt-2 cursor-pointer justify-cente bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Blood
                                    </Link>
                                </li>
                                <li className='border-b-8 border-red-900 hover:border-red-900 w-full pt-2 cursor-pointer justify-cente bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-red-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        <span className='hover:opacity-0'>Plasma</span>
                                        <span className='opacity-0 hover:opacity-100'>Plasma For Life</span>
                                    </Link>
                                </li>
                                <li className='border-b-8 border-[#54C3BB] hover:bg-[#54C3BB] w-full pt-2 cursor-pointer justify-cente bg-white text-sm font-medium text-gray-700 shadow-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Stem Cells
                                    </Link>
                                </li>
                                <li className=' border-b-8 border-[#419B96] hover:bg-[#419B96] w-full pt-2 cursor-pointer justify-cente bg-white text-sm font-medium text-gray-700 hover:text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Organ
                                        & Tissues
                                    </Link>
                                </li>
                                <li className=' border-b-8 border-[#F0F0F0] w-full pt-2 cursor-pointer justify-cente bg-white text-sm font-medium text-gray-700 shadow-sm  hover:bg-[#4D4D4D] hover:border-[#4D4D4D] hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Ways to donet
                                    </Link>
                                </li>
                                
                                <li className=' border-b-8 border-[#F0F0F0]  w-full pt-2 cursor-pointer justify-cente bg-white text-sm font-medium text-gray-700 shadow-sm hover:text-white hover:border-[#4D4D4D] hover:bg-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                    <Link className=' pt-4 pb-0 pr-2 pl-2'>
                                        <span className='inline-block'><RiArrowDropDownLine /></span>
                                        Stories
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Navbar;


// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <Menu as="div" className="relative grid grid-flow-col text-left">
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
//           Options
//         </Menu.Button>
//       </div>
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           Options
//           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
//         </Menu.Button>
//       </div>
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           Options
//           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
//         </Menu.Button>
//       </div>
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           Options
//           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
//         </Menu.Button>
//       </div>
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           Options
//           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
//         </Menu.Button>
//       </div>
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
//           Options
//           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="/"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Edit
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="/"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Duplicate
//                 </a>
//               )}
//             </Menu.Item>
//           </div>
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="/"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Archive
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="/"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Move
//                 </a>
//               )}
//             </Menu.Item>
//           </div>
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="/"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Share
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="/"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Add to favorites
//                 </a>
//               )}
//             </Menu.Item>
//           </div>
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="/"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Delete
//                 </a>
//               )}
//             </Menu.Item>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   )
// }
