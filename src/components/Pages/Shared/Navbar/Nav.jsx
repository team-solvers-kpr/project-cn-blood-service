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
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <Menu.Items className="absolute z-50  w-[930px] pl-4 pt-4 grid-flow-row gap-8 grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className='grid grid-cols-3 gap-4'>
                            <div className='grid gap-4'>

                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'} font-semibold`}
                                        to="/adult-stem-cell-registry"
                                        >
                                            Am I eligible to donate blood?
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
                                            ABCs of eligibility
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/stem-cell-donation-eligibility-registration"
                                        >
                                        Changes to donation criteria
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/how-stem-cell-donation-works"
                                        >
                                        Trans individuals
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/collection-transplant-hospital-resources"
                                        >
                                            Sexual behaviour-based screening
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
                                            Donating blood
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
                                            What is my blood type?
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/how-cord-blood-donation-works"
                                        >
                                            Rare Blood Program
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/safety-standards"
                                        >
                                            Donor Questionnaire
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/donate-cord-blood-for-research"
                                        >
                                            Donor health and safety
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
                                        Donating platelets
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/cord-blood-eligibility"
                                        >
                                            Recognition program
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/how-cord-blood-donation-works"
                                        >
                                            Sign language interpreting services for Deaf, deafened and hard of hearing donors
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/safety-standards"
                                        >
                                            Donor centre hours & locations
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                        <Link
                                        className={`${active && 'text-red-600'}`}
                                        to="/donate-cord-blood-for-research"
                                        >
                                            COVID-19 information
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                        </div>
                    <div className='flex justify-end'>
                            <div className='bg-red-600 text-white text-center pt-4 h-16 w-5/12 text-lg font-bold'>
                                <Menu.Item className=" flex items-center justify-around ">
                                    {({ active }) => (
                                            <Link
                                            className={`${active && ''}`}
                                            to="/steam-cell-info"
                                            >
                                                View All Blood info <BsArrowRight className='inline-block ' fontWeight={900} fontSize={30} />
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
            <Menu.Button className="border-b-8 pb-6 hover:text-white font-bold border-red-700 w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:bg-red-700 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Plasma </span>
                <br /><span className='text-white pl-4 pb-4'>for Life</span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

            <Menu.Items className="absolute z-50 -left-40 w-[930px] pl-4 pt-4 grid-flow-row gap-8 grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                   <div className='grid grid-cols-3 gap-4'>
                        <div className='grid gap-4'>

                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'} font-semibold`}
                                    to="/adult-stem-cell-registry"
                                    >
                                        Am I eligible to donate plasma?
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
                                        Become a plasma donor
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/stem-cell-donation-eligibility-registration"
                                    >
                                        Eligibility quiz
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/how-stem-cell-donation-works"
                                    >
                                        ABCs of eligibility
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/collection-transplant-hospital-resources"
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
                                    to="/cord-blood-bank"
                                    >
                                        Donating plasma
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
                                        How your plasma donation helps
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/how-cord-blood-donation-works"
                                    >
                                        Donor Questionnaire
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/safety-standards"
                                    >
                                        Donor health and safety
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/donate-cord-blood-for-research"
                                    >
                                       Donor centres hours & locations
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/cord-blood-FAQs"
                                    >
                                        COVID-19 information
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
                                        Securing Canada’s plasma supply
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/cord-blood-eligibility"
                                    >
                                        Plasma and the blood system supply chain
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/how-cord-blood-donation-works"
                                    >
                                        Plasma protein and related products
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/safety-standards"
                                    >
                                        Donor health and safety
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/donate-cord-blood-for-research"
                                    >
                                       Donor centres hours & locations
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/cord-blood-FAQs"
                                    >
                                       COVID-19 and convalescent plasma
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='bg-red-700 text-white text-center pt-4 h-16 w-5/12 text-lg font-bold'>
                            <Menu.Item className=" flex items-center justify-around ">
                                {({ active }) => (
                                        <Link
                                        className={`${active && ''}`}
                                        to="/steam-cell-info"
                                        >
                                            View All Plasma info <BsArrowRight className='inline-block ' fontWeight={900} fontSize={30} />
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
            <Menu.Button className="border-b-8 pb-6 hover:text-white font-bold  w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 border-teal-500  hover:bg-teal-500 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Stem Cells </span>
                <br /><span className='text-white pl-4 pb-4'>for Life</span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <Menu.Items className="absolute z-50 -left-80 w-[930px] pl-4 pt-4 grid-flow-row gap-8 grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

            <Menu.Items className="absolute z-50 -right-72 w-[930px] pl-4 pt-4 grid-flow-row gap-8 grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                   <div className='grid grid-cols-3 gap-4'>
                        <div className='grid gap-4'>

                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'} font-semibold`}
                                    to="/adult-stem-cell-registry"
                                    >
                                        Living Organ Donation
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
                                        What is living kidney donation?
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/stem-cell-donation-eligibility-registration"
                                    >
                                        Living Kidney Donation Programs
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/how-stem-cell-donation-works"
                                    >
                                        About the Living Donation Storytelling Project
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/collection-transplant-hospital-resources"
                                    >
                                        Kidney paired donation
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/stem-cell-FAQs"
                                    >
                                        My Transplant Coach Canada
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/stem-cell-FAQs"
                                    >
                                        My Paired Donation Coach Canada
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
                                        Deceased donation
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
                                        Am I eligible to donate organs or tissue?
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/how-cord-blood-donation-works"
                                    >
                                        Organ donation after death
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/safety-standards"
                                    >
                                        Tissue donation after death
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
                                       COVID-19 information
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'} font-semibold`}
                                    to="/cord-blood-eligibility"
                                    >
                                        Professional Education Resources
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'} font-semibold`}
                                    to="/how-cord-blood-donation-works"
                                    >
                                        Education Portal for Teachers and Students
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='bg-teal-600 text-white text-center pt-4 h-16 w-5/12 text-lg font-bold'>
                            <Menu.Item className=" flex items-center justify-around ">
                                {({ active }) => (
                                        <Link
                                        className={`${active && ''}`}
                                        to="/steam-cell-info"
                                        >
                                            View All Organ & Tissues info <BsArrowRight className='inline-block ' fontWeight={900} fontSize={30} />
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
            <Menu.Button className="border-b-8 pb-6 hover:text-white font-bold border-sky-50 w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:border-gray-600 hover:bg-gray-600 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Ways to</span>
                <br /> <span className='pl-4'>Donate</span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

            <Menu.Items className="absolute z-50 -right-32 w-[930px] pl-4 pt-4 grid-flow-row gap-8 grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                   <div className='grid grid-cols-3 gap-4'>
                        <div className='grid gap-4'>

                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'} font-semibold`}
                                    to="/adult-stem-cell-registry"
                                    >
                                        Financial donations
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
                                       How to give
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/stem-cell-donation-eligibility-registration"
                                    >
                                        Donate now
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
                                        Volunteering
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
                                        Become a volunteer
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/how-cord-blood-donation-works"
                                    >
                                        Youth volunteers
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/safety-standards"
                                    >
                                        View all Ways to donate info
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='bg-gray-600 text-white text-center pt-4 h-16 w-5/12 text-lg font-bold'>
                            <Menu.Item className=" flex items-center justify-around ">
                                {({ active }) => (
                                        <Link
                                        className={`${active && ''}`}
                                        to="/steam-cell-info"
                                        >
                                            View All Ways to Donate info <BsArrowRight className='inline-block ' fontWeight={900} fontSize={30} />
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
            <Menu.Button className="border-b-8 pb-6 hover:text-white font-bold border-sky-50 w-40 pt-4 cursor-pointer text-left bg-white  text-gray-700 hover:border-gray-600 hover:bg-gray-600 focus:outline-none">
                <span><RiArrowDropDownLine className='inline-block' />Stories </span>
                <br /><span className='text-white pl-4 pb-4'></span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

            <Menu.Items className="absolute z-40 right-8 w-[930px] pl-4 pt-4 grid-flow-row gap-8 grid  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                   <div className='grid grid-cols-3 gap-4'>
                        <div className='grid gap-4'>

                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'} font-semibold`}
                                    to="/adult-stem-cell-registry"
                                    >
                                        Features
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
                                       Inspiring content by our team about donors, recipients and more
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
                            
                        </div>
                        <div className='grid gap-4 pb-4'>
                        <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'} font-semibold`}
                                    to="/how-stem-cell-donation-works"
                                    >
                                        Sharing
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
                                    to="/cord-blood-bank"
                                    >
                                        Tell us what Canada’s Lifeline means to you and read stories from others
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                    <Link
                                    className={`${active && 'text-red-600'}`}
                                    to="/cord-blood-eligibility"
                                    >
                                        Share your story
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='bg-gray-600 text-white text-center pt-4 h-16 w-5/12 text-lg font-bold'>
                            <Menu.Item className=" flex items-center justify-around ">
                                {({ active }) => (
                                        <Link
                                        className={`${active && ''}`}
                                        to="/steam-cell-info"
                                        >
                                            View all Stories info <BsArrowRight className='inline-block ' fontWeight={900} fontSize={30} />
                                        </Link>
                                    )}
                            </Menu.Item>

                        </div>
                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
      </li>
    </ul>
  )
}

export default Nav;