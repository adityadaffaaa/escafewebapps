import "./style/custom.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Capuccino from "../assets/Capuccino.png";
import Espresso from "../assets/Espresso.png";
import Caffelatte from "../assets/Caffelatte.png";

import React from "react";

const card = () => {
  const ListMenu = [
    { img: Capuccino, Title: "Capuccino", Ulasan: "4.5", Harga: 18000 },
    { img: Espresso, Title: "Espresso", Ulasan: "4.0", Harga: 14000 },
    { img: Caffelatte, Title: "Caffelatte", Ulasan: "4.3", Harga: 16000 },
    { img: Capuccino, Title: "Capuccino", Ulasan: "4.5", Harga: 18000 },
    { img: Espresso, Title: "Espresso", Ulasan: "4.0", Harga: 14000 },
    { img: Caffelatte, Title: "Caffelatte", Ulasan: "4.3", Harga: 16000 },
  ];
  return ListMenu.map((value, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center p-12 gap-8">
          <div className="h-[350px] w-[310px] border-2 border-primary rounded-[32px] transition-all ease-in-out duration-200 hover:shadow-[0_0px_32px_rgba(0,0,0,0.1)] hover:scale-105 cursor-pointer">
            <div className="flex flex-col items-center gap-[50px] my-[40px]">
              <img className="w-[89px]" src={value.img} alt="" />{" "}
              <div className="flex flex-row justify-between w-[85%] items-center">
                <div className="flex flex-col gap-[2px]">
                  <h5 className="text-text1 text-heading5">{value.Title}</h5>
                  <div className="flex flex-row gap-1">
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/sv4g" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                      </svg>
                    </span>
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                      </svg>
                    </span>
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                      </svg>
                    </span>
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                      </svg>
                    </span>
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-text4 text-paragraph5">{value.Ulasan} Ulasan</p>
                </div>
                <h4 className="text-text1 text-heading4">Rp {value.Harga}</h4>
              </div>
            </div>
          </div>
          <div className="h-[350px] w-[310px] border-2 border-primary rounded-[32px] transition-all ease-in-out duration-200 hover:shadow-[0_0px_32px_rgba(0,0,0,0.1)] hover:scale-105 cursor-pointer">
            <div className="flex flex-col items-center gap-[50px] my-[40px]">
              <img className="w-[89px]" src={value.img} alt="" />
              <div className="flex flex-row justify-between w-[85%] items-center">
                <div className="flex flex-col gap-[2px]">
                  <h5 className="text-text1 text-heading5">{value.Title}</h5>
                  <div className="flex flex-row gap-1">
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                      </svg>
                    </span>
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                      </svg>
                    </span>
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                      </svg>
                    </span>
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                      </svg>
                    </span>
                    <span className="fill-background2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-text4 text-paragraph5">{value.Ulasan} Ulasan</p>
                </div>
                <h4 className="text-text1 text-heading4">Rp {value.Harga}</h4>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });
};

const menu = () => {
  return (
    <div className="mt-[19px] w-[90%] mx-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true, type: "bullets", el: ".swiper-pagination" }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {card()}
        <div className="swiper-button-next "></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default menu;
