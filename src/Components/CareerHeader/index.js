import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
//
import CareerImage from "../../Assets/Image/careerImage.svg";
import { HashLink as Link } from "react-router-hash-link";

const Style = styled.section`
  background-image: url(${CareerImage});
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-shadow: -4px 2px 4px rgba(51, 204, 204, 0.4);
    font-size: 50px;
    line-height: 65px;
    font-weight: 900 !important;
  }

  p {
    line-height: 30px;
    font-weight: 500;
  }

  @media (min-width: 992px) {
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 708px !important;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <div className="container">
        <h1 className="text-center fw-bolder mb-4">
          Basically, we design and build amazing things
        </h1>

        <p className="px-4 mb-5 text-center">
          We're an innovative, fast-growing company—with all the opportunity for
          impact and career growth that comes with the territory. There's a lot
          of great work being done here by a lot of great people. Up for a
          challenge (and ready for an adventure)? Join us.
        </p>
        <div className="text-center">
          <Link to="/careers/#position" className="btn btn-primary py-3 px-4">
            See jobs openings <BsArrowRight size={25} />
          </Link>
        </div>
      </div>
    </Style>
  );
}
