import React, {useRef, useState} from "react";
import Header from "./Header";
import {checkValidateData} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {auth} from "../utils/firebase";

import {useDispatch} from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [alertMessage, setalertMessage] = useState(null);



  const email = useRef(null);
  const password = useRef(null);
  const flname = useRef(null);

  const handleButtonClick = () => {
    // form data validate

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setalertMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: flname.current.value,
          })
            .then(() => {
              const {uid, email, displayName} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}))
            
            })
            .catch((error) => {
              setalertMessage(error.message);
            });
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setalertMessage(errorCode + " ," + errorMessage);
        });
    } else {
      // sign in login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setalertMessage(errorCode + ", " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="h-screen w-full object-cover absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />

        <div className="absolute mt-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-8">
          <form className="" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-7">
              <h1 className="font-semibold text-4xl text-white">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              <div className="flex flex-col gap-4">
                {!isSignInForm && (
                  <input
                    ref={flname}
                    type="text"
                    placeholder="Name"
                    className="p-3 w-72 text-xl outline-none rounded-md bg-zinc-800 text-gray-300"
                  />
                )}
                <input
                  ref={email}
                  type="text"
                  placeholder="Email"
                  className="p-3 w-72 text-xl outline-none rounded-md bg-zinc-800 text-gray-300"
                />
                <input
                  ref={password}
                  type="text"
                  placeholder="Password"
                  className="p-3 w-72 text-xl outline-none rounded-md bg-zinc-800 text-gray-300"
                />
                <p className="text-red-500 text-lg">{alertMessage}</p>
              </div>
              <button
                className="p-3 w-75 bg-red-600 rounded-md text-xl font-semibold text-white"
                onClick={handleButtonClick}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p
                className="text-lg text-white cursor-pointer"
                onClick={toggleSignIn}
              >
                {isSignInForm
                  ? "New to Netflix? Sign up now."
                  : "Already have an account? Sign In."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
