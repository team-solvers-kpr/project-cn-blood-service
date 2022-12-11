import React from "react";
import FooterUpperPart from "./FooterUpperPart";
import FooterLowerPart from "./FooterLowerPart";
const Footer = () => {
  return (
    <div className="p-4">
      <FooterUpperPart></FooterUpperPart>
      <div className="border-t border-gray-300 mt-12 mb-8"></div>
      <FooterLowerPart></FooterLowerPart>
    </div>
  );
};

export default Footer;
