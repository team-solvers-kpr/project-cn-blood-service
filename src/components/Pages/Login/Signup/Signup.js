import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as TiIcons from "react-icons/ti";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import Loading from "../../Shared/Loading";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let createUserError;

  if (user) {
    console.log(user);
  }

  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (error || updateError) {
    createUserError = (
      <p className="my-2 font-semibold text-base text-red-600">
        {error?.message}
      </p>
    );
  }

  const toggle = () => {
    setShowPass(!showPass);
  };

  const toggleConfirm = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({
      displayName: data.firstName + " " + data.lastName,
      dateOfBirth: data.dob,
      phoneNumber: data.phoneNumber,
      postalCode: data.postalCode,
    });
    navigate("/home");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Create an account</h2>
      <div className="text-start bg-white my-8 lg:mr-8 ml-5 lg:ml-0 mr-5 rounded-md">
        <div className="px-5 py-10">
          <h2 className="text-xl">You are just a step away!</h2>
          <h2 className="my-4 text-lg">
            Complete the form below to create an account. Once you've completed
            the required information, proceed to the next step.
          </h2>
          <h2 className="text-lg my-2">
            Thank you for being part of Canada's lifeline.
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email address with validation */}
            <h3 className="text-lg mt-6">
              Email address (this will be your username){" "}
              <span className="text-red-500">*</span>
            </h3>
            <input
              type="text"
              className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Address field is required.",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please, provide a valid email address.",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.email.message}
                </span>
              )}
            </label>

            {/* confirm email address with validation */}
            <h3 className="text-lg mt-4">
              Confirm Email address <span className="text-red-500">*</span>
            </h3>
            <input
              type="text"
              className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
              {...register("confirmEmail", {
                required: {
                  value: true,
                  message: "Confirm Email Address field is required.",
                },
                validate: (value) =>
                  value === getValues("email") ||
                  "Both email address fields must be the same.",
              })}
            />
            <label className="label">
              {errors.confirmEmail?.type === "required" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.confirmEmail.message}
                </span>
              )}
              {errors.confirmEmail?.type === "validate" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.confirmEmail.message}
                </span>
              )}
            </label>

            {/* first name address with validation */}
            <h3 className="text-lg mt-4">
              First name <span className="text-red-500">*</span>
            </h3>
            <input
              type="text"
              className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First Name field is required.",
                },
              })}
            />
            <label className="label">
              {errors.firstName?.type === "required" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.firstName.message}
                </span>
              )}
            </label>

            {/* last name with validation */}
            <h3 className="text-lg mt-4">
              Last name <span className="text-red-500">*</span>
            </h3>
            <input
              type="text"
              className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last Name field is required.",
                },
              })}
            />
            <label className="label">
              {errors.lastName?.type === "required" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.lastName.message}
                </span>
              )}
            </label>

            {/* donor number field */}
            <h3 className="text-lg mt-4">Donor number</h3>
            <input
              type="text"
              placeholder="Enter your donor number (if you have one)"
              className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
            />

            {/* DoB with validation */}
            <h3 className="text-lg mt-4">
              Date of birth <span className="text-red-500">*</span>
            </h3>
            <input
              type="date"
              name="date of birth"
              className="px-4 text-lg border-2 border-gray-200 w-1/4 hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
              {...register("dob", {
                required: {
                  value: true,
                  message: "Date of birth is required.",
                },
              })}
            />
            <label className="label">
              {errors.dob?.type === "required" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.dob.message}
                </span>
              )}
            </label>

            {/* postal code with required validation */}
            <h3 className="text-lg mt-4">
              Postal Code <span className="text-red-500">*</span>
            </h3>
            <input
              type="text"
              className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
              {...register("postalCode", {
                required: {
                  value: true,
                  message: "Postal code field is required.",
                },
              })}
            />
            <label className="label">
              {errors.postalCode?.type === "required" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.postalCode.message}
                </span>
              )}
            </label>

            {/* phone number with validations */}
            <h3 className="text-lg mt-4">
              Phone number<span className="text-red-500">*</span>
            </h3>
            <input
              type="tel"
              className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Phone number field is required.",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed",
                },
                minLength: {
                  value: 11,
                  message: "Phone number must be at least 11 digits long!",
                },
              })}
            />
            <label className="label">
              {errors.phoneNumber?.type === "required" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.phoneNumber.message}
                </span>
              )}
              {errors.phoneNumber?.type === "minLength" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.phoneNumber.message}
                </span>
              )}
              {errors.phoneNumber?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.phoneNumber.message}
                </span>
              )}
            </label>

            {/* password with various validations */}
            <h3 className="text-lg mt-4">
              Password <span className="text-red-500">*</span>
            </h3>
            <div className="relative flex items-center">
              <input
                type={showPass === false ? "password" : "text"}
                className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password field is required",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}\S*$/,
                  },
                })}
              />
              <div
                className={`absolute right-4 text-4xl ${
                  showPass === false ? "text-gray-400" : "text-red-600"
                } cursor-pointer`}
              >
                <AiIcons.AiFillEye onClick={toggle} />
              </div>
            </div>
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.password.message}
                </span>
              )}
            </label>
            {errors.password?.type === "pattern" && (
              <span className="label-text-alt text-red-500 font-semibold text-base">
                {errors.password.message}
              </span>
            )}

            {/* confirm password */}
            <h3 className="text-lg mt-4">
              Confirm password <span className="text-red-500">*</span>
            </h3>
            <div className="relative flex items-center">
              <input
                type={showConfirmPass === false ? "password" : "text"}
                className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password field is required.",
                  },
                  validate: (value) => value === getValues("password"),
                })}
              />
              <div
                className={`absolute right-4 text-4xl ${
                  showConfirmPass === false ? "text-gray-400" : "text-red-600"
                } cursor-pointer`}
              >
                <AiIcons.AiFillEye onClick={toggleConfirm} />
              </div>
            </div>
            <label className="label">
              {errors.confirmPassword?.type === "required" && (
                <span className="label-text-alt text-red-500 font-semibold text-base">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>
            <div className="mt-3 ml-1">
              <h2 className="my-2 text-base font-bold text-red-700">
                Be aware with your password!
              </h2>
              <h2 className="text-lg font-semibold text-gray-700">
                Password much maintain following pattern:
              </h2>
              <p
                className={`my-2 text-lg
                                ${
                                  errors.password?.type === "pattern" ||
                                  errors.password?.type === "required"
                                    ? "text-red-800"
                                    : "text-green-800"
                                }`}
              >
                <div
                  className={`flex border-2 rounded-md p-2 ${
                    errors.password?.type === "pattern" ||
                    errors.password?.type === "required"
                      ? "border-red-500 bg-red-50"
                      : "border-green-500 bg-green-50"
                  }`}
                >
                  <div>
                    {errors.password?.type === "pattern" ||
                    errors.password?.type === "required" ? (
                      <ImIcons.ImCross className="inline-block text-4xl mt-2 mr-1" />
                    ) : (
                      <TiIcons.TiTick className="inline-block text-5xl mt-1" />
                    )}
                  </div>
                  <div className="ml-2">
                    Minimum 8 characters, At least one capital letter, At least
                    one lower case letter, At least one number, No spaces.
                  </div>
                </div>

                <p
                  className={`my-2 text-lg 
                                ${
                                  errors.confirmPassword?.type === "required" ||
                                  errors.confirmPassword?.type === "validate"
                                    ? "text-red-600"
                                    : "text-green-600"
                                }`}
                >
                  {errors.confirmPassword?.type === "required" ||
                  errors.confirmPassword?.type === "validate" ? (
                    <ImIcons.ImCross className="inline-block text-xl mr-1 mb-1" />
                  ) : (
                    <TiIcons.TiTick className="inline-block text-2xl mr-1 mb-1" />
                  )}
                  Password must match
                </p>
              </p>
            </div>
            {createUserError}
            <input
              type="submit"
              value="Sign up"
              className="my-10 py-3 px-6 bg-red-600 rounded-full text-white text-lg font-semibold hover:underline hover:shadow-xl cursor-pointer focus:bg-gray-200"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
