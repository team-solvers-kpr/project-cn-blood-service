import React from "react";
import 'tw-elements';


const RelatedInfo = () => {
  return (
    <div className="">
     <div class="accordion" id="accordionExample">
  
  <div class="accordion-item mx-32 bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button class="
        text-2xl
       
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
          <p className="text-3xl font-semibold mr-4 text-red-600">+</p>
        Our Legacy
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
      <div className="bg-white p-16">
            <p className="text-lg  text-justify mb-4 text-gray-600">In November of 1997, Justice Horace Krever tabled the final report of the Royal Commission of Inquiry on the Blood System in Canada in the House of Commons. That same year federal, provincial and territorial governments enacted a memorandum of understanding that would shape a new, national blood authority for the country.</p>
            <p className="text-lg  text-justify mb-4 text-gray-600">Both documents were aimed at providing direction for the future. They established key principles for the blood system, including these examples:</p>
            <ul className="text-lg  text-justify mb-4 text-gray-600 p-6">
                <li>Safety of the blood supply is paramount.</li>
                <li>Blood is a public resource.</li>
                <li>Donors of blood and plasma should not be paid, except in rare circumstances.</li>
                <li>Adequacy and security of supply of all needed blood components and plasma fractions for Canadians should be encouraged.</li>
                <li>Sufficient blood should be collected so that importation from other countries is unnecessary.</li>
                <li>Access to blood products, including fractionated plasma products, should be free and universal.</li>
                <li>A national blood supply program should be maintained.</li>
            </ul>
            <p className="text-lg  text-justify mb-4 text-gray-600">These documents, and the principles they contain, have provided essential guidance for Canadian Blood Services.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script> 
    </div>
  );
};

export default RelatedInfo;
