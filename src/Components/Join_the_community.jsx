import React from "react";
import Email from "./Animations/Email";
import Github from "./Animations/Github";
import Twitter from "./Animations/Twitter";
const Join_the_community = () => {
  return (
    <div className=" grid grid-cols-3">
      <div className="Github">
        <div>Github</div>
        <div>
          <Github />
        </div>
      </div>
      <div className="Email">
        <div>Email</div>
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
  );
};
export default Join_the_community;
