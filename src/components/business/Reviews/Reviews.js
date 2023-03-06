/* eslint-disable @next/next/no-img-element */
import React from "react";
import { style } from "./Reviews.style";

const Reviews = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="reviews">
        <h2>Reviews</h2>
        <hr/>
        <div className="review-container">
          <div className="review">
            <h4>Reviews Coming Soon !</h4>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </section>
  );
};

export default Reviews;
