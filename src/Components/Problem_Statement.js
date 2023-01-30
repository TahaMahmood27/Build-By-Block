import React from "react";

import AnimationPage from "./Animations/AnimationPage";
const Problem_Statement = () => {
  return (
    <div id="ProblemStatement">
      <div className="text-[#A5AAB9] text-center pl-3 text-5xl mt-24">
        Problem Statement
      </div>

      <div className=" pl-5 grid grid-cols-2 mt-4 text-[#A5AAB9] text-lg mx-[10%] w-[80%] items-center  bg-gradient-to-tr from-[#2944AB] to-[#0A0F2D] bg-gradient-to-r rounded-2xl ">
        <div className="h-min">
          <p>
            Being the 6th largest country in terms of population. Pakistan lacks
            a basic online structure for land records and data manage- ment. Out
            of four provinces, namely Sindh, Punjab, Baluchistan and Kpk only
            punjab land ownership data is stored online. Land Ownership
            certificates can be easily faked and made fraudulent. The concept of
            fake documents is not understandable to a layman and there is no
            proper channel to verify these certificates
          </p>
        </div>
        <div className="relative -top-24">
          <AnimationPage />
        </div>
      </div>
    </div>
  );
};

export default Problem_Statement;
