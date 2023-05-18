import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useCallback } from "react";
import "./BlogPage.css";
import { useParams } from "react-router-dom";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPage = () => {
  const { data, error, isLoading } = useSWR(
    "http://13.54.165.249/api/blog/",
    fetcher
  );

  useEffect(() => {
    if (!data) return;
    const tmpData = data.filter((d) => d.id == blog_ID);
    console.log(tmpData[0]);
    setBlogData(tmpData[0]);
  }, [data]);

  const [blogData, setBlogData] = useState(null);

  const { blog_ID } = useParams();

  return (
    <div>
      <Header />
      <div class="wrapper">
        <div class="scroll-indicator"></div>
        <div class="content-wrapper">
          <div class="content">
            <div class="poster">
              <div class="poster-title">
                <h1> {blogData?.topic_Heading} </h1>
                <div class="line"></div>
              </div>
            </div>

            <div class="words">
              <p>{blogData?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BlogPage;
