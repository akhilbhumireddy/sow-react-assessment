import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

const ImageCarousel = ({ data }) => {
  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop>
      {data.slice(0, 6).map((item) => (
        <div key={item.ID}>
          <img src={item.image_url} alt={item.post_title} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
