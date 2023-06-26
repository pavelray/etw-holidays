/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Image from "next/image";
import { SOCIAL } from "@/utils/constants";

import Link from "next/link";

export default function Contact() {
  return (
    <Fragment>
      <main className="container pt-5">
        <section className="pt-5 pb-5">
          <h2>Frequently Asked Questions</h2>
          <hr />
          <div className="card mb-3 border-0 text-center pb-5 pt-5">
            <div className="row g-5 align-items-center">
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
            <div className="row g-5 align-items-center">
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
            <div className="row g-5 align-items-center">
              <div className="col-md-6">
                <img
                  src="https://img1.wsimg.com/isteam/stock/jaVeZxY/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
                  className="img-fluid rounded-start"
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
                    <a
                      href="mailto:holidays@etwholidays.com"
                      className="ps-2 link-underline"
                    >
                      holidays@etwholidays.com
                    </a>
                    <br />
                    <br />
                    <Link
                      href="https://api.whatsapp.com/send?phone=919474122359"
                      legacyBehavior
                    >
                      <a target="_blank" className="btn btn-secondary">
                        <span className="pe-3">
                          <Image
                            src={SOCIAL.WHATSAPP}
                            alt="Whatsapp"
                            width={34}
                            height={34}
                          ></Image>
                        </span>
                        <span>Message us on Whatsapp</span>
                      </a>
                    </Link>
                  </p>
                  <h4 className="pt-3">ETW Holidays</h4>
                  <h6>Explore The World</h6>
                  <h6 className="link">
                    <b>GST:</b> 19BBXPB8991C1Z1
                  </h6>
                  <p className="py-4">
                    Madhyamgram, Kolkata, West Bengal, India
                    <br />
                    <a href="tel:+919474122359" className="link">
                      +91 94741 22359
                    </a>
                    <br />
                    <a href="mailto:admin@etwholidays.com" className="link">
                      admin@etwholidays.com
                    </a>
                  </p>
                  <div>
                    <h4>Hours</h4>
                    <span className="fw-bold">Monday - Friday:</span> 10:00 am -
                    7:00 pm <br />
                    <span className="fw-bold">Saturday-Sunday:</span> Closed
                  </div>
                  <div className="py-2">
                    <h4>Social</h4>
                    <p>
                      <span>
                        <Link
                          href="https://www.facebook.com/profile.php?id=100090625833007"
                          legacyBehavior
                        >
                          <a target="_blank">
                            <Image
                              src={SOCIAL.FACEBOOK}
                              alt="Facebook"
                              width={40}
                              height={40}
                            />
                          </a>
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.057252485083!2d88.46713968448881!3d22.688912526316827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fc5c3b735b9%3A0x68e2d0c241eb1ef2!2sETW%20Holidays!5e0!3m2!1sen!2sin!4v1687787605365!5m2!1sen!2sin"
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
