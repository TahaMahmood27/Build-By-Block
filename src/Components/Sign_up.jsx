import React from "react";

const Sign_up = () => {
  return (
    <div className="">
      <div className="Sign_in grid text-2xl text-gray-700 text-center">
        Registration Form
      </div>
      {/* Email input */}
      <div className="mb-6">
        <div className="flex justify-center mb-4 mt-2">
          <input
            type="text"
            className="form-control block w-[47.5%] mr-[5%] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="First Name"
          />
          <input
            type="text"
            className="form-control block w-[47.5%] px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Last Name"
          />
        </div>
        {/* Password input */}

        <input
          type="password"
          className="form-control mb-4 after:block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Email Address"
        />
        <input
          type="password"
          className="form-control mb-4 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Password"
        />
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Confirm Password"
        />
      </div>
    </div>
  );
};
export default Sign_up;
