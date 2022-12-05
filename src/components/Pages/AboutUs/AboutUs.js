import React from "react";
import UpperPart from "./UpperPart";
import WhoAreWe from "./WhoAreWe";
import WhatWeDo from "./WhatWeDo";
import WhoWeServe from "./WhoWeServe";
import Vision from "./Vision";
import LastRedPart from "./LastRedPart";
import Annual from "./Annual";
import BookDonationButton from "../Home/BookDonationButton/BookDonationButton";

const AboutUs = () => {
  return (
    <div className="mt-[168px]">
      <UpperPart></UpperPart>
      <WhoAreWe></WhoAreWe>
      <WhatWeDo></WhatWeDo>
      <WhoWeServe></WhoWeServe>
      <Vision></Vision>
      <LastRedPart></LastRedPart>
      <Annual></Annual>
      <BookDonationButton></BookDonationButton>
    </div>
  );
};

export default AboutUs;
