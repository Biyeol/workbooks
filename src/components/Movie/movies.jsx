import React from "react";
import Img1 from "../../assets/places/인사이드아웃2.jpg";
import MovieCard from "./movieCard";

const MovieData = [
  {
    img: Img1,
    title: "인사이드 아웃2",
    title_en: "inside out2",
    Reservation_rate: "예매율 46.2%",
    date: "2024.06.12 개봉",
    film_director: "켈시 만",
    actor: "에이미 포엘러, 마야 호크, 루이스 블랙, 필리스 스미스, 토니 헤일",
    information: "전체관람가, 96분, 미국",
    type: "애니메이션",
  },
];

const movies = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="mt-20 mb-5 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            영 화
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {MovieData.map((item) => (
              <MovieCard key={item} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default movies;
