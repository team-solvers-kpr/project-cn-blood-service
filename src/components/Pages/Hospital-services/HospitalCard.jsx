import React, { useEffect, useState } from 'react'
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import cardImg from '../../assets/images/adaptability_0.png';



export const HospitalCard = () => {
  const [ hospitalData, setHospitalData ] = useState([]);
  useEffect(() => {
    const fetchHospitalCard = async () => {
      const res = await fetch('../../../../public/assets/data/hospitalCard.json');
      const data = await res.json();
      return setHospitalData(data);
    }
    fetchHospitalCard()
  }, []);
  console.log(hospitalData);
  return (
    <div>
      <h1>feching Data</h1>

      <div>{hospitalData.morelink}</div>
      
    </div>
  )
}
