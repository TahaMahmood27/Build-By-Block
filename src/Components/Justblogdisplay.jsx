import React from "react";
import { useEffect } from "react";
import { listAll } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { ref } from "firebase/storage";

const Justblogdisplay = (props) => {
  const [imageUrls, setImageUrls] = React.useState([]);

  useEffect(() => {
    listAll(ref(storage, "images/")).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(url);
          console.log(url);
        });
      });
    });
  }, []);
  return (
    <div>
      <img
        className="w-[100%] rounded-xl mt-8"
        src="./blog.jpeg"
        alt="blog_picture"
      />
      <div className="mt-2">
        <div className="text-2xl h-16  overflow-hidden">{props.xy.title}</div>
        <hr className="border border-[#d9d9d9] mt-2"></hr>
        <div className="text-sm h-[60px]  overflow-hidden">
          {props.xy.description.substring(0, 200)}
        </div>
        <hr className="border border-[#d9d9d9] mt-2"></hr>
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
