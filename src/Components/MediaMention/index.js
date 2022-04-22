/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import { imageApi } from "../../urlconfig";
import { Link } from "react-router-dom";

import BackgroundImage from "../../Assets/Image/medabackground.png";

const Style = styled.div`
  .media {
    background-image: url(${BackgroundImage});
    color: #ffffff;
  }

  .media hr {
    border-top: 1px solid #ffffff61 !important;
  }

  .mediaImageWrapper {
    height: 40px;
    width: 40px;
    overflow: hidden;
  }
  .MainWrapper {
    height: 300px;
  }
  .mediaImageWrapper img,
  .MainWrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a,
  a .title {
    color: #ffffff;
    transition: 1s all;
  }
  a:hover .title {
    font-size: 17px;
    color: #ffbc00;
  }
  .media .News h5 {
    letter-spacing: 1px;
  }
  .media .news {
    border: 0.5px solid #ffffff8c;
    padding: 5px 10px;
    font-size: 10px;
  }
  .pl-md-6 {
    padding-left: 6rem;
  }
`;

export default function index({ data, data1 }) {
  //console.log.log(data1);
  return (
    <Style>
      <section className="media">
        <div className="container">
          <div className="mb-5" data-aos="fade-down" data-aos-duration="1000">
            <h5 className="text-uppercase">Press</h5>
            <hr />
          </div>
          <div className="row">
            <div
              className="col-md-6 pe-md-5 pt-3"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <a href={data1[0]?.url} target="_blank" rel="noreferrer">
                <div className="mb-5">
                  <div className="MainWrapper">
                    <img
                      src={imageApi + data1[0]?.picture}
                      alt=""
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="mb-4 title">{data1[0]?.title}</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        data[0].text.length > 180
                          ? data[0].text.substring(0, 180)
                          : data[0].text,
                    }}
                  ></p>
                </div>
                <div className="text-end mb-5">
                  <Link className=" btn-primary btn-md" to="/press">
                    See All
                  </Link>
                </div>
              </a>
            </div>
            <div
              className="col-md-5 ps-md-4 ps-lg-6 mb-5"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              {data1.map((item, index) => {
                if (index !== 0 && index <= 3) {
                  return (
                    <div key={index} className="mb-4">
                      <hr />
                      <a href={item?.url} target="_blank" rel="noreferrer">
                        <div>
                          <div className="d-flex justify-content-between mb-3">
                            <p className="news">News</p>
                            <div className="mediaImageWrapper">
                              <img src={imageApi + item?.picture} alt="" />
                            </div>
                          </div>
                          <div className="News">
                            <p className="title">{item?.title}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
