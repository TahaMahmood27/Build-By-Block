import React from "react";

const Blog_page = () => {
  return (
    <html className="bg-[#E6E7ED] h-screen">
      <div className="navbar bg-white grid grid-cols-10 h-[50px] rounded-md">
        <div className="logo col-span-2 pl-4">logo</div>
        <div className="Name-Column col-span-5 border-x-[0.1rem] ">
          <div className="text-xs mt-1 ml-2">Hi Taha</div>
          <div className="text-md ml-2">Welcome Back,</div>
        </div>
        <div className="Account_id  col-span-3"></div>
      </div>
      <body className="mx-[5%] mt-[10rem]">
        <div className="Main Heading and Search grid grid-cols-10">
          <div className="Heading col-span-8 text-3xl font-bold">
            Latest Blogs and News
          </div>
          <input
            type="text"
            placeholder="Search.."
            className="Search_bar col-span-2 rounded-md pl-4"
          ></input>
        </div>
      </body>
    </html>
  );
};

export default Blog_page;
