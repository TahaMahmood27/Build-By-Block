import React from "react";
import Join_the_community from "../Components/Join_the_community.jsx";
import Problem_Statement from "../Components/Problem_Statement";
import Technologies from "../Components/Technologies.jsx";
import LandingPageAnimation from "../Components/Animations/LandingPageAnimation.js";
import { Link } from "react-router-dom";
const Landing_page = () => {
  return (
    <div className="bg-background_2 scrollbar scrollbar-thumb-black scrollbar-track-white">
      <div className="Mainrelative overflow-hidden">
        <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r -top-[250px] -right-[250px] w-[700px] h-[700px] rounded-full z-0"></div>
        <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r top-[800px] left-[350px] w-[200px] h-[200px] rounded-full z-10"></div>
        <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r top-[550px] -left-[100px] w-[300px] h-[300px] rounded-full z-10"></div>

        <div className="header h-10 text-white flex justify-center">
          <div className="flex pt-1 gap-x-10 z-[50]">
            <Link to="/Account_Page">Log In</Link>
            <a href="#ProblemStatement">Problem Statement</a>
            <a href="#TechnologiesUsed">Technologies Used</a>
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
              A Web Based Solution, Based on Blockchain to eliminate the problem
              of fradulant land ownership certificates in Pakistan.
            </div>
            <div className="button text-white mt-5 z-20">
              <a href="./Registration_Page " className="z-20">
                <Link
                  to="/Account_Page"
                  className="border-2 border-white rounded-xl pt-1 p-2 text-xl z-20"
                >
                  Sign Up
                </Link>
              </a>
              <Link
                to="/Account_Page"
                className="border-2 border-white mx-1 rounded-xl pt-1 p-2 text-xl"
              >
                Sign In
              </Link>
            </div>
          </div>
          <div className="Right_Part">
            <div className="relative w-[700px] -top-[30px]">
              <LandingPageAnimation />
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
      <Problem_Statement />
      <Technologies />
      <Join_the_community />
      <div className="footer">
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="./logo.png"
                  className="mr-3 h-14"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  BuildByBlock
                </span>
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                BuildByBlock™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://twitter.com/TahaMahmood27"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="https://github.com/TahaMahmood27"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing_page;
