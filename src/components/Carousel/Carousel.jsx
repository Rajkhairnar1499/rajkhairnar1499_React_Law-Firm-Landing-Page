import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
import "swiper/css";
import Card from "../Card/Card";
import SwipperButton from "../SwipperButtons/SwipperButton";

const Carousel = (props) => {
  const { cardsArray, sectionType } = props;

  const displaySlides = () => {
    return cardsArray.map((card) => {
      return (
        <SwiperSlide key={card?.name}>
          <Card name={card?.name} icon={card?.icon} sectionType={sectionType} />
        </SwiperSlide>
      );
    });
  };

  const breakpoints = {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    300: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1.75,
      spaceBetween: 15,
    },
    450: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1.75,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  };

  return (
    <div className={"swiperContainer"}>
      <Swiper
        modules={[Autoplay, Autoplay, Navigation, A11y]}
        // spaceBetween={10}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={breakpoints}
        style={{ position: "static" }}
        className={"swiperEdit"}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      >
        {displaySlides()}
        {sectionType !== "about" ? <SwipperButton /> : null}
      </Swiper>
    </div>
  );
};

export default Carousel;
