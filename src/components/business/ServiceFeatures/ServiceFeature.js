/* eslint-disable @next/next/no-img-element */
import React from "react";
import { style } from "./ServiceFeature.style";

const ServiceFeature = () => {
  return (
    <section className="pt-5 pb-5">
      <h2>Services</h2>
      <hr />
      <div className="pt-5">
        <div className="card-group gap-5 text-center">
          <div className="card border-0">
            <img
              src="https://img1.wsimg.com/isteam/stock/107268/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
              className="img-circle"
              alt="Unique life experiences"
            />
            <div className="card-body">
              <h5 className="card-title">Unique life experiences</h5>
              <p className="card-text">
                We specialize in offering once in a lifetime experiences that
                will create lasting memories.
              </p>
            </div>
          </div>
          <div className="card border-0 ">
            <img
              src="https://img1.wsimg.com/isteam/stock/o3wan1r/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
              className="img-circle"
              alt="Grab Interest"
            />
            <div className="card-body">
              <h5 className="card-title">Personalized trips</h5>
              <p className="card-text">
                Travel is different for everyone. We want to make sure that you
                are getting the most from your trip by crafting the dream
                vacation that is perfect for you.
              </p>
            </div>
          </div>
          <div className="card border-0">
            <img
              src="https://img1.wsimg.com/isteam/stock/104041/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
              className="img-circle"
              alt="Expertise"
            />
            <div className="card-body">
              <h5 className="card-title">Incredible detail and service</h5>
              <p className="card-text">
                We&apos;ve got your back. In the event something does come up.
                Our team is here to help make sure your trip is not interrupted.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </section>
  );
};

export default ServiceFeature;
