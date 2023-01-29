import React, { useEffect, useRef, useState } from "react";
import { redirect } from "react-router-dom";

import Sign_up from "../Components/Sign_up";
import jwt_decode from "jwt-decode";
import { Private_Route } from "../Components/Private_Route";

const Registration_Page = (props) => {
  const [login_state, setlogin_state] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();
  let change_login_state = async (event) => {
    event.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      console.log(jwt_decode(data.access));
      redirect("/BuildByBlock");
      localStorage.setItem("authTokens", "true");

      props.xy(true);
    } else {
      console.log("Taha");
    }
  };
  return (
    <section className="h-screen bg-bue">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div className="flex items-center my-2 before:flex-1 before:border-t before:border-black before:mt-0.5 after:flex-1 after:border-t after:border-black after:mt-0.5"></div>

              <div className="">
                <div className="Sign_in grid text-2xl text-black text-center mb-2">
                  Sign In
                </div>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    ref={usernameRef}
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="username"
                    id="username"
                    placeholder="Email address"
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-gray-800">
                  Forgot password?
                </a>
              </div>
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={change_login_state}
                >
                  {"Login"}
                  {/* {login_state ? "Login" : "Sign UP"}{" "} */}
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  {login_state
                    ? "Don't have an account"
                    : "Already have an account"}{" "}
                  <a
                    href="#!"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    onClick={change_login_state}
                  >
                    {login_state ? "Register" : "Sign In"}{" "}
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Registration_Page;
