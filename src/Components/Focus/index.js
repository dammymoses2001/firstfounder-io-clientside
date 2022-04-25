import React from "react";
import styled from "styled-components";

const Style = styled.div`
  /* startp */
  .startup .ImageWrapper {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px;
    background: #ffbc00;
    border-radius: 50%;
    margin-bottom: 2rem;
  }

  .startup .col-md-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .col-half-offset {
    margin-left: 4.166666667%;
  }

  .startup .row p {
    font-weight: 500;
  }
  @media only screen and (max-width: 767px) {
    .startup br {
      display: none;
    }
  }
  @media only screen and (max-width: 560px) {
    .startup .ImageWrapper {
      width: 50px;
      height: 50px;
    }
  }
`;
export default function index({ data }) {
  return (
    <Style>
      <section className="startup">
        <div className="container">
          <div className="mb-5" data-aos="fade-down" data-aos-duration="300" data-aos-once="true">
            <h5 className="text-uppercase">Our Startup Focus</h5>
            <hr />
            <div className="">
              <div className="col-md-6 my-4">
                <p>
                  We take interest in tech-driven ideas in an emerging economy
                  in Africa and across the world, therefore our startup focus
                  cut across the following:
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item, index) => (
              <div
                key={index}
                // className="col-6 col-md-2 mb-5"
                className={`col-6 col-md-2 mb-5 ${
                  !item?.show ? "col-half-offset" : ""
                }  `}
                data-aos="fade-right"
                data-aos-duration={`${index * 400}`}
                data-aos-once="true"
              >
                <div className="ImageWrapper">
                  <img src={item?.image} alt="" />
                </div>
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Style>
  );
}
