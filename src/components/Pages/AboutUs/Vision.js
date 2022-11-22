import React from "react";

const Vision = () => {
    return (
        <div className="px-40 py-10 mb-6">
            <h1 className="text-5xl font-bold text-justify mb-6 text-gray-600">
                Our vision, mission & values
            </h1>

            <div className="px-16">
                <div className="accordion" id="accordionExample5">
                    {/* item-1 */}
                    <div className="accordion-item mb-4 ">
                        <h2 className="accordion-header mb-0" id="headingOne5">
                            <button
                                className="cursor-pointer hover:bg-gray-200  bg-white hover:border-1   hover:shadow-md
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
        "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne5"
                                aria-expanded="true"
                                aria-controls="collapseOne5"
                            >
                                <div className="flex ">
                                    <p className="text-3xl font-semibold mr-4 text-red-600">
                                        +
                                    </p>
                                    <div className="text-2xl mt-1 text-justify text-gray-600">
                                        Our vision
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div
                            id="collapseOne5"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne5"
                        >
                            <div className="accordion-body bg-white p-16 flex justify-center  border border-gray-300">
                                <div>
                                    <p className="text-lg  text-justify mb-4 text-gray-600 font-semibold">
                                        To help every patient.
                                    </p>
                                    <p className="text-lg  text-justify mb-4 text-gray-600 font-semibold">
                                        To match every need.
                                    </p>

                                    <p className="text-lg  text-justify mb-4 text-gray-600 font-semibold">
                                        To serve every Canadian.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* item-2 */}
                    <div className="accordion-item mb-4">
                        <h2 className="accordion-header mb-0" id="headingTwo5">
                            <button
                                className=" cursor-pointer hover:bg-gray-200  bg-white hover:border-1   hover:shadow-md
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
        "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo5"
                                aria-expanded="false"
                                aria-controls="collapseTwo5"
                            >
                                <div className="flex ">
                                    <p className="text-3xl font-semibold mr-4 text-red-600">
                                        +
                                    </p>
                                    <div className="text-2xl mt-1 text-justify text-gray-600">
                                        Our mission
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo5"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo5"
                        >
                            <div className="accordion-body py-4 px-5 bg-white flex justify-center  border border-gray-300">
                                <div className="mx-60">
                                    <p className="text-lg   mb-4 text-gray-700 ">
                                        We are{" "}
                                        <strong>
                                            Canada’s Biological Lifeline.
                                        </strong>
                                    </p>
                                    <p className="text-lg   mb-4 text-gray-600  ">
                                        We are the connection between the
                                        sincere generosity of donors and the
                                        heartfelt appreciation of recipients,
                                        between the profound discoveries of
                                        science and the joyful restoration of
                                        health.
                                    </p>

                                    <p className="text-lg   mb-4 text-gray-600 ">
                                        As such, we are nationally responsible
                                        for a secure system of life essentials
                                        for transfusion or transplantation
                                        that’s reliable, accessible and
                                        sustainable.
                                    </p>
                                    <p className="text-lg   mb-4 text-gray-600 ">
                                        That’s why our organization must be
                                        efficient, our performance disciplined.
                                        We must work as one with our colleagues
                                        and partners at all levels.
                                    </p>
                                    <p className="text-lg   mb-4 text-gray-600 ">
                                        We must be prudent yet smart, rigorous
                                        yet agile, capable yet concerned. And we
                                        must be innovative, reinventing today so
                                        we can find better answers for tomorrow.
                                    </p>
                                    <p className="text-lg   mb-4 text-gray-600 ">
                                        In a very real way, what we do affects
                                        the well-being of all Canadians and
                                        every day we must earn their trust. We
                                        make a difference and in that, we take
                                        great pride.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* item-3 */}
                    <div className="accordion-item mb-4">
                        <h2
                            className="accordion-header mb-0"
                            id="headingThree5"
                        >
                            <button
                                className="
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
        "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree5"
                                aria-expanded="false"
                                aria-controls="collapseThree5"
                            >
                                <div className="flex ">
                                    <p className="text-3xl font-semibold mr-4 text-red-600">
                                        +
                                    </p>
                                    <div className="text-2xl mt-1 text-justify text-gray-600">
                                        Our mission
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div
                            id="collapseThree5"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree5"
                        >
                            <div className="accordion-body py-4 px-5">
                                <strong>
                                    This is the third item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-justify mt-6">
                <button
                    className="hover:bg-red-800 bg-red-600 text-lg font-semibold py-3 px-6 rounded-full mt-4"
                    style={{ color: "#fff" }}
                >
                    <a
                        href="https://www.blood.ca/sites/default/files/our_brand_stakeholder/story.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn more about our brand
                    </a>{" "}
                </button>
            </div>

            <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        </div>
    );
};

export default Vision;
