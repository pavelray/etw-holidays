/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { style } from "./Reviews.style";

const Reviews = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="reviews">
        <h2>Reviews</h2>
        <hr />
        <div className="review-container">
          <div className="sk-ww-google-reviews" data-embed-id="159090"></div>
          <script
            src="https://widgets.sociablekit.com/google-reviews/widget.js"
            async
            defer
          ></script>
          <Link
            href="https://goo.gl/maps/2Qx3JiNwb1WX4zsC7"
            legacyBehavior
          >
            <a target="_blank">
              <button type="button" className="btn btn-primary">
                View More
              </button>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{style}</style>
    </section>
  );
};

export default Reviews;
