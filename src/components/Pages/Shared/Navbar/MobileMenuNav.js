import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function MobileMenuNav() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className='border-l-8 border-red-600 hover:text-white focus:text-white focus:bg-red-600  w-full hover:bg-red-600 cursor-pointer transition-all duration-300 text-left bg-white px-4 text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20'>
          Blood
        </AccordionHeader>
        <AccordionBody className='py-0'>
          <div className="bg-red-600 px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='/blood' className='flex justify-between'>
                                                        <span>
                                                            View all Blood info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
          </div>
                                                <div className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Am I eligible to donate blood?</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to='/abcs-of-eligibility'>
                                                                    ABCs of eligibility
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/changes-to-donation-criteria'>
                                                                     Changes to donation criteria
                                                                </Link>
                                                            </li>
                                                                <li>
                                                                    <Link to={`/trans-individuals`}>
                                                                        Trans individuals
                                                                    </Link>
                                                                </li>

                                                                    
                                                                <li>
                                                                    <Link to='/sexual-behaviour-based-screening'>
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
                                                                <Link to={`/what-is-my-blood-type`}>
                                                                    What is my blood type?
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={`/donation-process`}>
                                                                    Donation process
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={`/rare-blood-program`}>
                                                                    Rare Blood Program
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/donor-questionnaire'>
                                                                    Donor Questionnaire
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={`/donor-health-and-safety`}> 
                                                                    Donor health and safety
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 mb-12'>
                                                        <ul className='font-semibold space-y-8 opacity-80'>
                                                            <li>
                                                                <Link to={`/donating-platelets`}>
                                                                    Donating platelets
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={`/recognition-program`}>
                                                                    Recognition program
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={`/interpreting-services`}>
                                                                    Sign language interpreting services for Deaf, deafened and hard of hearing donors Donor centre  hours & locations
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={`/covid-19-information`}>
                                                                    COVID-19 information
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
            </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className='border-l-8 border-red-700 hover:text-white focus:text-white focus:bg-red-700  w-full hover:bg-red-700 cursor-pointer transition-all duration-300 text-left bg-white px-4 text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20'>
          Plasma
        </AccordionHeader>
        <AccordionBody className='py-0'>
        <div className="bg-red-700 px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Plasma info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </div>
                                                <div className=" px-4 pt-10 pb-2">
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
                                                </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className="flex gap-2   border-l-8 border-[#54C3BB] hover:bg-[#54C3BB] hover:text-white focus:text-white focus:bg-[#54C3BB] transition-all duration-300 w-full px-4 cursor-pointer text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
          Stem Cells
        </AccordionHeader>
        <AccordionBody className='py-0'>
        <div className="bg-[#54C3BB] px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Stem Cells info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </div>
                                                <div className=" px-4 pt-10 pb-2">
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
                                                </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className="flex gap-2 border-l-8 border-[#419B96] hover:text-white focus:text-white focus:bg-[#419B96] w-full hover:bg-[#419B96] cursor-pointer px-4 transition-all duration-300 text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
          Organs & Tissues
        </AccordionHeader>
        <AccordionBody className='py-0'>
        <div className="bg-[#419B96] px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Organs & Tissues info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </div>
                                                <div className=" px-4 pt-10 pb-2">
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
                                                </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)} className="flex gap-2 border-l-8 border-white hover:text-white focus:text-white focus:bg-[#4D4D4D] hover:border-[#4D4D4D] focus:border-[#4D4D4D] px-4 w-full hover:bg-[#4D4D4D] cursor-pointer text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
          Ways To Donate
        </AccordionHeader>
        <AccordionBody className='py-0'>


        <div className="bg-[#4D4D4D] px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Ways To Donate info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </div>
                                                <div className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Financial donations</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to=''>
                                                                Your gifts at work
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                How to give
                                                                </Link>
                                                            </li>
                                                                <li>
                                                                    <Link to={``}>
                                                                    Donate now
                                                                    </Link>
                                                                </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 '>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Partners for Life</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                Group donations and pledge-based partnerships
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                National partners
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Partner eNews
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 mb-12'>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Volunteering</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                Become a volunteer
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Youth volunteers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

        {/* <div className="bg-[#4D4D4D] px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Ways To Donate info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </div>
                                                <div className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Financial donations</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to=''>
                                                                Your gifts at work
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                How to give
                                                                </Link>
                                                            </li>
                                                                <li>
                                                                    <Link to={``}>
                                                                    Donate now
                                                                    </Link>
                                                                </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 '>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Partners for Life</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                Group donations and pledge-based partnerships
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                National partners
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Partner eNews
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 mb-12'>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Volunteering</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                Become a volunteer
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                Youth volunteers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div> */}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)} className="flex gap-2 border-l-8 border-white hover:text-white focus:text-white focus:bg-[#4D4D4D] transition-all duration-300  w-full hover:bg-[#4D4D4D] hover:border-[#4D4D4D] focus:border-[#4D4D4D]  cursor-pointer px-4 text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
          Stories
        </AccordionHeader>
        <AccordionBody className='py-0'>
        <div className="bg-[#4D4D4D]  px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
                                                        <span>
                                                            View all Stories info 
                                                        </span>
                                                        <BsArrowRight className='inline-block' fontWeight={900} fontSize={30} />
                                                    </Link>
                                                </div>
                                                <div className=" px-4 pt-10 pb-2">
                                                    <div className='text-left '>
                                                        <h1 className='font-semibold opacity-80'><Link to='/'>Features</Link></h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li className=''>
                                                                <Link to=''>
                                                                Inspiring content by our team about donors, recipients and more
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to=''>
                                                                Read articles
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='text-left mt-8 mb-12'>
                                                        <h1 className='font-semibold opacity-80'>
                                                            <Link to='/donating-blood'>Sharing</Link>
                                                        </h1>
                                                        <ul className='ml-16 border-l-2 space-y-4 mt-12 pl-2'>
                                                            <li>
                                                                <Link>
                                                                Tell us what Canada’s Lifeline means to you and read stories from others
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    Share your story
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}