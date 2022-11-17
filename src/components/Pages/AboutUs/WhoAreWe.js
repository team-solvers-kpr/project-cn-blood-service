import React from "react";


const WhoAreWe = () => {
  return (
    <div className="mb-4" >
      <div className="px-40 py-16"style={{backgroundColor:'#C4161C'}}>
      <h1 className="text-5xl font-bold text-justify mb-10 text-gray-100">Who we are</h1>
      <p className="text-lg  text-justify mb-4 text-gray-100">Canadian Blood Services is a not-for-profit charitable organization that operates independently from government. Created through a memorandum of understanding between the federal, provincial, and territorial governments, we opened our doors in 1998. Our funding comes primarily from the provincial and territorial governments, and we are a registered charity that accepts financial donations.</p>
     <p className="text-lg  text-justify mb-4 text-gray-100">Canadian Blood Services is one part of Canada’s broader network of healthcare systems and is the only national manufacturer of biological products funded by Canada’s provincial and territorial governments. We provide blood, plasma, as well as transfusion and stem cell registry services, on behalf of all provincial and territorial governments (excluding Quebec). Our national transplant registry for interprovincial organ sharing and related programs extends to all the provinces and territories. We have a unique relationship with Hema-Québec, the provincial blood system operator that provides products to patients and manages Quebec’s stem cell donor registry. Our two organizations work closely to share blood products in times of need, and we collaborate regularly to share information, insights, and data.</p>
     
     <div>
     <div className="">
     <div class="accordion" id="accordionExample">
  
  <div class="accordion-item  bg-white">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button class="
        text-xl
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
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
          <p className="text-3xl  mr-4 text-red-600">+</p>
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
     </div>
      </div>
      
    </div>
  );
};

export default WhoAreWe;
