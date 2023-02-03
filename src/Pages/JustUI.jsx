import React from "react";
import BlockChain from "../Components/Animations/BlockChain";

const JustUI = () => {
  return (
    <div className="">
      <div className="grid grid-cols-10 mx-[2.5%]">
        <div className="col-span-8 ">
          <input
            type="text"
            placeholder="Search.."
            className="Search_bar col-span-2 rounded-full h-[50px] w-[300px] pl-6 ml-8 mt-8 border border-[#d9d9d9]"
          ></input>
          <hr className="border border-[#d9d9d9] mt-6 w-[97.5%]"></hr>
          <div className="text-4xl font-medium mt-8">Build By Block</div>
          <div className="text-md">
            Build By Block is used to eliminate the problem of fraudulent
            documents using blockchain. It is a web based solution where users
            can upload their documents and their documents are verified and put
            on BlockChain. This Web-App also provides the facilty of blogging
            and news for convienence of users.
          </div>
          <BlockChain />
          <div className="text-3xl font-medium mt-8 drop-shadow-2xl shadow-black">
            Top Match For You
          </div>
          <div className="flex justify-start gap-2 mt-1 ">
            <div className="h-auto text-white text-md border border-[#d9d9d9] rounded-full px-4 bg-black ">
              Design
            </div>
            <div className="h-auto text-md border border-[#d9d9d9] rounded-full px-4">
              Technology
            </div>
            <div className="h-auto text-md border border-[#d9d9d9] rounded-full px-4">
              Programming
            </div>
            <div className="h-auto text-md border border-[#d9d9d9] rounded-full px-4">
              Metaverse
            </div>
          </div>
        </div>
        <div className="col-span-2 border-l h-screen border-[#d9d9d9]">
          Taha
        </div>
      </div>
    </div>
  );
};

export default JustUI;
