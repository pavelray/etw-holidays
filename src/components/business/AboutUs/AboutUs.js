/* eslint-disable @next/next/no-img-element */
import React from "react";
import { style } from "./AboutUs.style";

const AboutUs = () => {
  return (
    <section className="pt-5 pb-5">
      <h2>About Us</h2>
      <hr />
      <div className="about-us-wrapper pt-5">
        <div className=" lead pb-5">
          Welcome to <b>ETW Holidays (Explore the World)</b>, your ultimate
          travel partner for discovering the beauty of{" "}
          <b>
            Domestic and International
            <i>(Thailand)</i>
          </b>
          . We are a team of travel enthusiasts who are passionate about
          creating unforgettable experiences for our clients.
        </div>
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
                At ETW, we believe that traveling is not just about visiting new
                places, but it&apos;s also about experiencing new cultures,
                meeting new people, and discovering oneself in the process. Our
                aim is to help you explore the world in a way that suits your
                interests and preferences, while also providing you with a safe
                and comfortable journey.
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
                We offer a wide range of travel packages that cater to all kinds
                of travelers, including solo travelers, families, and groups.
                Our packages include everything from accommodation and
                transportation to sightseeing and activities, ensuring that you
                have a hassle-free and enjoyable experience.
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
                With our years of experience and expertise in the travel
                industry, we have established strong partnerships with some of
                the best hotels, resorts, and service providers across India and
                Thailand. This allows us to offer you competitive prices and
                exclusive deals that you won&apos;t find elsewhere.
                <br />
                <br />
                We are committed to providing you with personalized and
                professional service throughout your journey. Our team of travel
                experts will work closely with you to understand your needs and
                expectations, and tailor your trip accordingly. We also provide
                24/7 support and assistance, so you can rest assured that
                you&apos;re in good hands.
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
