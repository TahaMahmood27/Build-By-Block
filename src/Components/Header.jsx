import React from "react";
import Dropdown from "./Dropdown";
const Header = () => {
  var x = false;
  const preventhanlder = (event) => {
    event.preventDefault();
    if (x === false) {
      x = true;
    } else {
      x = false;
      return x;
    }
  };
  console.log(x);
  return (
    <div className="sticky top-0 z-10">
      <div className="  w-[100%] z-10 bg-white grid grid-cols-10 h-[50px] ">
        <div className="logo col-span-2 pl-4">logo</div>
        <div className="Name-Column col-span-5 border-x-[0.1rem] ">
          <div className="text-xs mt-1 ml-2">Hi Taha</div>
          <div className="text-md ml-2">Welcome Back,</div>
        </div>
        <div className="Dropdown  col-span-3 relative">
          <div className="">
            <button onClick={preventhanlder}>Logo</button>
            {x && <Dropdown />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
