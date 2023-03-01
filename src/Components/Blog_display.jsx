import React from "react";

const Blog_display = (props) => {
  return (
    <div className="flex justify-start mt-6">
      <img
        className="h-[250px] rounded-xl"
        src="./blog.jpeg"
        alt="blog_picture"
      />
      <div className="inline-flex items-center">
        <div className="items-center ml-2">
          <div className="text-4xl">{props.xy.title}</div>
          <div className="">{props.xy.description.substring(0, 500)}</div>
        </div>
      </div>
    </div>
  );
};

export default Blog_display;
