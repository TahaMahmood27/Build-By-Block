import React from "react";

const Login = () => {
  return (
    <div className="">
      <div className="Sign_in grid text-2xl text-black text-center mb-2">
        Sign In
      </div>
      {/* Email input */}
      <div className="mb-6">
        <input
          type="email"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Email address"
        />
      </div>
      {/* Password input */}
      <div className="mb-6">
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Password"
        />
      </div>
    </div>
  );
};
export default Login;
