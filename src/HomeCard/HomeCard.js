import React from "react";

const HomeCard = () => {
    const CardData=[
        {Name: 'Lee',CardTittle:'Blood for Life',Tittle:'Blood recipient',Prof:'Future Olympian',para:'Your donation could go on to captivate a country.',FlipPara:'You can save lives and change many more.'},
    {Name: 'Christina',CardTittle:'Plasma for Life',Tittle:'Plasma recipient',Prof:'Sign language teacher',para:'Your donation could go on to fuel the future.',FlipPara:'For many, plasma is the only treatment'},
    {Name: 'Tom',CardTittle:'Stem Cells for Life',Tittle:'Stem cell  recipient',Prof:'Role model',para:'Your donation could go on to be the best dad.',FlipPara:"You may be someone's lifesaving match."},
    {Name: 'Mary',CardTittle:'Organs & Tissues for Life',Tittle:'Organ  recipient',Prof:'Storyteller',para:'Your donation could go on to support cultures to thrive.',FlipPara:'More than 4,000 people in Canada are waiting for an organ transplant.'}]
    console.log(CardData);
  return (
    <div>
      <h2>This is HomeCard</h2>
   
    </div>
     
  );
};

export default HomeCard;
