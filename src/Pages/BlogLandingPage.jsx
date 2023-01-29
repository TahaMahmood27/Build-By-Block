import React from "react";
import BlockChain from "../Components/Animations/BlockChain";
import Blog_display from "../Components/Blog_display";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useEffect } from "react";
import { useState } from "react";

const Blogpage = () => {
  const [blogdatax, setblogdatax] = useState([
    {
      id: null,
      title: "",
      description: "",
    },
  ]);

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);
  function fetchdata() {
    fetch("http://127.0.0.1:8000/api/Blog/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const blogdata = data.map((data_x) => {
          return {
            id: data_x.id,
            title: data_x.topic_Heading,
            description: data_x.description,
          };
        });
        setblogdatax(blogdata);
        // console.log(blogdatax[0].title);
      });
  }

  return (
    <div className="bg-[#E6E7ED]">
      <Header />
      <div className="mx-[5%] ">
        <div className="Main Heading and Search grid grid-cols-10">
          <div className="Heading col-span-8 text-3xl font-bold">
            Latest Blogs and News
          </div>
          <input
            type="text"
            placeholder="Search.."
            className="Search_bar col-span-2 rounded-md pl-4 mt-1"
          ></input>
        </div>
        <div className="Main_Section  mt-4">
          <BlockChain />
          <div className="text-3xl font-semibold">Build By Block</div>
          <div className="">
            Build By Block is used to eliminate the problem of fraudulent
            documents using blockchain. It is a web based solution where users
            can upload their documents and their documents are verified and put
            on BlockChain. This Web-App also provides the facilty of blogging
            and news for convienence of users.
          </div>
          <div className="flex justify-start h-auto">
            <div className="pt-[10px]">
              <img
                className="w-[40px] h-[40px] rounded-full "
                src="./ceo.jpeg"
                alt="ceo_picture"
              />
            </div>

            <div className=" pl-2">
              <div className="">Taha Mahmood</div>
              <div className="text-xs font-light text-black-500">CEO</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-10">
          <div className="col-span-8">
            {blogdatax.map((zy) => (
              <Blog_display xy={zy} key={zy.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Blogpage;
