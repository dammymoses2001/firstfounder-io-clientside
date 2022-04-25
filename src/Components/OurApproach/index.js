import React from "react";
import styled from "styled-components";

const Style = styled.div`
  /* aapproach */

  .approach {
    background: #f8f9ff;
  }
  .form-group {
    margin-bottom: 2rem;
  }
  .form-group p {
    color: #3b3b3b9e;
  }
  .approach .card {
    /* height: 100%; */
    min-height: 200px;

    background: #ffffff;
    border-radius: 5px;
    border: none;
  }
  .approach .imageWrapper {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #fff;
    border-radius: 50%;
  }
  .approach .row .col-md-6 .imageWrapper,
  .approach .row .col-md-6 .card {
    transition: 1s all;
  }
  .approach .row .col-md-6:nth-child(1):hover .imageWrapper,
  .approach .row .col-md-6:nth-child(1) .card:hover {
    background-color: #ade0f3;
  }
  .approach .row .col-md-6:nth-child(2):hover .imageWrapper,
  .approach .row .col-md-6:nth-child(2):hover .card {
    background-color: #f1d392;
  }
  .approach .row .col-md-6:nth-child(3):hover .imageWrapper,
  .approach .row .col-md-6:nth-child(3):hover .card {
    background-color: #bbadf3;
  }
  .approach .row .col-md-6:nth-child(4):hover .imageWrapper,
  .approach .row .col-md-6:nth-child(4):hover .card {
    background-color: #bbf3ad;
  }
`;

export default function index({ data }) {
  return (
    <Style id="approach">
      <section className="approach">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-once="true"
            >
              <h5>OUR APPROACH</h5>
              <hr />
              <p className="mt-5">
                We team up with founders over 6 to 12 months to turn ideas into
                independent companies following these processes 👉
              </p>
            </div>
            <div className="col-md-8">
              <div className="row">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="col-md-6 mb-4 "
                    data-aos="fade-down"
                    data-aos-duration="400"
                    data-aos-once="true"
                  >
                    <div className="mb-3 imageWrapper">
                      <img src={item?.image} alt="" />
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title text-uppercase">
                          {item?.title}
                        </h5>
                        <p className="card-text">{item?.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
