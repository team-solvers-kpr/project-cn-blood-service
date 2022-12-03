import React from 'react'
import { Award } from './Award';
import EmployeesVideoSection from './EmployeesVideoSection';
import LastBluePart from './LastBluePart';
import LastGrayPart from './LastGrayPart';
import { Note } from './Note';
import { ServiceInterruption } from './ServiceInterruption';
import TogetherSection from './TogetherSection';
import { UpperSection } from './UpperSection';
import WhatWeDoMatters from './WhatWeDoMatters';

const Careers = () => {
  return (
    <div className=''>
      <UpperSection></UpperSection>
      <WhatWeDoMatters></WhatWeDoMatters>
      <ServiceInterruption></ServiceInterruption>
        <TogetherSection></TogetherSection>
        <EmployeesVideoSection></EmployeesVideoSection>
        <LastBluePart></LastBluePart>
        <LastGrayPart></LastGrayPart>
        <Note></Note>
        <Award></Award>
        
    </div>
  )
}

export default Careers