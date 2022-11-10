import React from "react";

const Signup = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Create an account</h2>
      <div className="text-start bg-white my-8 mr-8 rounded-md">
        <div className="px-5 py-10">
          <h2 className="text-xl">You are just a step away!</h2>
          <h2 className="my-4 text-lg">
            Complete the form below to create an account. Once you've completed
            the required information, proceed to the next step.
          </h2>
          <h2 className="text-lg my-2">
            Thank you for being part of Canada's lifeline.
          </h2>
          <h3 className="text-lg mt-6">
            Email address (this will be your username){" "}
            <span className="text-red-500">*</span>
          </h3>
          <input
            type="text"
            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg rounded-md my-2"
            required
          />
          <h3 className="text-lg mt-4">
            Confirm Email address <span className="text-red-500">*</span>
          </h3>
          <input
            type="text"
            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg rounded-md my-2"
          />
          <h3 className="text-lg mt-4">
            First name <span className="text-red-500">*</span>
          </h3>
          <input
            type="text"
            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg rounded-md my-2"
          />
          <h3 className="text-lg mt-4">
            Last name <span className="text-red-500">*</span>
          </h3>
          <input
            type="text"
            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg rounded-md my-2"
          />
          <h3 className="text-lg mt-4">Donor number</h3>
          <input
            type="text"
            placeholder="Enter your donor number (if you have one)"
            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg rounded-md my-2"
          />
          <h3 className="text-lg mt-4">
            Date of birth <span className="text-red-500">*</span>
          </h3>
          <input
            type="date"
            name="date of birth"
            className="px-4 text-lg border-2 border-gray-200 w-1/4 hover:shadow-lg focus:shadow-lg rounded-md my-2"
          />
          <h3 className="text-lg mt-4">
            Postal Code <span className="text-red-500">*</span>
          </h3>
          <input
            type="text"
            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg rounded-md my-2"
          />
          <h3 className="text-lg mt-4">
            Phone number<span className="text-red-500">*</span>
          </h3>
          <input
            type="tel"
            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg rounded-md my-2"
          />
          <h3 className="text-lg mt-4">
            Password <span className="text-red-500">*</span>
          </h3>
          <input
            type="password"
            placeholder="Password"
            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg rounded-md my-2"
          />
          <h3 className="text-lg mt-4">
            Confirm password <span className="text-red-500">*</span>
          </h3>
          <input
            type="password"
            placeholder="Password"
            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg rounded-md my-2"
          />
          <button className="my-10 py-3 px-6 bg-red-600 rounded-full text-white text-lg font-semibold">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
