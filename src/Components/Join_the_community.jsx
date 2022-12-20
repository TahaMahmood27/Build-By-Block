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
      <div className="flex justify-center text-white">
        <div className="Github pl-[300px]">
          <div className="pl-[3rem] text-xl">Github</div>
          <div className="pt-12">
            <Github />
          </div>
        </div>
        <div className="Email absolute pl-[200px]">
          <div className="pl-[7rem] text-xl">Email</div>
          <div>
            <Email />
          </div>
        </div>
        <div className="Twitter">
          <div>Twitter</div>
          <div>
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Join_the_community;
