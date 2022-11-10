import React from "react";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const Signin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);

  return (
    <div className="bg-gray-100">
      <h2 className="text-start text-xl font-semibold text-gray-500 ml-10 pt-5 pb-3">
        Sign in or create an account
      </h2>
      <hr className="py-6" />
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <div className="text-start bg-white my-8 ml-8 rounded-md">
            <div className="px-5 py-10">
              <h3 className="text-lg">
                Username <span className="text-red-500">*</span>
              </h3>
              <input
                type="text"
                placeholder="Username or email"
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
              <button className="my-10 py-3 px-6 bg-red-600 rounded-full text-white text-lg font-semibold">
                Log in
              </button>
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
