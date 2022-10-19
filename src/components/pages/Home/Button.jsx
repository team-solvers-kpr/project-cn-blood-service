import React from 'react'
import { Link } from 'react-router-dom'

// export const Button = ({
//   bgPrimary, textPrimary, borderPrimary, bgSecondary, label, onClick
// }) => {
//   return (
//     // <div outline = {outline} className=''>
//     //   <Link className={ ` h-11 w-28 bg-[#C4161C] hover:border text-white hover:bg-white hover:text-[#C4161C] border-[#C4161C] rounded-full font-bold outline-none inline-block uppercase bg-${(props) => props.outline ? 'bg-transparent' : 'bg-[#C4161C]'}`} to={btnLink}>
//     //     {btnText}
//     //   </Link>
//     // </div>
//     <div>
//       <Link onClick={(e) => onClick(e)}
//         className={` h-11 w-28 ${bgPrimary} ${height} ${width} ${fontColor} font-bold inline-block outline-none rounded-full uppercase cursor-pointer duration-300 `}
//       >

//       </Link>
//     </div>

//   )
// }

export const  Button = ({ bgprimary, textprimary, borderprimary, bgsecondary, btnText, onClick ,textColor
}) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={`${bgprimary} h-11 w-28 rounded-full ${textColor} font-bold text-lg uppercase border ${borderprimary} hover:${bgsecondary} hover:${textprimary} cursor-pointer duration-300`}
    >
      {btnText}
    </button>
  );
}