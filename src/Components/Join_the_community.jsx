import React from "react";
import Email from "./Animations/Email";
import Github from "./Animations/Github";
import Twitter from "./Animations/Twitter";
const Join_the_community = () => {
  return (
    <div>
      <div className="text-[#A5AAB9] text-center pl-3 text-5xl mt-24">
        Join The Community
      </div>
      <div className="flex justify-center text-white text-2xl">
        <div className="Github">
          <div className="text-center text-2xl">Github</div>
          <div className="">
            <Github />
          </div>
        </div>
        <div className="Email">
          <div className="text-center">Email</div>
          <div>
            <Email />
          </div>
        </div>
        <div className="Twitter">
          <div className="text-center">Twitter</div>
          <div className="overflow-hidden">
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Join_the_community;
