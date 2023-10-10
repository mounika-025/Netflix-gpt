import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";

import { BACKGROUND_IMG_URL } from "../utils/constants";
import { checkValidation } from "../utils/validateForm";

const Login = () => {
  const [isSignIn, SetIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState();

  const name = useRef(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validating the form
    const message = checkValidation(
      email.current.value,
      password.current.value,
      name.current?.value || ""
    );

    setErrMessage(message);
    if (message) return;

    //sign in/sign up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage + "-" + errorCode);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignInForm = () => {
    SetIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="min-h-screen bg-cover"
          src={BACKGROUND_IMG_URL}
          alt="bg-logo"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="  w-full min-h-50 absolute p-12 md:w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70 bg-black "
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-6 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="p-4 my-6 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-6 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold py-2">{errMessage}</p>

          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={handleSignInForm}>
            {isSignIn
              ? "New to Netflix ? Sign up now"
              : "Already registered? Sign in now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
