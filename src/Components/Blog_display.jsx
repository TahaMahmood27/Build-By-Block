import React from "react";

const Blog_display = () => {
  return (
    <div className="flex justify-start mt-6">
      <div className="">
        <img
          className="h-[250px] rounded-xl "
          src="./blog.jpeg"
          alt="blog_picture"
        />
      </div>
      <div className="flex flex-col items-center">
        <div>Heading</div>
        <div>Brief Description</div>
        <div>Brief Content</div>
      </div>
    </div>
  );
};

export default Blog_display;
