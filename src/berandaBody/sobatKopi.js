import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Person from "../assets/Udin.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SobatKopi = () => {
  return (
    <div className="mx-auto w-[85%] mt-[43px]">
      <div className="wrap flex flex-col items-center">
        <h3 className="text-heading3 text-secondary">Apa kata sobat kopi?</h3>
        <div className="wrap w-full">{Testimoni()}</div>
      </div>
    </div>
  );
};

export default SobatKopi;

const Testimoni = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true, dragSize: 328 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {Konten()}
    </Swiper>
  );
};

const Konten = () => {
  const ListKontenTestimoni = [
    {
      foto: Person,
      nama: "Udin Sulistyo",
      deskripsi: "Mahasiswa Universitas Indonesia",
      testimoni: "Pelayanan smart cafe keren banget, baru pertama kali nemuin cafe yang berbasis IOT gini... jadi lebih mudah memilih menu dan pembayaran karena melalui digital.",
    },
    {
      foto: Person,
      nama: "Regi Andrian",
      deskripsi: "Mahasiswa Universitas Brawijaya",
      testimoni: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      foto: Person,
      nama: "Riandy Bagas",
      deskripsi: "Manager Tokopedia",
      testimoni: "Lorem ipsum dolor sit amet",
    },
  ];
  return ListKontenTestimoni.map((value, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="m-7 flex justify-center">
          <div className="w-full h-[320px] bg-secondary rounded-[32px] flex justify-center items-center">
            <div className="flex flex-row gap-[70px]">
              <div className="wrapimg">
                <img className="h-[188px] rounded-full border-4 border-text2" src={value.foto} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col ">
                  <h4 className="text-text2 text-heading4">{value.nama}</h4>
                  <p className="text-text3 text-paragraph4">{value.deskripsi}</p>
                </div>
                <p className="text-text2 text-paragraph4 w-[552px]">{value.testimoni}</p>
                <div className="flex flex-row gap-1">
                  <span className="fill-background2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                    </svg>
                  </span>
                  <span className="fill-background2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                    </svg>
                  </span>
                  <span className="fill-background2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                    </svg>
                  </span>
                  <span className="fill-background2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                    </svg>
                  </span>
                  <span className="fill-background2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });
};
