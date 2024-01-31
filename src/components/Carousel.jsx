import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import { Image } from "@nextui-org/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/carousel.css";

export default function Carousel({ images, name, ...extras }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "react__slick__slider__parent",
  };

  if (images.length === 0) {
    return <></>;
  }
  if (images.length === 1) {
    console.log(`${images[0]}`);
    return (
      <Image src={`${images[0]}`} alt={`${name}-image`} key={`${name}-image`} />
    );
  }

  return (
    <Slider {...settings} key={`${name}-carousel`}>
      {images.map((eachImage, index) => {
        return (
          <div key={`${name}-carousel-div`}>
            <Image
              src={eachImage}
              alt={`${name}-image-${index}`}
              key={`${name}-image-${index}`}
            />
          </div>
        );
      })}
    </Slider>
  );
}
