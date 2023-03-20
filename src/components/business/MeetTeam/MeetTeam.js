/* eslint-disable @next/next/no-img-element */
import React from "react";
import { style } from "./MeetTeam.style";

const MeetTheTeam = () => {
  return (
    <section className="pt-5 pb-5">
      <h2>Meet The Team</h2>
      <hr />
      <div className="d-flex flex-wrap pt-5 gap-3">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="img-fluid rounded-start"
                alt="TeamMember1"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Amitabha Banerjee</h5>
                <p className="card-text">
                  Amitabha Banerjee. Click to edit and tell your visitors about
                  this team member. Do they have any special certifications?
                  What are their favorite travel destinations?
                </p>
                <p className="card-text">
                  <small className="text-muted">Founder</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="img-fluid rounded-start"
                alt="TeamMember1"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Rimi Roy</h5>
                <p className="card-text">
                  Rimi Roy. Click to edit and tell your visitors about
                  this team member. Do they have any special certifications?
                  What are their favorite travel destinations?
                </p>
                <p className="card-text">
                  <small className="text-muted">Senior Manager, Sales</small>
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

export default MeetTheTeam;
