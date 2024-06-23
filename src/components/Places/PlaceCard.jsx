import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = ({
  img,
  title,
  Reservation_rate,
  description,
  handleOrderPopup,
  rank,
}) => {
  return (
    <>
      <Link
        to={`/movie`}
        onClick={({}) => {
          window.scrollTo(0, 0);
        }}
      >
        <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white ">
          <div className="overflow-hidden relative">
            <img
              src={img}
              alt="No image"
              className="mx-auto h-auto w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 text-white font-bold py-2 px-4 rounded-full text-7xl italic">
              {rank}
            </div>
          </div>

          <div className="space-y-2 p-3">
            <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
            <div className="flex items-center gap-2 opacity-100">
              <span>{Reservation_rate}</span>
            </div>
            <p className="line-clamp-2">{description}</p>
            <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
              <div>
                <button
                  className="bg-red-300 text-lg font-bold py-2 px-4 rounded"
                  onClick={handleOrderPopup}
                >
                  예매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PlaceCard;
