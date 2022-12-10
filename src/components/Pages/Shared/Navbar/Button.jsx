import React from 'react'

  const  Button = ({ 
      bgprimary, textprimary, borderprimary, 
      bgsecondary, btnText, onClick ,textColor,
      height, width, fontwidth, fontsize, textTransform, buttonIcon
  }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={`${bgprimary} 
      ${height} ${width}
      rounded-full 
      ${textColor} ${fontwidth} 
      ${fontsize} ${textTransform} 
      border 
      ${borderprimary} hover:${bgsecondary} 
      hover:${textprimary} cursor-pointer 
      duration-300`
    }
    >
     {buttonIcon}{btnText}
    </button>
  );
}
export default Button;