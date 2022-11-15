import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

function Nav() {
  return (
    <ul className='flex flex-row w-full'>
      <li>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="border-b-8 pb-6 hover:text-white transition-all font-bold border-red-600 w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:bg-red-600 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Blood </span>
                <br /><span className='text-white pl-4 pb-4'>for Life</span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <Menu.Items className="absolute z-50 left-0 w-[900px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='grid gap-4 pb-4'>

                        <Menu.Item>
                            <h1 className='font-semibold'>Am I eligible to donate blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/abc-of-eligible"
                                >
                                ABCs of eligible
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/change-to-donate-criteria"
                                >
                                Change to donate criteria
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/trans-tndividusls"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                Sexual behaviour-based screen
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4 pb-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donating blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/blood-type"
                                >
                                    What is my blood type?
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donation-process"
                                >
                                    Donation process
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/rare-blood-program"
                                >
                                    Rare Blood Program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/fdonor-questionnaire"
                                >
                                    fDonor Questionnaire
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-health-safety"
                                >
                                    Donor health and safety
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donation Platelates</h1>
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/recognition-program"
                                >
                                    Recognition program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sign-language"
                                >
                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-centre-hours-locations"
                                >
                                    Donor centre hours & locations
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                    COVID-19 information
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item className="bg-red-600 text-white text-center text-xl h-14 pt-4">
                        {({ active }) => (
                                <Link
                                className={`${active && ''}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                    View More Blood <BsArrowRight className='inline-block' />
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
      </li>
      <li>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="border-b-8 pb-6 hover:text-white font-bold border-red-700 w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:bg-red-700 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Plasma </span>
                <br /><span className='text-white pl-4 pb-4'>for Life</span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <Menu.Items className="absolute z-50 -left-16 w-[900px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='grid gap-4 pb-4'>

                        <Menu.Item>
                            <h1 className='font-semibold'>Am I eligible to donate Plasma?</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/abc-of-eligible"
                                >
                                    ABCs of eligible
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/change-to-donate-criteria"
                                >
                                Change to donate criteria
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/trans-tndividusls"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                Sexual behaviour-based screen
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4 pb-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donate Plasma</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/blood-type"
                                >
                                    What is my blood type?
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donation-process"
                                >
                                    Donation process
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/rare-blood-program"
                                >
                                    Rare Blood Program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/fdonor-questionnaire"
                                >
                                    fDonor Questionnaire
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-health-safety"
                                >
                                    Donor health and safety
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'>Security Canada's plasma suppely</h1>
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/recognition-program"
                                >
                                    Recognition program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sign-language"
                                >
                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-centre-hours-locations"
                                >
                                    Donor centre hours & locations
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                    COVID-19 information
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item className="bg-red-600 text-white text-center text-xl h-14 pt-4">
                        {({ active }) => (
                                <Link
                                className={`${active && ''}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                    View More Blood <BsArrowRight className='inline-block' />
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
      </li>
      <li>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="border-b-8 pb-6 hover:text-white font-bold  w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 border-teal-500  hover:bg-teal-500 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Stem Cells </span>
                <br /><span className='text-white pl-4 pb-4'>for Life</span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <Menu.Items className="absolute z-50 -left-60 w-[900px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='grid gap-4 pb-4'>

                        <Menu.Item>
                            <h1 className='font-semibold'>Am I eligible to donate blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/abc-of-eligible"
                                >
                                ABCs of eligible
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/change-to-donate-criteria"
                                >
                                Change to donate criteria
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/trans-tndividusls"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                Sexual behaviour-based screen
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4 pb-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donating blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/blood-type"
                                >
                                    What is my blood type?
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donation-process"
                                >
                                    Donation process
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/rare-blood-program"
                                >
                                    Rare Blood Program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/fdonor-questionnaire"
                                >
                                    fDonor Questionnaire
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-health-safety"
                                >
                                    Donor health and safety
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donation Platelates</h1>
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/recognition-program"
                                >
                                    Recognition program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sign-language"
                                >
                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-centre-hours-locations"
                                >
                                    Donor centre hours & locations
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                    COVID-19 information
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item className="bg-red-600 text-white text-center text-xl h-14 pt-4">
                        {({ active }) => (
                                <Link
                                className={`${active && ''}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                    View More Blood <BsArrowRight className='inline-block' />
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
      </li>
      <li>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="border-b-8 hover:text-white font-bold w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 border-teal-600  hover:bg-teal-600 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Organs &</span>
                <br /> <span className='pl-4'>Tissues</span>
                <br /><span className='text-white pl-4'>for Life</span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <Menu.Items className="absolute z-50 -right-60 w-[900px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='grid gap-4 pb-4'>

                        <Menu.Item>
                            <h1 className='font-semibold'>Am I eligible to donate blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/abc-of-eligible"
                                >
                                ABCs of eligible
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/change-to-donate-criteria"
                                >
                                Change to donate criteria
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/trans-tndividusls"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                Sexual behaviour-based screen
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4 pb-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donating blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/blood-type"
                                >
                                    What is my blood type?
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donation-process"
                                >
                                    Donation process
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/rare-blood-program"
                                >
                                    Rare Blood Program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/fdonor-questionnaire"
                                >
                                    fDonor Questionnaire
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-health-safety"
                                >
                                    Donor health and safety
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donation Platelates</h1>
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/recognition-program"
                                >
                                    Recognition program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sign-language"
                                >
                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-centre-hours-locations"
                                >
                                    Donor centre hours & locations
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                    COVID-19 information
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item className="bg-red-600 text-white text-center text-xl h-14 pt-4">
                        {({ active }) => (
                                <Link
                                className={`${active && ''}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                    View More Blood <BsArrowRight className='inline-block' />
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
      </li>
      <li>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="border-b-8 pb-6 hover:text-white font-bold border-sky-50 w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:border-gray-600 hover:bg-gray-600 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Ways to</span>
                <br /> <span className='pl-4'>Donate</span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <Menu.Items className="absolute z-50 right-0 w-[900px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='grid gap-4 pb-4'>

                        <Menu.Item>
                            <h1 className='font-semibold'>Am I eligible to donate blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/abc-of-eligible"
                                >
                                ABCs of eligible
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/change-to-donate-criteria"
                                >
                                Change to donate criteria
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/trans-tndividusls"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                Sexual behaviour-based screen
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4 pb-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donating blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/blood-type"
                                >
                                    What is my blood type?
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donation-process"
                                >
                                    Donation process
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/rare-blood-program"
                                >
                                    Rare Blood Program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/fdonor-questionnaire"
                                >
                                    fDonor Questionnaire
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-health-safety"
                                >
                                    Donor health and safety
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donation Platelates</h1>
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/recognition-program"
                                >
                                    Recognition program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sign-language"
                                >
                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-centre-hours-locations"
                                >
                                    Donor centre hours & locations
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                    COVID-19 information
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item className="bg-red-600 text-white text-center text-xl h-14 pt-4">
                        {({ active }) => (
                                <Link
                                className={`${active && ''}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                    View More Blood <BsArrowRight className='inline-block' />
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
      </li>
      <li>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="border-b-8 pb-6 hover:text-white font-bold border-sky-50 w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:border-gray-600 hover:bg-gray-600 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Stories </span>
                <br /><span className='text-white pl-4 pb-4'></span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <Menu.Items className="absolute z-50 right-0 w-[900px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='grid gap-4 pb-4'>

                        <Menu.Item>
                            <h1 className='font-semibold'>Am I eligible to donate blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/abc-of-eligible"
                                >
                                ABCs of eligible
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/change-to-donate-criteria"
                                >
                                Change to donate criteria
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/trans-tndividusls"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                Sexual behaviour-based screen
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4 pb-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donating blood</h1>
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/blood-type"
                                >
                                    What is my blood type?
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donation-process"
                                >
                                    Donation process
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                Trans Individusls
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/rare-blood-program"
                                >
                                    Rare Blood Program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/fdonor-questionnaire"
                                >
                                    fDonor Questionnaire
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-health-safety"
                                >
                                    Donor health and safety
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4'>
 
                        <Menu.Item>
                            <h1 className='font-semibold'> Donation Platelates</h1>
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/recognition-program"
                                >
                                    Recognition program
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/sign-language"
                                >
                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-centre-hours-locations"
                                >
                                    Donor centre hours & locations
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/account-settings"
                                >
                                    COVID-19 information
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item className="bg-red-600 text-white text-center text-xl h-14 pt-4">
                        {({ active }) => (
                                <Link
                                className={`${active && ''}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                    View More Blood <BsArrowRight className='inline-block' />
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
      </li>
    </ul>
  )
}

export default Nav;