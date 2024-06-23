import React from "react";

const movieCard = ({
  img,
  title,
  title_en,
  Reservation_rate,
  film_director,
  actor,
  type,
  information,
  date,
}) => {
  return (
    <>
      <div className=" w-[1350px] h-[1100px]">
        <p className="flex overflow-hidden relative">
          <img
            src={img}
            alt="No image"
            className="h-[320px] w-[250px]  cursor-pointer"
          />

          <div className="ml-4 flex-1">
            <h1 className="line-clamp-1 font-bold text-2xl">{title}</h1>
            <div className="flex items opacity-100">
              <span>
                {title_en}
                <p className="mt-7 text-1xl">{Reservation_rate}</p>
                <span className="flex border-t-2 border-black"></span>
                <p className="mt-4 line-clamp-2">
                  감독: {film_director} / 배우: {actor}
                </p>
                <p className="line-clamp-3">
                  장르: {type} / 기본 정보: {information}
                </p>
                <p className="line-clamp-4">개봉: {date}</p>
                <button className="flex flex-col mt-[80px] ml-1 bg-red-300 text-lg font-bold py-2 px-5 rounded">
                  예매하기
                </button>
              </span>
            </div>
          </div>
        </p>

        <div className="mt-[220px]  h-[500px] w-full">
          <div className=" text-1xl">
            디즈니·픽사의 대표작 인사이드 아웃!
            <br />
            새로운 감정과 함께 돌아오다!
            <p className="mt-10">
              13살이 된 라일리의 행복을 위해
              <br />
              매일 바쁘게 머릿속 감정 컨트롤 본부를 운영하는 <br />
              ‘기쁨’, ‘슬픔’, ‘버럭’, ‘까칠’, ‘소심’.
            </p>
            <p className="mt-10">
              그러던 어느 날, <br />
              낯선 감정인 ‘불안’, ‘당황’, ‘따분’, ‘부럽’이가 본부에 등장하고,{" "}
              <br />
              언제나 최악의 상황을 대비하며 <br />
              제멋대로인 ‘불안’이와 기존 감정들은 계속 충돌한다.
            </p>
            <p className="mt-10">
              결국 새로운 감정들에 의해 본부에서 쫓겨나게 된 기존 감정들은{" "}
              <br />
              다시 본부로 돌아가기 위해 위험천만한 모험을 시작하는데…
            </p>
            <p className="mt-10">
              2024년, 전 세계를 공감으로 물들인 유쾌한 상상이 다시 시작된다!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default movieCard;
