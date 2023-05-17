import React from "react";
import Email from "./Animations/Email";
import Github from "./Animations/Github";
import Twitter from "./Animations/Twitter";
const Join_the_community = () => {
  return (
    <div className="Jointhecommunity">
      <div className="text-[#A5AAB9] text-center pl-3 text-5xl mt-24">
        Join The Community
      </div>
      <div className="flex justify-center text-white text-2xl mt-6 ml-[70px]">
        <div className="Github">
          <div className="flex justify-center">
            <a
              href="https://github.com/TahaMahmood27"
              className="ml-8"
              target="_blank"
            >
              <Github />
            </a>
          </div>
        </div>
        <div className="Email">
          <a href="mailto:TahaMahmood.Q@gmail.com">
            <Email />
          </a>
        </div>
        <div className="Twitter">
          <a
            className="overflow-hidden"
            href="https://twitter.com/TahaMahmood27"
            target="_blank"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Join_the_community;
