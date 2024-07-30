import React from "react";
import Marquee from "react-fast-marquee";
import "./HorizontalCarousel.css";
const HorizontalCarousel = ({ images }) => {
  return (
    <Marquee
      gradient={true}
      gradientWidth={80}
      gradientColor="#051C68"
      pauseOnHover={true}
      speed={20}
      
    >

      {images.map((element, index) => (
        <div className="scrolling-slide" key={index}>
        <img
          className="scrolling-slide-img"
          src={element.image}
          alt={`Image ${element.image}`}
        />
          {/* <a href={'https://'+element.name+'.com'} className="name-text" target="_blank">{element.name}  </a> */}
          <a href={element.link} className="name-text" target="_blank">{element.name}  </a>
        
        </div>
      ))}

    </Marquee>
  );
};

export default HorizontalCarousel;
