/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import ServiceFeature from "@/components/business/ServiceFeatures/ServiceFeature";
import TourInternational from "@/components/business/TourInternational/TourInternational";
import TourDomestic from "@/components/business/TourDomestic/TourDomestic";

export default function Contact() {
  return (
    <Fragment>
      <main className="container pt-5">
        <section className="pt-5 pb-5">
          <h2>Frequently Asked Questions</h2>
          <hr />
          <div className="card mb-3 border-0 text-center pb-5 pt-5">
            <div className="row g-5">
              <div className="col-md-6">
                <img
                  src="https://img1.wsimg.com/isteam/stock/107268/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    Why should I use a travel agent?
                  </h5>
                  <p className="card-text">
                    Even in the age of online booking, travel agents are a great
                    source of information and discounts. A travel agent can make
                    sure that your trip is tailored to you, assist you in case
                    of unexpected problems, and help you anticipate potential
                    issues in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 border-0 text-center pb-5">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    Will I pay more if I book through an agent?
                  </h5>
                  <p className="card-text">
                    Our fees are transparent. In many cases, you save more than
                    you spend. We can work within your budget, and we always
                    focus on making sure that you get a solid value in return
                    for our fees.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="https://img1.wsimg.com/isteam/stock/7795/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="card mb-3 border-0 text-center pb-5">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src="https://img1.wsimg.com/isteam/stock/jaVeZxY/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Do you book group travel?</h5>
                  <p className="card-text">
                    Yes! Do you have an upcoming conference for your business or
                    a student trip? We can handle the details and ensure that
                    you have access to group seating, entrances, and discounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5 pb-5">
          <div className="card mb-3 border-0 pb-5">
            <div className="row g-5">
              <div className="col-md-6 pe-5">
                <div className="card-body">
                  <h2>Contact Us</h2>
                  <hr />
                  <h4 className="py-1">We&apos;d love to hear from you!</h4>
                  <p className="py-3">
                    Have a question about our services? Want to see if your
                    particular vacation is one we can help with? We&apos;d love
                    to hear from you!
                    <br />
                    Drop a email at{" "}
                    <a href="mailto:admin@etwholidays.com">
                      admin@etwholidays.com
                    </a>
                  </p>
                  <h4 className="pt-3">Etw Holidays</h4>
                  <h6>Explore The World</h6>
                  <p className="py-4">
                    Madhyamgram, Kolkata, West Bengal, India
                    <br />
                    <a href="tel:+919474122359">+91 94741 22359</a>
                    <br />
                    <a href="mailto:admin@etwholidays.com">
                      admin@etwholidays.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14257.181369378402!2d89.6110576!3d26.7030102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2156aaa91eba05!2sAaltapori%20Homestay!5e0!3m2!1sen!2sin!4v1674551403560!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  width="100%"
                  height="500px"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
