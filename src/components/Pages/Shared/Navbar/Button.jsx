import React from 'react'

  const  Button = ({ 
      bgprimary, textprimary, borderprimary, 
      bgsecondary, btnText, onClick ,textColor
  }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={`${bgprimary} 
      h-11 w-28 rounded-full 
      ${textColor} font-bold 
      text-base uppercase border 
      ${borderprimary} hover:${bgsecondary} 
      hover:${textprimary} cursor-pointer 
      duration-300`
    }
    >
      {btnText}
    </button>
  );
}
export default Button;