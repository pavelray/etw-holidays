/* eslint-disable @next/next/no-img-element */
import React from "react";
import { style } from "./Holiday.style";

const TourDomestic = () => {
  return (
    <section className="pt-5 pb-5">
      <h2>Domestic</h2>
      <hr />
      <div className="wrapper pt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          <div className="col">
            <div className="card border-0">
              <img
                src="https://images.unsplash.com/photo-1616190419596-e2839e7380d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&h=430&q=80"
                className="card-img-top img-circle"
                alt="Kashmir"
              />
              <div className="card-body">
                <h5 className="card-title">Kashmir</h5>
                <p className="card-text">
                  Having a big sale, on-site celebrity, or other event? Be sure
                  to announce it so everybody knows and gets excited about it.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://images.unsplash.com/photo-1536295243470-d7cba4efab7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&h=430&q=80"
                className="card-img-top img-circle"
                alt="Ladakh"
              />
              <div className="card-body">
                <h5 className="card-title">Ladakh</h5>
                <p className="card-text">
                  Having a big sale, on-site celebrity, or other event? Be sure
                  to announce it so everybody knows and gets excited about it.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&h=430&q=80"
                className="card-img-top img-circle"
                alt="Kerala"
              />
              <div className="card-body">
                <h5 className="card-title">Kerala</h5>
                <p className="card-text">
                  Having a big sale, on-site celebrity, or other event? Be sure
                  to announce it so everybody knows and gets excited about it.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://images.unsplash.com/photo-1578999935853-4ec5fa6c1f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&h=430&q=80"
                className="card-img-top img-circle"
                alt="Rajasthan"
              />
              <div className="card-body">
                <h5 className="card-title">Rajasthan</h5>
                <p className="card-text">
                  Having a big sale, on-site celebrity, or other event? Be sure
                  to announce it so everybody knows and gets excited about it.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://images.unsplash.com/photo-1569734147512-2caa1ea7d8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&h=430&q=80"
                className="card-img-top img-circle"
                alt="Darjeeling & Gangtok"
              />
              <div className="card-body">
                <h5 className="card-title">Darjeeling & Gangtok</h5>
                <p className="card-text">
                  Having a big sale, on-site celebrity, or other event? Be sure
                  to announce it so everybody knows and gets excited about it.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img
                src="https://images.unsplash.com/photo-1589882485484-c073e3742e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&h=430&q=80"
                className="card-img-top img-circle"
                alt="Assam"
              />
              <div className="card-body">
                <h5 className="card-title">Assam</h5>
                <p className="card-text">
                  Having a big sale, on-site celebrity, or other event? Be sure
                  to announce it so everybody knows and gets excited about it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </section>
  );
};

export default TourDomestic;
