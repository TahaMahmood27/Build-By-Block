import React from "react";
import Css_logo from "./Animations/Css_logo";
import Etheruem from "./Animations/Etheruem";

import Html5 from "./Animations/Html5";
import React_logo from "./Animations/React_logo";
const Technologies = () => {
  return (
    <div className="overflow-hidden">
      <div className="text-[#A5AAB9] text-center pl-3 text-5xl mt-24">
        Technologies Used
      </div>
      <div className="grid grid-cols-4 ">
        <div className="">
          <div className="h-auto">
            <Html5 />
          </div>
        </div>
        <div className="">
          <Etheruem />
        </div>
        <div className="">
          <React_logo />
        </div>
        <div className="">
          <Css_logo />
        </div>
      </div>
    </div>
  );
};
export default Technologies;
