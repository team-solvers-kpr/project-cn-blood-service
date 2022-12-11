import React from "react";
import HandshakePic from '../../assets/handshake.jpeg'





const LastBluePart = () => {
  return (
 <div className="" style={{background:'#54C3BB'}}>
    <div className="lg:flex lg:justify-between px-3 xl:px-28">
        {/* left side  */}
    <div className=" lg:w-1/2  mr-4 py-12">
    <h1 className="text-3xl xl:font-semibold text-white text-justify"> We value diversity, equity and inclusion</h1>
    <p className="text-justify 2xl:mt-10 mt-2 text-base text-white ">
    Our commitment to diversity, equity and inclusion starts from within. We are dedicated to creating an organizational culture where employees and volunteers can bring their whole selves to work and engage and contribute in ways that are most meaningful to them. We aim to reflect the diversity of Canadians and exemplify a culture of inclusion where all employees have equitable opportunities to succeed and contribute. To support an equitable and inclusive culture, we have Employee Resource Groups for Black, Indigenous, and People of Colour (BIPOC), employees with disabilities, LGBTQ+ employees and a women’s leadership network.
    </p>
    
 </div>
        {/* right side  */}
 <div className="lg:w-1/2 lg:ml-16 py-12 ">
    <div className="w-full bg-white h-80">
    <div className="flex justify-center content-center">
    <img src={HandshakePic}  />
    </div>
    </div>
    
   
        
 </div>
    </div>
 </div>
  );
};

export default LastBluePart;
