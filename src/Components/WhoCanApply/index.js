import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import backgroundImage from "../../Assets/Image/applyImage.png";

const Style = styled.div`
  /* apply */
  .apply {
    background-color: #00162c;
    position: relative;
  }
  .apply .backgroundImage {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .apply hr {
    border-top: 1px solid #ffffff2e;
  }
  .apply .desc,
  .apply h5 {
    color: #ffffff;
  }
  .apply .desc {
    font-size: 18px;
    line-height: 30px;
    text-align: justify;
  }
  .apply .desc .card-body {
    padding: 1.5rem 1rem;
  }
  .text-left {
    font-size: 14px !important;
  }
  .apply .card {
    background-color: #33cccc;
  }
  .apply .card p {
    color: #ffffff;
  }
`;

export default function index({ data }) {
  return (
    <Style>
      <section className="apply">
        <div className="backgroundImage">
          <img src={backgroundImage} alt="" />
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-5 pe-md-4 mb-4">
              <div className="mb-5">
                <div
                  className="mb-5"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <h5 className="text-uppercase">Who Can Apply?</h5>
                  <div className="w-75">
                    <hr />
                  </div>
                </div>
                <p
                  className="desc "
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  If you have any digital business idea that requires technology
                  support no matter where you are in Africa, apply as long as
                  your idea falls within any of the sectors below:
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="500">
                <Link
                  to="/ventureboothapplication"
                  className=" btn-primary btn-upload fw-bold "
                >
                  Apply Now
                </Link>
                {/* <button className="btn btn-primary btn-md fw-bold">
                  Apply Now
                </button> */}
              </div>
            </div>
            <div className="col-md-7">
              {/* <h5 className="text-uppercase">Introduction</h5>
              <div className="w-25 mb-4">
                <hr />
              </div>  */}
              <div className="mb-5 desc">
                <di className="row">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="col-6 col-xl-3 mb-5"
                      data-aos="fade-down"
                      data-aos-duration={index * 300}
                    >
                      <div className="card h-100">
                        <div className="card-body text-center">
                          <div className="mb-3 imageWrapper">
                            <img src={item?.image} alt="" />
                          </div>
                          <p className="card-text text-left">{item?.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </di>
              </div>
              {/* <div>
                <button className="btn btn-primary font-weight-bold btn-md">
                  Apply Now
                </button>
              </div>  */}
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
