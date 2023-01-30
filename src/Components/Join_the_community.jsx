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
      <div className="flex justify-center text-white text-2xl mt-6">
        <div className="Github">
          <div className="text-center text-2xl">Github</div>
          <a href="https://github.com/TahaMahmood27" target="_blank">
            <Github />
          </a>
        </div>
        <div className="Email">
          <div className="text-center">Email</div>
          <a href="mailto:TahaMahmood.Q@gmail.com">
            <Email />
          </a>
        </div>
        <div className="Twitter">
          <div className="text-center">Twitter</div>
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
