// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const ImgURL1 = () => {
  return (
    <div className="flex h-[740px] justify-center relative bg-[rgba(0,0,0,0.4)] ">
      <img className="h-[740px] absolute -z-20 opacity-95" src="./assets/hero1.png" data-swiper-parallax-x="-20%" data-swiper-parallax-duration="1200" alt="" />
      <div className="w-full h-[740px] flex justify-start items-center px-32">
        <div className="flex flex-col">
          <h1 data-swiper-parallax-x="-70%" data-swiper-parallax-duration="1200" data-swiper-parallax-opacity="0" className="text-text2 text-heading1">
            Hallo Sobat Kopi!
          </h1>
          <p data-swiper-parallax-x="-90%" data-swiper-parallax-duration="1100" data-swiper-parallax-opacity="0" className="text-text2 text-paragraph2 leading-6 tracking-wider w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel amet facilisi eleifend quisque rutrum a, urna. Morbi eu non dignissim gravida lacus. Scelerisque adipiscing bibendum faucibus varius velit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
const ImgURL2 = () => {
  return (
    <div className="flex h-[740px] justify-center relative bg-[rgba(0,0,0,0.4)] ">
      <img className="h-[740px] absolute -z-20 opacity-95" src="./assets/hero2.png" data-swiper-parallax-x="-20%" data-swiper-parallax-duration="1200" alt="" />
      <div className="w-full h-[740px] flex justify-start items-center px-32">
        <div className="flex flex-col">
          <h1 data-swiper-parallax-x="-70%" data-swiper-parallax-duration="1200" data-swiper-parallax-opacity="0" className="text-text2 text-heading1">
            Hallo Sobat Kopi!
          </h1>
          <p data-swiper-parallax-x="-90%" data-swiper-parallax-duration="1100" data-swiper-parallax-opacity="0" className="text-text2 text-paragraph2 leading-6 tracking-wider w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel amet facilisi eleifend quisque rutrum a, urna. Morbi eu non dignissim gravida lacus. Scelerisque adipiscing bibendum faucibus varius velit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
const ImgURL3 = () => {
  return (
    <div className="flex h-[740px] justify-center relative bg-[rgba(0,0,0,0.4)] ">
      <img className="h-[740px] absolute -z-20 opacity-95" src="./assets/hero3.png" data-swiper-parallax-x="-20%" data-swiper-parallax-duration="1200" alt="" />
      <div className="w-full h-[740px] flex justify-start items-center px-32">
        <div className="flex flex-col">
          <h1 data-swiper-parallax-x="-70%" data-swiper-parallax-duration="1200" data-swiper-parallax-opacity="0" className="text-text2 text-heading1">
            Hallo Sobat Kopi!
          </h1>
          <p data-swiper-parallax-x="-90%" data-swiper-parallax-duration="1100" data-swiper-parallax-opacity="0" className="text-text2 text-paragraph2 leading-6 tracking-wider w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel amet facilisi eleifend quisque rutrum a, urna. Morbi eu non dignissim gravida lacus. Scelerisque adipiscing bibendum faucibus varius velit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  return [<SwiperSlide>{ImgURL1()}</SwiperSlide>, <SwiperSlide>{ImgURL2()}</SwiperSlide>, <SwiperSlide>{ImgURL3()}</SwiperSlide>];
};

const Hero = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      parallax={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {Slider()}
    </Swiper>
  );
};

export default Hero;
