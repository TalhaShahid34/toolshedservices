import React from "react";
import Marquee from "react-fast-marquee";
import "./HorizontalCarousel.css";
const HorizontalCarousel = ({ images }) => {
  return (
    <Marquee
      gradient={true}
      gradientWidth={80}
      gradientColor="#051C68"
    //   pauseOnHover={true}
      speed={20}
    >
      {images.map((image, index) => (
        <img
          className="scrolling-slide-img"
          src={image}
          alt={`Image ${image}`}
        />
      ))}
    </Marquee>
  );
};

export default HorizontalCarousel;
