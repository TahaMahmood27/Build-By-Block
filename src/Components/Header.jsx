import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import Dropdown from "./Dropdown";
const Header = () => {
  const [showdropdown, setshowdropdown] = useState(false);
  const preventhanlder = (event) => {
    setshowdropdown(true);
    if (showdropdown === true) {
      setshowdropdown(false);
    }
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="  w-[100%] z-10 bg-white grid grid-cols-10 h-[50px] ">
        <div className="logo col-span-2 pl-4">
          <Link to="/BuildByBlock">
            <img src="/Logo.png" className="h-[50px]"></img>
          </Link>
        </div>
        <div className="Name-Column col-span-5 border-x-[0.1rem] ">
          <div className="text-xs mt-1 ml-2">Hi Taha</div>
          <div className="text-md ml-2">Welcome Back,</div>
        </div>
        <div className="Dropdown col-span-3 relative">
          <div className="flex justify-end">
            <button onClick={preventhanlder}>
              <img src="/arrow.svg" className="h-8"></img>
            </button>
            {showdropdown && <Dropdown />}
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
export default Header;
