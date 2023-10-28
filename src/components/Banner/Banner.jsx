import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel slide={false} className="px-0">
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={450}
            src="https://static.vecteezy.com/system/resources/previews/002/288/676/original/women-in-fashion-banner-sale-discount-free-vector.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
