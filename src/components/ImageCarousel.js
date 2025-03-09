import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

const ImageCarousel = ({ data }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      centerMode
      centerSlidePercentage={33.33}
    >
      {data.slice(0, 6).map((item) => (
        <div key={item.ID} className="carousel-item">
          <img src={item.image_url} alt={item.post_title} />
          <h3>{item.post_title}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
