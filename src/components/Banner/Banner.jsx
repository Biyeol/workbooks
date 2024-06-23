import React from "react";
import PoseterImg from "../../assets/혹성탈출.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiArmchairFill } from "react-icons/pi";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="min-h-[700px] bg-gray-100">
        <div className="min-h-[800px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={PoseterImg}
                  alt="biryani img"
                  className="max-w-[450px] h-[650px] w-full drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover mb-6"
                />
                <div>
                  <p>
                    <button className="text-2xl h-20 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10 mr-10">
                      상세 정보
                    </button>

                    <button className="text-2xl h-20 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      예 매
                    </button>
                  </p>
                </div>
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="h-[80px] text-2xl sm:text-4xl font-bold"
                >
                  # 절찬 상영 중!
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-1xl text-gray-500 tracking-wide leading-8"
                >
                  <p className="mb-4">
                    인류의 시대는 끝났고, 세상의 주인이 바뀌었다!
                  </p>
                  <p className="mb-4">
                    진화한 유인원과 퇴화된 인간들이 살아가는 땅. 유인원 리더
                    '프록시무스'는 완전한 군림을 위해 인간들을 사냥하며 자신의
                    제국을 건설한다.
                  </p>
                  <p>
                    한편, 또 다른 유인원 '노아'는 우연히 숨겨진 과거의 이야기와
                    ‘시저’의 가르침을 듣게 되고 인간과 유인원이 함께 할 새로운
                    세상을 꿈꾼다. 어느 날 그의 앞에 나타난 의문의 한 인간 소녀.
                    ‘노아’는 그녀와 함께 자유를 향한 여정을 시작하게 되는데…
                  </p>
                  <br />
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <BiSolidCameraMovie className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p className="text-1xl">3DX</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <PiArmchairFill className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p className="text-1xl">1인 좌석</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
