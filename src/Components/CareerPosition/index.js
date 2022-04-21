import React from "react";
import styled from "styled-components";

const Style = styled.section`
  background: #dbebfb;

  .box {
    background: #00162c;
    border-radius: 15px;
  }

  p {
    font-size: 14px;
  }
`;

export default function index({ setInfo, Careerdata }) {
  return (
    <Style>
      <div className="container" id="position">
        <h4>OPEN POSITIONS</h4>
        <hr />
        <div className="mt-4 py-3">
          {Careerdata.map((item, index) => (
            <div key={index} className="box text-white p-3 p-md-4 mb-4 ">
              <div className="row align-items-center justify-content-between">
                <div className="col-md-4">
                  <h5 className="text-uppercase">{item?.position}</h5>
                </div>
                <div className="col-md-4">
                  <p>{item?.desc}</p>
                </div>
                <div className="col-md-4">
                  <div className="text-md-center">
                    <button
                      className="btn btn-primary px-3 px-md-5"
                      onClick={() => setInfo(item)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Style>
  );
}
