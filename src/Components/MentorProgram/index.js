import React from "react";
import styled from "styled-components";

const Style = styled.div`
  .founder {
    background-color: ${(props) => props.backgroundColor};
  }
  p,
  ul {
    font-size: 18px;
  }
  p span {
    color: #000;
  }
  .howitworks p span,
  .mvp li span {
    color: #ffbc00 !important;
  }
  ul li {
    margin-bottom: 10px;
  }

  ul li span {
    font-weight: 500;
  }
`;

export default function index({ title, body, backgroundColor, marginBottom }) {
  return (
    <Style backgroundColor={backgroundColor}>
      <section className="founder">
        <div className="container">
          <div className="mb-5">
            <h5
              className="text-uppercase"
              data-aos="fade-down"
              data-aos-duration="400"
            >
              {title}
            </h5>
            <div className="w-25">
              <hr />
            </div>
          </div>
          <div
            className={`d-flex justify-content-center ${marginBottom}`}
            data-aos="fade-down"
            data-aos-duration="600"
          >
            {body}
          </div>
        </div>
      </section>
    </Style>
  );
}
