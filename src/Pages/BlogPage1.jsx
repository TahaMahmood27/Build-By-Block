import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const BlogPage1 = () => {
  const { data, error, isLoading } = useSWR(
    "http://13.54.165.249/api/blog/",
    fetcher
  );

  useEffect(() => {
    if (!data) return;
    const tmpData = data.filter((d) => d.id == blog_ID);
    setBlogData(tmpData[0]);
    console.log(tmpData[0]);
  }, [data]);

  const [blogData, setBlogData] = useState(null);

  const { blog_ID } = useParams();
  return (
    <div>
      <Header />
      <div className="wrapper"></div>
      <Footer />
    </div>
  );
};

export default BlogPage1;
