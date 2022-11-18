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

                <Menu.Items className="absolute z-50 left-0 w-[930px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='grid gap-4 pb-4'>

                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'} font-semibold`}
                                to="/am-i-eligible-donate-blood"
                                >
                                    Am I eligible to donate blood
                                </Link>
                            )}
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

                <Menu.Items className="absolute z-50 -left-16 w-[930px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='grid gap-4 pb-4'>

                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'} font-semibold`}
                                to="/am-i-eligible-to-donate-plasma"
                                >
                                    Am I eligible to donate Plasma?
                                    
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/become-a-plasma-donor"
                                >
                                    Become a plasma donor
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/eligibility-quiz"
                                >
                                    Eligibility quiz
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/abcs-of-eligibility"
                                >
                                    ABCs of eligibility
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/men-who-have-sexp-with-men-plasma-eligibility"
                                >
                                    Men who have sex with men plasma eligibility
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4 pb-4'>
                        
                    <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'} font-semibold`}
                                to="/How-your-plasma-donation-helps"
                                >
                                    Donate Plasma
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/How-your-plasma-donation-helps"
                                >
                                    How your plasma donation helps
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-questionnaire"
                                >
                                    Donor Questionnaire
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-health-and-safety"
                                >
                                    Donor health and safety
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/donor-centres-hours-locations"
                                >
                                    Donor centres hours & locations
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/covid-19-information"
                                >
                                    COVID-19 information
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className='grid gap-4'>

                         <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'} font-semibold`}
                                to="/recognition-program"
                                >
                                    Security Canada's plasma suppely
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/plasma-and-the-blood-system-supply-chain"
                                >
                                    Plasma and the blood system supply chain
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/plasma-protein-and-related-products"
                                >
                                    Plasma protein and related products
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                                <Link
                                className={`${active && 'text-red-600'}`}
                                to="/covid-19-and-convalescent-plasma"
                                >
                                    COVID-19 and convalescent plasma
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item className="bg-red-600 text-white text-center text-xl h-14 pt-4">
                        {({ active }) => (
                                <Link
                                className={`${active && ''}`}
                                to="/sexual-behaviour-based-screen"
                                >
                                    View More Plasma info <BsArrowRight className='inline-block' />
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

                <Menu.Items className="absolute z-50 -left-60 w-[930px] pl-4 pt-4 grid-flow-row gap-8 grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                   <div className='grid grid-cols-3 gap-4'>
                        <div className='grid gap-4'>

                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'} font-semibold`}
                                    to="/adult-stem-cell-registry"
                                    >
                                        Adult stem cell registry
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/donating-stem-cells"
                                    >
                                        Donating stem cells
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/stem-cell-donation-eligibility-registration"
                                    >
                                        Stem cell donation eligibility and registration
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/how-stem-cell-donation-works"
                                    >
                                        How stem cell donation works
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/collection-transplant-hospital-resources"
                                    >
                                        Collection and transplant hospital resources
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/stem-cell-FAQs"
                                    >
                                        Stem cell FAQs
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                        <div className='grid gap-4 pb-4'>

                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'} font-semibold`}
                                    to="/cord-blood-bank"
                                    >
                                        Cord blood bank
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                <hr className='h-0 w-24 rounded  bg-red-500 border-solid border-2 border-red-500' />
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/cord-blood-eligibility"
                                    >
                                        Cord blood eligibility
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/how-cord-blood-donation-works"
                                    >
                                        How cord blood donation works
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/safety-standards"
                                    >
                                        Safety Standards
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/donate-cord-blood-for-research"
                                    >
                                        Donate cord blood for research
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/cord-blood-FAQs"
                                    >
                                        Cord blood FAQs
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='bg-teal-500 text-white text-center pt-4 h-16 w-5/12 text-lg font-bold'>
                            <Menu.Item className=" flex items-center justify-around ">
                                {({ active }) => (
                                        <Link
                                        className={`${active && ''}`}
                                        to="/steam-cell-info"
                                        >
                                            View All steam cells info <BsArrowRight className='inline-block ' fontWeight={900} fontSize={30} />
                                        </Link>
                                    )}
                            </Menu.Item>

                        </div>
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

                <Menu.Items className="absolute z-50 -right-60 w-[930px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

                <Menu.Items className="absolute z-50 right-0 w-[930px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

                <Menu.Items className="absolute z-50 right-0 w-[930px] pl-4 pt-4 gap-16 grid-flow-col grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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