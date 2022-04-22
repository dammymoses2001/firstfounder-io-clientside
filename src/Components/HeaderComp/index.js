import React from "react";
import { Link } from "react-router-dom";
import LazyLoading from "../Lazy_Load_Image/index";
import styled from "styled-components";

const Style = styled.div`
  .about {
    background-image: url(${(props) => props.background});
    background-color: ${(props) => props.backgroundColor};
    min-height: 120vh;
    background-position: center;
  }
  button {
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 80%;
    }
  }
  @media only screen and (max-width: 360px) {
    img {
      width: 80%;
    }
  }
`;

export default function index({
  BackgroundImage,
  HeaderImage,
  backgroundColor,
  button,
}) {
  return (
    <Style background={BackgroundImage} backgroundColor={backgroundColor}>
      <section className="about d-flex justify-content-center align-items-center">
        <div className="container">
          <div
            className="text-center mb-6 mt-4"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <picture>
              {/* <img src={HeaderImage} alt="" /> */}
              <LazyLoading image={HeaderImage} alt="" />
            </picture>
          </div>
          <div className="text-center">
            {button && (
              <Link
                to="/ventureboothapplication"
                className=" btn-primary btn-upload fw-bold "
              >
                Apply
              </Link>
            )}
          </div>
        </div>
      </section>
    </Style>
  );
}
