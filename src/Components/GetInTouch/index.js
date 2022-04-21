import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";
// import { Link as Link2 } from "react-scroll";
import { HashLink as Link3 } from "react-router-hash-link";

import touchImage from "../../Assets/Image/touchImage.png";

const Style = styled.div`
  section {
    background-color: ${(props) =>
      props.background ? props.background : "#f8f9ff"};
    position: relative;
    overflow: hidden;
  }
  .backgroundImage {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
  .container {
    z-index: 10;
    position: relative;
  }
  .backgroundImage img {
    width: 80%;
  }
  h5 {
    font-weight: 400;
    text-transform: uppercase;
    color: #33cccc;
  }

  .d-flex {
    padding: 10px 10px;
    transform: 1s all;
  }
  .d-flex:hover {
    background: #d8f5ff;
  }
  a {
    color: #000;
  }

  @media only screen and (max-width: 360px) {
    .w-75 {
      width: 100% !important;
    }
  }
`;

export default function index({ background }) {
  return (
    <Style background={background}>
      <section>
        <div className="backgroundImage">
          <img src={touchImage} alt="" />
        </div>
        <div className="container">
          <div className="mb-7" data-aos="fade-down" data-aos-duration="300">
            <h5 className="text-uppercase">GET IN TOUCH</h5>

            <hr />
          </div>

          <div className="w-750 mb-7">
            <div
              className="wrapper"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="d-flex justify-content-between">
                {/* <Link></Link> */}
                <h5>
                  <span className="pe-3">01</span>{" "}
                  <Link3 to="/whatwedo" smooth={true} duration={400}>
                    BUILD WITH US{" "}
                  </Link3>
                </h5>
                <span>
                  <MdKeyboardArrowRight size={40} />
                </span>
              </div>
              <hr className="my-4" />
            </div>
            <div
              className="wrapper"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="d-flex justify-content-between">
                <h5>
                  <span className="pe-3">02</span>{" "}
                  <Link3 to="/contact">PARTNER WITH US</Link3>
                </h5>
                <span>
                  <MdKeyboardArrowRight size={40} />
                </span>
              </div>
              <hr className="my-4" />
            </div>
            <div
              className="wrapper"
              data-aos="fade-right"
              data-aos-duration="400"
            >
              <div className="d-flex justify-content-between">
                <h5>
                  <span className="pe-3">03</span>{" "}
                  <Link to="/venturebooth">THE VENTURE BOOTH</Link>
                </h5>
                <span>
                  <MdKeyboardArrowRight size={40} />
                </span>
              </div>
              <hr className="my-4" />
            </div>
            <div
              className="wrapper"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="d-flex justify-content-between">
                <h5>
                  <span className="pe-3">04</span>{" "}
                  <Link3 to="#footer">SIGN UP FOR OUR NEWSLETTER</Link3>
                </h5>
                <span>
                  <MdKeyboardArrowRight size={40} />
                </span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
