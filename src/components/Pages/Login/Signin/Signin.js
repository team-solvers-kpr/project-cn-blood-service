import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../Signup/Signup";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { useForm } from "react-hook-form";
import * as AiIcons from "react-icons/ai";
import Loading from "../../Shared/Loading";

const Signin = () => {
    const [showPass, setShowPass] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    let signInError;

    if (gUser) {
        console.log(gUser);
    }

    const toggle = () => {
        setShowPass(!showPass);
    };

    if (gLoading || loading) {
        return <Loading></Loading>;
    }

    if (gError || error) {
        signInError = (
            <p className="my-2 font-semibold text-base text-red-600">
                {gError?.message || error?.message}
            </p>
        );
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        navigate("/home");
    };

    return (
        <div className="bg-gray-100">
            <h2 className="text-start text-xl font-semibold text-gray-500 ml-10 pt-5 pb-3">
                Sign in or create an account
            </h2>
            <hr className="py-6" />
            <div className="lg:grid grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold">Sign in</h2>
                    <div className="text-start bg-white my-8 lg:ml-8 ml-5 lg:mr-0 mr-5 rounded-md">
                        <div className="px-5 py-10">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="text-lg">
                                    Username{" "}
                                    <span className="text-red-500">*</span>
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Username or email"
                                    className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === "required" && (
                                        <span className="label-text-alt text-red-500 font-semibold text-base">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </label>
                                <h3 className="text-lg mt-4">
                                    Password{" "}
                                    <span className="text-red-500">*</span>
                                </h3>
                                <div className="relative flex items-center">
                                    <input
                                        type={
                                            showPass === false
                                                ? "password"
                                                : "text"
                                        }
                                        placeholder="Password"
                                        className="px-4 text-lg border-2 border-gray-200 w-full hover:shadow-lg focus:shadow-lg ease-in-out duration-300 rounded-md my-2"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is required",
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
                                </label>
                                {signInError}
                                <input
                                    type="submit"
                                    value="Log in"
                                    className="my-6 py-3 px-6 bg-red-600 rounded-full text-white text-lg font-semibold hover:underline hover:shadow-xl cursor-pointer focus:bg-gray-200"
                                />
                            </form>
                            <div>
                                <Link className="text-red-600 underline hover:no-underline text-lg">
                                    Forgot username
                                </Link>
                                <br />
                                <Link className="text-red-600 underline hover:no-underline text-lg">
                                    Forgot password
                                </Link>
                            </div>
                            <div className="py-8 divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-outline btn-warning w-full"
                            >
                                Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Signup></Signup>
                </div>
            </div>
        </div>
    );
};

export default Signin;
