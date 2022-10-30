import React from 'react'

export const MainMenu = ({ menus }) => {

    const links = [
        {name: "Blood", submenu: true, sublinks:[
           {
                Head: "lorem",
                sublinks:[
                    {name:'lorem', link: '/'},
                    {name:'lorem', link: '/'},
                    {name:'lorem', link: '/'},
                    {name:'lorem', link: '/'}
                ],
            },
        ],
    },
        
    ]

  return (
   <>
    {links.map((link) => (
        <div>
            <div className='px-3 text-left md:cursor-pointer'>
                <h1 className='py-7'>{link.name}</h1>
                {link.submenu && (
                    <div>
                        <div>
                            <div>{link.sublinks.map((mysublinks) => (
                                <div>
                                    <h1>{mysublinks.Head}</h1>
                                    {mysublinks.sublinks.map((slinks) => (
                                        <li>{slinks.name}</li>
                                    ))}
                                </div>
                            ))}</div>
                        </div>
                    </div>)}
            </div>
        </div>
    ))}
   </>
  )
}
