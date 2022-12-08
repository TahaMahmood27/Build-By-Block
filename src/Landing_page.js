import React from "react";
import Animation from "./Animation";

const Landing_page = () => {
  return (
    <div className="bg-background_2 scrollbar scrollbar-thumb-black scrollbar-track-white">
      <div className="relative overflow-hidden">
        <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r -top-[250px] -right-[250px] w-[700px] h-[700px] rounded-full"></div>
        <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r top-[800px] left-[350px] w-[200px] h-[200px] rounded-full"></div>
        <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r top-[400px] -left-[100px] w-[300px] h-[300px] rounded-full"></div>

        <div className="header h-10 text-white flex justify-center">
          <div className="flex pt-1 gap-x-10">
            <a href="#top">Home</a>
            <a href="https://www.google.com" className="">
              Our Products
            </a>
            <a href="www.google.com" className="">
              How it works
            </a>
            <a href="www.google.com">Contact us</a>
          </div>
        </div>

        <div className="Main_Section grid grid-cols-2 pl-3">
          <div className="Left_Part pl-3">
            <div className="pt-[250px] text-[#E2E6FA] text-8xl">
              Build By Block
            </div>
            <div className="text-3xl text-[#E4EFFC]">
              BlockChain Web-app For Real Estate
            </div>
            <div className="text-lg text-[#A5AAB9]">
              It was always the Monday mornings. It never seemed to happen on
              Tuesday morning, Wednesday morning, or any other morning during
              the week.
            </div>
            <div className="button text-white">
              <button className="border-2 border-white rounded-xl pt-1 p-2 text-3xl">
                Sign Up
              </button>
              <button className="border-2 border-white mx-1 rounded-xl pt-1 p-2 text-3xl">
                Sign In
              </button>
              <button className="border-2 border-white rounded-xl pt-1 p-2 text-3xl">
                Vision
              </button>
            </div>
          </div>
          <div className="Right_Part">
            <div className="relative w-[700px] -top-[30px]">
              <Animation />
            </div>
          </div>
        </div>
        <div className="Rectangle">
          <div className="outer_rectangle ml-[15%] w-[70%] text-sm  bg-[#3E3C3C]/[10%] text-white mt-[30px] rounded-xl">
            <div className="inner_rectangle pt-7 pb-7 flex justify-between ml-[8%] mr-[8%]">
              <div className="individual_rectangle w-[20%] bg-[#3E3C3C] rounded-xl ">
                <div className="pt-6 pb-2 flex justify-center">
                  <img src="blockchain-icon.svg" className="w-[80%] h-12"></img>
                </div>
                <div>
                  <div className="flex text-center pb-8">
                    SMART CONTRACT FOR REALSTATE
                  </div>
                </div>
              </div>

              <div className="individual_rectangle w-[20%] bg-[#3E3C3C] rounded-xl ">
                <div className="pt-6 pb-2 flex justify-center">
                  <img src="24_hrs.svg" className="w-[80%] h-12"></img>
                </div>
                <div className="flex justify-center">
                  <div>24/7 AVAILIBILITY</div>
                </div>
              </div>

              <div className="individual_rectangle w-[20%] bg-[#3E3C3C] rounded-xl ">
                <div className="pt-6 pb-2 flex justify-center">
                  <img
                    src="decentralized.svg"
                    className="w-[80%] h-12 flex justify-center"
                  ></img>
                </div>

                <div className="flex text-center">DECENTRALIZED NETWORK</div>
              </div>

              <div className="individual_rectangle w-[20%] bg-[#3E3C3C] rounded-xl ">
                <div className="pt-6 pb-2 flex justify-center">
                  <img
                    src="blog-icon.svg"
                    className="w-[80%] h-12 flex justify-center"
                  ></img>
                </div>
                <div className="flex justify-center">
                  <div className="flex">BLOGGING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_page;
