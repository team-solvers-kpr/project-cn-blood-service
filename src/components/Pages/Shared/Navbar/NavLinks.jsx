import React from 'react'

const NavLinks = ({
    textColor,
    textTransform,
}) => {
    const links = [
        {name: "Reserch"},
        {name: "Careers"},
        {name: "Shop"},
        {name: "About us"}
    ]
  return <>
    {
        links.map(link => (
            <div>
                <div className={`px-3 lg:px-0 text-left ${textColor} ${textTransform}`}>
                    <h1 className='lg:hover:underline cursor-pointer py-4'>{link.name}</h1>
                </div>
            </div>
        ))
    }
  </>
}

export default NavLinks;