import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Carousel.module.css";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {images.map((img, index) => (
        <div key={index}>
          <img
            src={img.url}
            alt={img.caption || `Slide ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
