import React from "react";
import { useState } from "react";
import Login from "./Components/Login";
import Sign_up from "./Components/Sign_up";

const Registration_Page = () => {
  const [login_state, setlogin_state] = useState(true);

  const change_login_state = (event) => {
    event.preventDefault();
    if (login_state === true) {
      setlogin_state(false);
    } else if (login_state === false) {
      setlogin_state(true);
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
              {login_state ? <Login /> : <Sign_up />}
            </form>
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
                type="button"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={change_login_state}
              >
                {login_state ? "Login" : "Sign UP"}{" "}
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default Registration_Page;
