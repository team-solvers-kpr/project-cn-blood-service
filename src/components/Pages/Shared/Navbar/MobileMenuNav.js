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
        <AccordionHeader onClick={() => handleOpen(1)} className='border-l-8 border-red-600 hover:text-white focus:text-white focus:bg-red-600  w-full hover:bg-red-600 cursor-pointer text-left bg-white px-4 text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20'>
          Blood
        </AccordionHeader>
        <AccordionBody className='py-0'>
          <div className="bg-red-600 px-4 pt-8 pb-4 text-xl  text-left font-bold text-white">
                                                    <Link to='' className='flex justify-between'>
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
            </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className='border-l-8 border-red-700 hover:text-white focus:text-white focus:bg-red-700  w-full hover:bg-red-700 cursor-pointer text-left bg-white px-4 text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20'>
          Plasma
        </AccordionHeader>
        <AccordionBody>
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
        <AccordionHeader onClick={() => handleOpen(3)} className="flex gap-2   border-l-8 border-[#54C3BB] hover:bg-[#54C3BB] hover:text-white focus:text-white focus:bg-[#54C3BB]  w-full group-hover:bg-[#54C3BB]cursor-pointer text-left bg-white text-xl font-bold text-gray-700 shadow-sm focus:underline focus:outline-none ease-in-out h-20">
          Stem Cells
        </AccordionHeader>
        <AccordionBody className='py-0'>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}