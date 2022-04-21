import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import BoothImage from "../../Assets/Image/boothImage1.png";

const Style = styled.div`
  /* howitworks */
  .howitworks .card {
    background-color: #00162c;
    color: #ffffff;
    border-radius: 0 0 23px 0;
  }
  .howitworks .card h1 {
    font-size: 150px;
    /* color: #00162c; */
    font-family: "Teko", sans-serif;
  }
  .howitworks .card h5 {
    color: #33cccc;
    text-transform: uppercase;
    font-weight: 700;
  }

  .howitworks .card .date {
    color: #ffbc00;
  }

  .howitworks .card .mr-4 {
    flex: 1;
  }

  .howitworks .card .mt-4 {
    flex: 3;
  }
`;
export default function index() {
  return (
    <Style>
      <section className="howitworks">
        <div className="container">
          <div className="mb-5">
            <div className="mb-5">
              <h5 className="text-uppercase">How It Works?</h5>
              <div className="w-25">
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 mb-4"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="me-2">
                      <h1>1</h1>
                    </div>
                    <div className="mt-4 me-5">
                      <h5>Call for Application:</h5>
                      <p className="date">November 1st –December 15th, 2021</p>
                      <p>Launch The Venture Booth campaign</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 mb-4"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="me-2">
                      <h1>2</h1>
                    </div>
                    <div className="mt-4 me-5">
                      <h5>
                        Application Review & <br />
                        Selection of Top 20:
                      </h5>
                      <p className="date">December 30th , 2021</p>
                      <p>
                        Review of submitted applications and select 20
                        market-disruptive idea/existing startups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 mb-4"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="me-2">
                      <h1>3</h1>
                    </div>
                    <div className="mt-4 me-5">
                      <h5>Announcement of Qualified Startups:</h5>
                      <p className="date">5th January, 2022</p>
                      <p>Reveal selected entries on social media platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 mb-4"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="me-2">
                      <h1>4</h1>
                    </div>
                    <div className="mt-4 me-5">
                      <h5>Training Qualified Startups:</h5>
                      <p className="date">January 10th – January 16th , 2022</p>
                      <p>
                        20 Startup Founders to be trained and Provided
                        Opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 mb-4"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="me-2">
                      <h1>5</h1>
                    </div>
                    <div className="mt-4 me-5">
                      <h5>Final Selection:</h5>
                      <p className="date">February 15th, 2022</p>
                      <p>
                        10 Startups To Be Selected To Benefit From the Program
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 mb-4"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="me-2">
                      <h1>6</h1>
                    </div>
                    <div className="mt-4 me-5">
                      <h5>3+months Venture Build:</h5>
                      <p className="date">March 1st 2022 – June 30th, 2022</p>
                      <p>
                        Build Startup Technology; Provide Funding Channels; And
                        All Other Incubation Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="my-4 col-12"
              data-aos="zoom-up"
              data-aos-duration="600"
            >
              <div className="text-center">
                <Link
                  to="/ventureboothapplication"
                  className=" btn-primary btn-upload fw-bold "
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
