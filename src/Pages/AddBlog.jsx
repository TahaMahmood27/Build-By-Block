import React, { useState } from "react";
import Form_animation from "../Components/Animations/Form_animation";
import Header from "../Components/Header";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [dataList, setDataList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataList([...dataList, { title, subject, description }]);
    setTitle("");
    setSubject("");
    setDescription("");
  };

  return (
    <div>
      <div className="">
        <Header />
        <div className="font-sans">
          <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
            <div className="relative sm:max-w-sm w-full">
              <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
              <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label
                  htmlFor=""
                  className="block text-sm text-gray-700 text-center font-semibold"
                >
                  Fill the Form
                </label>
                <form method="#" action="#" className="mt-10">
                  <div>
                    <input className="focus:outline-none pl-2.5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-gray-200 focus:bg-gray-100 focus:ring-0" />
                  </div>
                  <div className="mt-7">
                    <input
                      type="password"
                      placeholder="Password"
                      className="focus:outline-none pl-2.5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-gray-200 focus:bg-gray-100 focus:ring-0"
                    />
                  </div>
                  <div className="mt-7 flex">
                    <label className="flex justify-start items-start">
                      <div className="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2">
                        <input type="checkbox" className="opacity-0 absolute" />
                        <svg
                          className="fill-current hidden w-3 h-3 text-blue-500 pointer-events-none"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                      </div>
                      <div className="select-none text-sm mt-0.5">Remember</div>
                    </label>
                    <div className="w-full text-right">
                      <a
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-7">
                    <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Login
                    </button>
                  </div>
                  <div className="flex mt-7 items-center text-center">
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                    <label className="block font-medium text-sm text-gray-700 w-full">
                      Login with
                    </label>
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                  </div>
                  <div className="flex mt-7 justify-center w-full">
                    <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Facebook
                    </button>
                    <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Google
                    </button>
                  </div>
                  <div className="mt-7">
                    <div className="flex justify-center items-center">
                      <label className="text-sm text-gray-600">
                        No Account?
                      </label>
                      <a
                        href="#"
                        className=" ml-2 text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                      >
                        Register
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
