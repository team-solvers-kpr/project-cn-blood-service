import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import  LogoImg  from '../../../assets/images/logo64.png';
import { NavLinks } from './NavLinks';
import { Button } from './Button';
import { CgMenuLeft, CgClose } from 'react-icons/cg';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header>
            <div className='lg:flex justify-around items-center lg:m-8 lg:border-b-8 border-[#F0F0F0]'>
                <div className='header-left logo  z-50 p-5 md:w-auto w-full flex justify-between'>
                    <img src={LogoImg} alt="logo" />
                    {!isOpen && (
                        <div className='menu-icon cursor-pointer font-bold inline-block absolute right-4 lg:hidden outline-none'
                        onClick={() => setOpen(!isOpen)}
                    >
                        <CgMenuLeft fontSize={40}  />
                        <span className='uppercase text-[#BEBEC2]'>Menu</span>
                    </div>
                    )}
                   {isOpen &&  (<div className='closeIcon cursor-pointer absolute right-4 lg:hidden outline-none inline-block'
                   onClick={() => setOpen(!isOpen)}
                   >
                        <CgClose fontSize={40} />
                    </div>
                    )}
                </div>
                <div className=' header-right'>
                    <div className='header-right-top lg:ml-28'>
                        <nav>
                            <ul className='md:flex hidden items-center gap-8 pl-0 mb-0'>
                                <li className='font-normal'>
                                    <Link to='/hospital services' className='pt-0 pb-0 pr-4 pl-4 hover:underline'>
                                        Hospital Services
                                    </Link>
                                </li>
                                <NavLinks />
                                <li>
                                    <button>Francia</button>
                                </li>
                                <Button title='Book now'/>
                                <Button title='Sign in'/>
                                <li>
                                    <AiOutlineSearch />
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='mt-4'>
                            <ul className='md:flex hidden border-b-10 border-[#f0f0f0]'>
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
                                        Organ &
                                            Tissues
                                    </Link>
                                </li>
                                <li className=' border-b-8 border-[#F0F0F0] w-full pt-2 cursor-pointer text-left bg-white text-lg font-bold text-gray-700 shadow-sm  hover:bg-[#4D4D4D] hover:border-[#4D4D4D] hover:text-white focus:outline-none h-20'>
                                    <Link  to='/' className=' pt-4 pb-0 pr-2 pl-2 '>
                                        <span className='inline-block text-4xl'><RiArrowDropDownLine /></span>
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

                    <div className={`md:hidden bg-white  h-full w-full bottom-0 py-24 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } ease-in-out duration-700 z-10`}>
                        
                        <div className='py-5 flex px-8'>
                            <div className='pr-8'>
                                <button className='rounded-full bg-[#f0f0f0] text-lg font-bold text-red-900 h-14 w-14'>FR</button>
                            </div>
                            <div>
                                <Button title='Book now'/>
                            </div>
                            <div className='pl-20 '>
                                <Button title='Sign in' />
                            </div>
                        </div>
                        <nav>
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
                        </nav>
                        <div className='links bg-[#4D4D4D]'>
                            <ul>
                                <li className='font-normal text-left text-white uppercase pt-10'>
                                    <Link to='/hospital services' className='px-3'>
                                        Hospital Services
                                    </Link>
                                </li>
                                <NavLinks  />
                            </ul>
                    </div>
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
