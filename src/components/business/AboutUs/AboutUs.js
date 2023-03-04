/* eslint-disable @next/next/no-img-element */
import React from "react";
import { style } from "./AboutUs.style";

const AboutUs = () => {
  return (
    <section className="pt-5 pb-5">
      <h2>About Us</h2>
      <hr />
      <div className="about-us-wrapper pt-5">
        <div className="card-group gap-5 text-center">
          <div className="card border-0">
            <img
              src="https://img1.wsimg.com/isteam/stock/1415/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
              className="img-circle"
              alt="Generate Excitement"
            />
            <div className="card-body">
              <h5 className="card-title">Generate Excitement</h5>
              <p className="card-text">
                What&apos;s something exciting your business offers? Say it
                here.
              </p>
            </div>
          </div>
          <div className="card border-0 ">
            <img
              src="https://img1.wsimg.com/isteam/stock/107268/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
              className="img-circle"
              alt="Grab Interest"
            />
            <div className="card-body">
              <h5 className="card-title">Grab Interest</h5>
              <p className="card-text">
                Say something interesting about your business here.
              </p>
            </div>
          </div>
          <div className="card border-0">
            <img
              src="https://img1.wsimg.com/isteam/stock/803/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
              className="img-circle"
              alt="Expertise"
            />
            <div className="card-body">
              <h5 className="card-title">Expertise</h5>
              <p className="card-text">
                DMC Company for Thailand and SriLanka.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </section>
  );
};

export default AboutUs;
