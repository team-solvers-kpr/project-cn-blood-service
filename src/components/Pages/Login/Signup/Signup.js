import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as AiIcons from "react-icons/ai";

const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const {
        register,
        getValues,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const toggle = () => {
        setShowPass(!showPass);
    };

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <h2 className="text-2xl font-semibold">Create an account</h2>
            <div className="text-start bg-white my-8 mr-8 rounded-md">
                <div className="px-5 py-10">
                    <h2 className="text-xl">You are just a step away!</h2>
                    <h2 className="my-4 text-lg">
                        Complete the form below to create an account. Once
                        you've completed the required information, proceed to
                        the next step.
                    </h2>
                    <h2 className="text-lg my-2">
                        Thank you for being part of Canada's lifeline.
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                    message:
                                        "Please, provide a valid email address.",
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
                        <h3 className="text-lg mt-4">
                            Confirm Email address{" "}
                            <span className="text-red-500">*</span>
                        </h3>
                        <input
                            type="text"
                            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                            {...register("confirmEmail", {
                                required: {
                                    value: true,
                                    message:
                                        "Confirm Email Address field is required.",
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
                        <h3 className="text-lg mt-4">
                            First name <span className="text-red-500">*</span>
                        </h3>
                        <input
                            type="text"
                            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                        />
                        <h3 className="text-lg mt-4">
                            Last name <span className="text-red-500">*</span>
                        </h3>
                        <input
                            type="text"
                            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                        />
                        <h3 className="text-lg mt-4">Donor number</h3>
                        <input
                            type="text"
                            placeholder="Enter your donor number (if you have one)"
                            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                        />
                        <h3 className="text-lg mt-4">
                            Date of birth{" "}
                            <span className="text-red-500">*</span>
                        </h3>
                        <input
                            type="date"
                            name="date of birth"
                            className="px-4 text-lg border-2 border-gray-200 w-1/4 hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                        />
                        <h3 className="text-lg mt-4">
                            Postal Code <span className="text-red-500">*</span>
                        </h3>
                        <input
                            type="text"
                            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                        />
                        <h3 className="text-lg mt-4">
                            Phone number<span className="text-red-500">*</span>
                        </h3>
                        <input
                            type="tel"
                            className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                        />
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
                                        message: "Password is required",
                                    },
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be at least 8 character long",
                                    },
                                })}
                            />
                            <div
                                className={`absolute right-4 text-4xl ${
                                    showPass === false
                                        ? "text-gray-400"
                                        : "text-red-600"
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
                            {errors.password?.type === "minLength" && (
                                <span className="label-text-alt text-red-500 font-semibold text-base">
                                    {errors.password.message}
                                </span>
                            )}
                        </label>
                        <h3 className="text-lg mt-4">
                            Confirm password{" "}
                            <span className="text-red-500">*</span>
                        </h3>
                        <div className="relative flex items-center">
                            <input
                                type={showPass === false ? "password" : "text"}
                                className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be at least 8 character long",
                                    },
                                })}
                            />
                            <div
                                className={`absolute right-4 text-4xl ${
                                    showPass === false
                                        ? "text-gray-400"
                                        : "text-red-600"
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
                            {errors.password?.type === "minLength" && (
                                <span className="label-text-alt text-red-500 font-semibold text-base">
                                    {errors.password.message}
                                </span>
                            )}
                        </label>
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
