import React from 'react'
import EmployeesVideoSection from './EmployeesVideoSection';
import TogetherSection from './TogetherSection';
import { UpperSection } from './UpperSection';
import WhatWeDoMatters from './WhatWeDoMatters';

const Careers = () => {
  return (
    <div className=''>
      <UpperSection></UpperSection>
      <WhatWeDoMatters></WhatWeDoMatters>
        <TogetherSection></TogetherSection>
        <EmployeesVideoSection></EmployeesVideoSection>
        
    </div>
  )
}

export default Careers