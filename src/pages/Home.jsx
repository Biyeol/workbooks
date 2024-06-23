import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/핸섬가이즈.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/movie1.jpg";
import Banner2 from "../assets/movie2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import("tailwindcss").Config;

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div className="w-full h-[105px] bg-red-600"></div>
      <div>
        <div className="relative h-[498px] bg-black">
          <div className="w-[980px] h-full mx-auto my-0">
            <div className="w-full h-full">
              <video
                autoPlay
                muted
                loop
                className="relative w-full h-full transform scale-1.35 z-0"
              >
                <source src={NatureVid} type="video/mp4" />이 브라우저는
                Video태그를 지원하지 않습니다
              </video>
            </div>
          </div>
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
