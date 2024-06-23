import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/인사이드아웃2.jpg";
import Img2 from "../../assets/places/탈주.jpg";
import Img3 from "../../assets/places/핸섬가이즈.jpg";
import Img4 from "../../assets/places/아바타2.jpg";
import Img5 from "../../assets/places/범죄도시4.jpg";
import Img6 from "../../assets/places/콰이어트.jpg";

const PlacesData = [
  {
    img: Img1,
    rank: 1,
    title: "인사이트 아웃2",
    Reservation_rate: "예매율 46.2%",
    description: "2024.06.12 개봉",
  },
  {
    img: Img2,
    rank: 2,
    title: "탈주",
    Reservation_rate: "예매율 6.2 %",
    description: "2024.07.03 개봉",
  },
  {
    img: Img3,
    rank: 3,
    title: "핸섬가이즈",
    Reservation_rate: "예매율 4.9%",
    description: "2024.06.26 개봉",
  },
  {
    img: Img4,
    rank: 4,
    title: "아바타-물의 길",
    Reservation_rate: "예매율 2.2%",
    description: "2022.12.14 재개봉",
  },
  {
    img: Img5,
    rank: 5,
    title: "범죄도시4",
    Reservation_rate: "예매율 1.7%",
    description: "2024.04.24 개봉",
  },
  {
    img: Img6,
    rank: 6,
    title: "콰어어트 플레이스-첫째 날",
    Reservation_rate: "예매율 1.0%",
    description: "2024.06.26 개봉",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            박스오피스
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
