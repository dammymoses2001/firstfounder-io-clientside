import React from "react";
import styled from "styled-components";
import { imageApi } from "../../urlconfig";

const Style = styled.div`
  .Partners {
  }

  .Partners .ImageWrapper {
    /* width: 100px;
  height: 100px; */
    cursor: pointer;
    transition: 1s all;
  }
  .Partners .ImageWrapper:hover {
    transform: scale(1.1);
  }
  .Partners .ImageWrapper img {
    width: 80%;
    /* height: 60px; */
    /* display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  background: #d8f5ff; */
    /* border-radius: 50%; */
    /* margin-bottom: 2rem; */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    transition: 1s all;
  }
  .Partners .ImageWrapper:hover img {
    -webkit-filter: none; /* Safari 6.0 - 9.0 */
    filter: none;
  }

  .Partners .col-md-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default function index({ data, data1, title }) {
  return (
    <Style>
      <section className="Partners">
        <div className="container">
          <div className="mb-5">
            <h5 className="text-uppercase">{title}</h5>
            <hr />
          </div>
          <div className="row justify-content-center align-item-center">
            {data1.map((item, index) => (
              <div key={index} className="col-6 col-md-2 mb-5">
                <div className="ImageWrapper text-center">
                  <img src={imageApi + item?.picture} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Style>
  );
}
