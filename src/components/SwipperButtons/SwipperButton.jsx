import React from "react";
import Right_Navigation from "../../assets/Right_Navigation.png";
import Left_Navigation from "../../assets/Left_Navigation.png";
import { useSwiper } from "swiper/react";
import "./SwipperButton.css";

const SwipperButton = () => {
  const swiper = useSwiper();

  return (
    <div className={`swiper-nav-btns`}>
      <button
        onClick={() => swiper.slidePrev()}
        className={"swiperButton swiperButtonPrev"}
      >
        <img src={Left_Navigation} alt="previous-button" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={"swiperButton swiperButtonNext"}
      >
        <img src={Right_Navigation} alt="next-button" />
      </button>
    </div>
  );
};

export default SwipperButton;
