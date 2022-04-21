import React from "react";
import Layout from "../Layout";
import ContactForm from "../Components/Forms/ContactForm";
import styled from "styled-components";
import BackgroundImage from "../Assets/Image/contactBackground.png";

const Style = styled.div`
  .contact {
    background-image: url(${BackgroundImage});
    color: #fff;
    padding: 0;
    background-color: #021b31;
  }
  .top {
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
  p a {
    color: #fff;
  }

  .contact h3,
  .contact .title,
  .contact .social a {
    color: #33cccc;
  }
  .contact .side {
    background-color: #d2e6ee;
    color: #000;
  }
  label {
    font-weight: 400 !important;
    font-size: 16px;
  }
`;

export default function Contact() {
  return (
    <Layout title="Contact">
      <Style>
        <section className="contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 p-4 p-md-5">
                <div className="top">
                  <div className="w-75 mb-5 ">
                    <h3 className="mb-3 fw-bold">Contact Us</h3>
                    <div>
                      <p className="fw-normal mb-4 title">OFFICE ADDRESS</p>
                      <p className="pr-5">
                        1A, Harvey Road, Behind Domino Pizza, Off Herbert
                        Macaulay Way, Yaba, Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="w-75">
                    <p className="mb-3 font-weight-normal title">Email</p>
                    <div>
                      <p className="pr-md-5 mb-5">
                        <a
                          href="mailto:hello@thefirstfounders.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          hello@thefirstfounders.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="w-75">
                    <div className="social">
                      <a
                        href="https://twitter.com/the1stfounders"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="mb-3">Twitter</p>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/thefirstfounders"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="pr-5">Linkedln</p>
                      </a>
                      <a
                        href="https://www.instagram.com/thefirstfounders/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="pr-5">Intagram</p>
                      </a>
                      <a
                        href="https://web.facebook.com/thefirstfounders"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="pr-5">Facebook</p>
                      </a>
                      <a
                        href="https://www.clubhouse.com/join/firstfounders-inc/5IZrQIg3"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="pr-5">ClubHouse</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 side p-4 p-md-5">
                <div className="top">
                  <p className="mb-4">
                    We would love to discuss about your project with you. <br />
                    Please contact us today!
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Style>
    </Layout>
  );
}
