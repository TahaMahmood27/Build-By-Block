import React from "react";
import BlockChain from "./Components/Animations/BlockChain";

const Blogpage = () => {
  return (
    <div className="bg-[#E6E7ED] h-screen">
      <div className="navbar bg-white grid grid-cols-10 h-[50px] rounded-md">
        <div className="logo col-span-2 pl-4">logo</div>
        <div className="Name-Column col-span-5 border-x-[0.1rem] ">
          <div className="text-xs mt-1 ml-2">Hi Taha</div>
          <div className="text-md ml-2">Welcome Back,</div>
        </div>
        <div className="Account_id  col-span-3"></div>
      </div>
      <div className="mx-[5%] mt-[8rem]">
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
        <div className="Main_Section grid grid-cols-11 mt-12">
          <div className="col-span-5">
            <BlockChain />
            <div className="text-3xl font-semibold">Build By Block</div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur obcaecati rerum porro nemo non? Odio possimus fugit
              facere sunt eum provident consequatur
            </div>
            <div className="flex justify-start h-auto">
              <div className="pt-[10px]">
                <img
                  className="w-[40px] h-[40px] rounded-full "
                  src="./ceo.jpeg"
                  alt="ceo_picture"
                />
              </div>

              <div className="border-blue pl-2">
                <div className="">Taha Mahmood</div>
                <div className="text-xs font-light text-black-500">CEO</div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-5">
            <img className="rounded-lg" src="ad.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
