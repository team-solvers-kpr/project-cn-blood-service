import React from 'react'

export const NavLinks = () => {
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
                <div className='px-3 lg:px-0 text-left lg:text-black text-white'>
                    <h1 className='lg:hover:underline cursor-pointer'>{link.name}</h1>
                </div>
            </div>
        ))
    }
  </>
}
