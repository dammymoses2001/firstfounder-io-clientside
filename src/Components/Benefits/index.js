import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Style = styled.div`
  .whatprogram .card {
    background: #ffbc00;
    border-radius: 10px;
    border: 1px solid #ffbc00;
  }
  .whatprogram .card h5 {
    font-weight: 700;
  }
  .whatprogram .card p {
    font-size: 12px;
  }
`;

export default function index({ data }) {
  return (
    <Style>
      <section className="whatprogram">
        <div className="container">
          <div className="mb-5" data-aos="fade-right" data-aos-duration="500">
            <h5 className="text-uppercase">
              What You Get To Benefit From Our Program?
            </h5>
            <div className="w-25">
              <hr />
            </div>
          </div>
          <div className="row gx-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 mb-4"
                data-aos="fade-down"
                data-aos-duration="500"
              >
                <div className="card text-center h-100 mx-3">
                  <div className="card-body">
                    <div>
                      <img src={item?.image} alt="" />
                    </div>
                    <h5 className="my-4">{item?.title}</h5>
                    <p className="card-text">{item?.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="text-center mt-5"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <Link
              to="/ventureboothapplication"
              className=" btn-primary btn-upload fw-bold "
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </Style>
  );
}
