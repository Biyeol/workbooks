import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            그 외
          </h1>
          <p>좋은 관람 되시길 바라겠습니다</p>
          <br />
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
