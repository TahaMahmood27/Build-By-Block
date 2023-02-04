import React from "react";

const Justblogdisplay = (props) => {
  return (
    <div>
      <img
        className="w-[100%] rounded-xl mt-8"
        src="./blog.jpeg"
        alt="blog_picture"
      />
      <div className="mt-2">
        <div className="text-2xl">{props.xy.title}</div>
        <div className="text-sm">{props.xy.description.substring(0, 150)}</div>
      </div>
      <div className="flex justify-start h-auto mt-2 ">
        <div className="pt-1">
          <img
            className="w-[35px] h-[35px] rounded-full "
            src="./ceo.jpeg"
            alt="ceo_picture"
          />
        </div>

        <div className=" pl-2 items-center mt-[2px]">
          <div className="text-sm">By: Taha Mahmood</div>
          <div className="text-xs font-light text-black-500">CEO</div>
        </div>
      </div>
    </div>
  );
};

export default Justblogdisplay;
