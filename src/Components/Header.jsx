import React from "react";
const Header = () => {
  return (
    <div>
      <div className="navbar fixed w-[100%] top-0 bg-white grid grid-cols-10 h-[50px] ">
        <div className="logo col-span-2 pl-4">logo</div>
        <div className="Name-Column col-span-5 border-x-[0.1rem] ">
          <div className="text-xs mt-1 ml-2">Hi Taha</div>
          <div className="text-md ml-2">Welcome Back,</div>
        </div>
        <div className="Account_id  col-span-3"></div>
      </div>
    </div>
  );
};
export default Header;
