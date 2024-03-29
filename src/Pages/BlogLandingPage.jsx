import React from "react";
import BlockChain from "../Components/Animations/BlockChain";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Justblogdisplay from "../Components/Justblogdisplay";
import ClickHere from "../Components/Animations/ClickHere";
import AddBlog from "../Components/Animations/AddBlog";

const JustUI = () => {
  const [blogdatax, setblogdatax] = useState([
    {
      id: null,
      title: "",
      description: "",
    },
  ]);

  function fetchdata() {
    fetch("http://13.54.165.249/api/blog/")
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
        console.log(data);
      });
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="">
      <div className="flex justify-start mt-1">
        <div>
          <div className="flex justify-start  pl-2">
            <img src="./logo.png" className="h-[40px] "></img>
            <div className="text-sm flex items-center font-medium pl-1">
              Build By Block
            </div>
          </div>
        </div>

        <div className="ml-[60%]">
          <div className="flex justify-start  pl-2">
            <img src="./login.svg" className="h-[35px] "></img>
            <div className="text-sm flex items-center font-medium pl-1">
              Sign In
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-start pl-2">
            <img src="./signout.svg" className="h-[35px] "></img>
            <div className="text-sm flex items-center font-medium pl-1">
              Sign Out
            </div>
          </div>
        </div>

        <div className="">
          <Link to="/BuildByBlock/DocumentUploading">
            <div className="flex justify-start pl-3">
              <img src="./blockchain.svg" className="h-[35px]"></img>
              <div className="text-sm flex items-center font-medium pl-1">
                Block-Chain
              </div>
            </div>
          </Link>
        </div>
      </div>
      <hr className="border border-[#d9d9d9] mt-2 w-[95%] ml-[2.5%]"></hr>

      <div className="grid grid-cols-12">
        <div className="col-span-10 mx-[2.5%] pb-12">
          <hr className="border border-[#d9d9d9] mt-6 w-[100%]"></hr>
          <div className="text-4xl font-medium mt-8">Build By Block</div>
          <div className="text-md">
            Build By Block is used to eliminate the problem of fraudulent
            documents using blockchain. It is a web based solution where users
            can upload their documents and their documents are verified and put
            on BlockChain. This Web-App also provides the facilty of blogging
            and news for convienence of users.
          </div>
          <BlockChain />
          <div className="text-3xl font-medium mt-8 drop-shadow-2xl shadow-black">
            Top Match For You
          </div>
          <div className="flex justify-start gap-2 mt-1 ">
            <div className="h-auto text-white text-md border border-[#d9d9d9] rounded-full px-4 bg-black ">
              Design
            </div>
            <div className="h-auto text-md border border-[#d9d9d9] rounded-full px-4">
              Technology
            </div>
            <div className="h-auto text-md border border-[#d9d9d9] rounded-full px-4">
              Programming
            </div>
            <div className="h-auto text-md border border-[#d9d9d9] rounded-full px-4">
              Metaverse
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {blogdatax.map((zy) => (
              <Link to={`/BuildByBlock/BlogPage/${zy.id}`}>
                <Justblogdisplay xy={zy} key={zy.id} />
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-2 border-l border-[#d9d9d9]">
          <div className="flex justify-start h-auto mt-2 mx-2 ">
            <div className="pt-1">
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

          <div className="mt-10 mx-2">
            <Link to="/BuildByBlock/DocumentUploading">
              <button>
                <ClickHere />
                <div className="font-medium mt-[-20px]">
                  Click HERE If You Want To Use Our BlockChain Facility!!
                </div>
              </button>
            </Link>
          </div>
          <hr className="mt-4 mx-2 "></hr>
          <div className="mt-6 mx-2">
            <p className="font-medium text-lg ">Want To Add Blog Click Here</p>
            <Link to="/BuildByBlock/AddBlog">
              <AddBlog />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer ">
        <Footer />
      </div>
    </div>
  );
};

export default JustUI;
