/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { style } from "./ImageCarousel.style";
import Carousel from "./Carousel";

const ImageCarousel = ({
  carouselSlides,
}) => {
  const slides = carouselSlides;
  return (
    <Fragment>
      <div className="carousel-container">
        <Carousel autoSlide>
          {slides.map((slide) => (
            <img
              key={`carousel_slide_${uuidv4()}`}
              className="slide-image"
              src={slide.url}
              alt={slide.name}
            />
          ))}
        </Carousel>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

ImageCarousel.propTypes = {
  carouselSlides: PropTypes.array.isRequired,
};

export { ImageCarousel };
