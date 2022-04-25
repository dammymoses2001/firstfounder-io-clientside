import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
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
  }

  .touch {
    padding: 10px 10px;
    transform: 1s all;
  }
  .touch:hover {
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
          <div className="mb-4" data-aos="fade-down" data-aos-duration="300" data-aos-once={true}>
            <h5 className="text-uppercase">GET IN TOUCH</h5>
            <hr />
          </div>

          <div className="w-750 mb-7">
            <div
              className="wrapper"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once={true}
            >
              <div className="touch">
                <Link3 to="/whatwedo" smooth={true} duration={400}> 
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="m-0"><span className="pe-3">01</span>BUILD WITH US</h5>
                    <MdKeyboardArrowRight size={40} />
                  </div>
                </Link3>
              </div>
              <hr className="my-4" />
            </div>
            <div
              className="wrapper"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once={true}
            >
              <div className="touch">
                <Link3 to="/contact" smooth={true} duration={400}> 
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="m-0"><span className="pe-3">02</span>PARTNER WITH US</h5>
                    <MdKeyboardArrowRight size={40} />
                  </div>
                </Link3>
              </div>
              <hr className="my-4" />
            </div>
            <div
              className="wrapper"
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once={true}
            >
              <div className="touch">
                <Link3 to="/venturebooth" smooth={true} duration={400}> 
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="m-0"><span className="pe-3">03</span>THE VENTURE BOOTH</h5>
                    <MdKeyboardArrowRight size={40} />
                  </div>
                </Link3>
              </div>
              <hr className="my-4" />
            </div>
            <div
              className="wrapper"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once={true}
            >
              <div className="touch">
                <Link3 to="#footer" smooth={true} duration={400}> 
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="m-0"><span className="pe-3">04</span>SIGN UP FOR OUR NEWSLETTER</h5>
                    <MdKeyboardArrowRight size={40} />
                  </div>
                </Link3>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
