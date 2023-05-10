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
          <div className="review">
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col">
                  <img
                    src="https://api.dicebear.com/6.x/micah/svg?seed=Raktim"
                    width="60"
                    height="60"
                    alt=""
                  />
                  <h5 class="fw-normal">Raktim Sardar</h5>
                  <div>5/5</div>
                  <p>
                    We have booked etw holidays for our honeymoon trip to
                    Thailand. Excellent service and arrangement made by ETW
                    holidays. Thank you etw holidays for making our honeymoon
                    memorable.
                  </p>
                </div>
                <div className="col">
                  <img
                    src="https://api.dicebear.com/6.x/micah/svg?seed=Raj"
                    width="60"
                    height="60"
                    alt=""
                  />
                  <h5 class="fw-normal">Rajarshi Basu</h5>
                  <div>5/5</div>
                  <p>
                    I recently booked etw holidays for our singapore trip and I
                    couldn&apos;t be happier with the experience. Mr amitabha
                    was incredibly helpful in creating an itinerary that met all
                    of my needs and desires. Thanks to etw holidays for
                    excellent planning and attention to detail.
                  </p>
                </div>
                <div className="col">
                  {" "}
                  <img
                    src="https://api.dicebear.com/6.x/micah/svg?seed=Pavel"
                    width="60"
                    height="60"
                    alt=""
                  />
                  <h5 class="fw-normal">Pavel Ray</h5>
                  <div>5/5</div>
                  <p>
                    We have booked etw holidays for our honeymoon trip to
                    Malaysia. Excellent service would highly recommend their
                    services to anyone looking for a stress-free and
                    unforgettable travel experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="https://www.facebook.com/profile.php?id=100090625833007"
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
