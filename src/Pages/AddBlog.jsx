import React, { useState, useRef } from "react";
import Header from "../Components/Header";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [dataList, setDataList] = useState([]);

  let postData = async (event) => {
    event.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/Blog/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic_Heading: title,
        description: description,
        auther: 3,
      }),
    });
  };

  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <Header />
        <div className="font-sans mt-12">
          <div className="relative mt-8 flex flex-col sm:justify-center items-center ">
            <div className="relative w-[600px]">
              <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
              <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label
                  htmlFor=""
                  className="block text-lg text-gray-700 text-center font-semibold"
                >
                  Fill the Form
                </label>
                <form method="#" action="#" className="mt-10">
                  <div>
                    <input
                      value={title}
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                      placeholder="Title"
                      className="focus:outline-none pl-2.5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-gray-200 focus:bg-gray-100 focus:ring-0"
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      value={subject}
                      onChange={(event) => {
                        setSubject(event.target.value);
                      }}
                      placeholder="Subject"
                      className="focus:outline-none pl-2.5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-gray-200 focus:bg-gray-100 focus:ring-0"
                    />
                  </div>
                  <div className="mt-7">
                    <textarea
                      value={description}
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                      placeholder="Description"
                      className="focus:outline-none pt-2 pl-2.5 mt-1 block w-full border-none bg-gray-100 h-36 rounded-xl shadow-lg hover:bg-gray-200 focus:bg-gray-100 focus:ring-0"
                    />
                  </div>

                  <div className="mt-7">
                    <button
                      onClick={postData}
                      className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="flex mt-7 items-center text-center">
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                    <label className="block font-medium text-sm text-gray-700 w-full">
                      Thank You
                    </label>
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
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
