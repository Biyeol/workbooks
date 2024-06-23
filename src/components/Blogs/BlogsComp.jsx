import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/탈주.jpg";
import Img2 from "../../assets/places/아바타2.jpg";
import Img3 from "../../assets/places/범죄도시4.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    texted: "탈주",
    title: "예매율 6.2%",
    description: "너무 스릴넘치고 재미있었습니다",
    author: "전",
    date: "2024.07.03 개봉",
  },
  {
    id: 1,
    image: Img2,
    texted: "아바타-물의 길",
    title: "예매율 2.2%",
    description: "아바타의 멋진 풍경을 보면서 스릴을 즐길 수 있었습니다",
    author: "전",
    date: "2022.12.14 재개봉",
  },
  {
    id: 1,
    image: Img3,
    texted: "범죄도시4",
    title: "예매율 1.7%",
    description: "전개가 빨라서 시간가는 줄 몰랐고 너무 재미있습니다",
    author: "전",
    date: "2024.04.24 개봉",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            영화포스트
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
