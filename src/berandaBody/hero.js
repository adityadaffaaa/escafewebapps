// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Hero = () => {
  const ImagesTitle = [
    { image: "./assets/hero1.png", title: "Halo Sobat Kopi" },
    { image: "./assets/hero2.png", title: "Jadi Member Sekarang!" },
    { image: "./assets/hero3.png", title: "Rasakan Kenikmatan Kopi!" },
  ];
  return (
    <div className="mt-[92px]">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        parallax={true}
        loop={{ Infinity }}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {ImagesTitle.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex h-[740px] justify-center relative bg-[rgba(0,0,0,0.4)] mb-10">
                <img className="h-[740px] absolute -z-20 opacity-95" src={value.image} data-swiper-parallax-x="-20%" data-swiper-parallax-duration="1200" alt="" />
                <div className="w-full h-[740px] flex justify-start items-center px-32">
                  <div className="flex flex-col">
                    <h1 data-swiper-parallax-x="-70%" data-swiper-parallax-duration="1200" data-swiper-parallax-opacity="0" className="text-text2 text-heading1">
                      {value.title}
                    </h1>
                    <p data-swiper-parallax-x="-90%" data-swiper-parallax-duration="1100" data-swiper-parallax-opacity="0" className="text-text2 text-paragraph2 leading-6 tracking-wider w-1/2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel amet facilisi eleifend quisque rutrum a, urna. Morbi eu non dignissim gravida lacus. Scelerisque adipiscing bibendum faucibus varius velit.{" "}
                    </p>
                  </div>
                </div>
              </div>
              ;
            </SwiperSlide>
          );
        })}
        {/* {Slider()} */}
      </Swiper>
    </div>
  );
};

export default Hero;
