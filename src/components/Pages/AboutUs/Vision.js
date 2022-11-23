import React from "react";
import 'tw-elements';
import valueImage from '../../assets/value.jpg';




const Vision = () => {
  return (
    <div className="lg:px-40 px-4 py-10 mb-6">
        <h1 className="text-5xl font-bold text-justify mb-6 text-gray-600">Our vision, mission & values</h1>

        <div className="lg:px-16">
      <div class="accordion" id="accordionExample5">
        {/* item-1 */}
    <div class="accordion-item mb-4 ">
      <h2 class="accordion-header mb-0" id="headingOne5">
        <button class="cursor-pointer hover:bg-gray-200  bg-white hover:border-1   hover:shadow-md
          relative
          collapsed
          flex
          items-center
          w-full
          py-2
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
          aria-controls="collapseOne5">
          <div className="flex ">
        <p className="text-3xl font-semibold mr-4 text-red-600">+</p>
       <div className="text-2xl mt-1 text-justify text-gray-600">Our vision</div>
        </div>
        </button>
      </h2>
      <div id="collapseOne5" class="accordion-collapse collapse show" aria-labelledby="headingOne5">
        <div class="accordion-body bg-white p-16 flex justify-center  border border-gray-300">
        
            <div>
            <p className="text-lg  text-justify mb-4 text-gray-600 font-semibold">To help every patient.</p>
            <p className="text-lg  text-justify mb-4 text-gray-600 font-semibold">To match every need.</p>
            
            <p className="text-lg  text-justify mb-4 text-gray-600 font-semibold">To serve every Canadian.</p>
           
        </div>
        </div>
      </div>
    </div>
     {/* item-2 */}
    <div class="accordion-item mb-4">
      <h2 class="accordion-header mb-0" id="headingTwo5">
        <button class=" cursor-pointer hover:bg-gray-200  bg-white hover:border-1   hover:shadow-md
          collapsed
          relative
          flex
          items-center
          w-full
          py-2
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
          aria-controls="collapseTwo5">
         <div className="flex ">
        <p className="text-3xl font-semibold mr-4 text-red-600">+</p>
       <div className="text-2xl mt-1 text-justify text-gray-600">Our mission</div>
        </div>
        </button>
      </h2>
      <div id="collapseTwo5" class="accordion-collapse collapse" aria-labelledby="headingTwo5">
        <div class="accordion-body py-4 px-5 bg-white flex justify-center  border border-gray-300">
        <div className="mx-60">
            <p className="text-lg   mb-4 text-gray-700 ">We are <strong>Canada’s Biological Lifeline.</strong></p>
            <p className="text-lg   mb-4 text-gray-600  ">We are the connection between the sincere
                          generosity of donors and the heartfelt appreciation
                          of recipients, between the profound discoveries of
                          science and the joyful restoration of health.</p>
            
            <p className="text-lg   mb-4 text-gray-600 ">As such, we are nationally responsible for a secure
system of life essentials for transfusion or transplantation
that’s reliable, accessible and sustainable.</p>
<p className="text-lg   mb-4 text-gray-600 ">That’s why our organization must be efficient,
our performance disciplined. We must work as one
with our colleagues and partners at all levels.</p>
<p className="text-lg   mb-4 text-gray-600 ">We must be prudent yet smart, rigorous yet agile, capable
yet concerned. And we must be innovative, reinventing today
so we can find better answers for tomorrow.</p>
<p className="text-lg   mb-4 text-gray-600 ">In a very real way, what we do affects the well-being
of all Canadians and every day we must earn their trust.
We make a difference and in that, we take great pride.</p>
           
        </div>
        </div>
      </div>
    </div>
     {/* item-3 */}
    <div class="accordion-item mb-4">
      <h2 class="accordion-header mb-0" id="headingThree5">
        <button class="
         cursor-pointer hover:bg-gray-200  bg-white hover:border-1   hover:shadow-md
          collapsed
          relative
          flex
          items-center
          w-full
          py-2
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
          aria-controls="collapseThree5">
         <div className="flex ">
        <p className="text-3xl font-semibold mr-4 text-red-600">+</p>
       <div className="text-2xl mt-1 text-justify text-gray-600">Our value</div>
        </div>
        </button>
      </h2>
      <div id="collapseThree5" class="accordion-collapse collapse" aria-labelledby="headingThree5">
        <div class="accordion-body py-4 px-5 border border-gray-300">
        <div>
            <div className="flex justify-center">
              <img src={valueImage} alt=''/>
            </div>
            <div>
              <h2 className="font-bold text-lg text-gray-700">Integrity</h2>
              <p className="text-gray-700 mb-1">We do the right thing, always.</p>
              <p className="text-gray-700 mb-1">We do what we say we will do.</p>
              <p className="text-gray-700 mb-1">We share information in an honest, transparent manner.</p>
              <p className="text-gray-700 ">We follow policies, processes and regulations.</p>
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-lg text-gray-700">Collaboration</h2>
              <p className="text-gray-700 mb-1">We help each other.</p>
              <p className="text-gray-700 mb-1">We engage those who are affected by our decisions.</p>
              <p className="text-gray-700 mb-1">We listen with an open mind.</p>
              <p className="text-gray-700">We focus on solutions. </p>
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-lg text-gray-700">Adaptability</h2>
              <p className="text-gray-700 mb-1">We embrace change.</p>
              <p className="text-gray-700 mb-1">We keep learning.</p>
              <p className="text-gray-700 mb-1">We seek new ideas and opportunities.</p>
              <p className="text-gray-700">We integrate better ways of working, quickly. </p>
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-lg text-gray-700">Respect</h2>
              <p className="text-gray-700 mb-1">We treat everyone fairly.</p>
              <p className="text-gray-700 mb-1">We are considerate and courteous to everyone.</p>
              <p className="text-gray-700 mb-1">We value diversity in all its forms.</p>
              <p className="text-gray-700">We create and nurture an environment where everyone feels included.  </p>
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-lg text-gray-700">Excellence</h2>
              <p className="text-gray-700 mb-1">We give our best every day, in all that we do.</p>
              <p className="text-gray-700 mb-1">We take ownership of our work.</p>
              <p className="text-gray-700 mb-1">We continuously improve our processes, products and services.</p>
              <p className="text-gray-700">We set increasingly higher standards for ourselves.   </p>
            </div>

           
        </div>
        </div>
      </div>
    </div>
  </div>
    </div>
        <div className="text-justify lg:mt-6 mt-14">
        <button className="hover:bg-red-800 bg-red-600 lg:text-lg text-base font-semibold py-3 px-6 rounded-full mt-4" style={{color:'#fff'}}><a href="https://www.blood.ca/sites/default/files/our_brand_stakeholder/story.html"  target="_blank"
        rel="noopener noreferrer">Learn more about our brand</a> </button>
        </div>
        
     
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script> 
    </div>
  );
};

export default Vision;
