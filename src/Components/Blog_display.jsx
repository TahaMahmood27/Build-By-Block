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
      <div className="flex align-middle">
        <div className="text-center">Heading</div>
        <div className="align-middle">Brief Description</div>
        <div className="align-middle">Brief Content</div>
      </div>
    </div>
  );
};

export default Blog_display;
