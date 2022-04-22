import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../Assets/Image/startupImage.png";
import Slider from "react-slick";
import { imageApi } from "../../urlconfig";

const Style = styled.div`
  /* built */
  .built {
    background-image: url(${BackgroundImage});
    background-size: cover;
    color: #fff;
  }
  .built hr {
    border-top: 1px solid #ffffff61 !important;
  }
  .built .project h2,
  .built .project a {
    color: #33cccc !important;
  }
  .imageWrapper {
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .built .project img {
    width: 80%;
    /* height: 100%; */
    object-fit: cover;
  }

  .built .project p {
    font-size: 13px;
    line-height: 27px;
  }

  .built .project .col-md-6 {
    margin-bottom: 7rem;
  }
`;

export default function index({ data, data1 = [] }) {
  const settings = {
    arrows: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    dot: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Style id="startup">
      <section className="built">
        <div className="container">
          <div className="mb-5 container">
            <h3 className="text-uppercase">startups we are building</h3>
            <hr />
          </div>
          <Slider {...settings}>
            {data1.map((item, index) => (
              <div key={index} className={`project mb-5 ${" px-md-4"}`}>
                {/* <div
                className={`project mb-5 ${
                  index % 2 !== 0 ? " ps-md-5" : " pe-md-5"
                }`}
              > */}
                <div className="row mb-3 ">
                  <div className="col-9">
                    <h2 className="text-uppercase mb-3 me-2">
                      {item?.companyName}
                    </h2>
                    <p>{item?.sector}</p>
                  </div>
                  <div className="col-3">
                    <div className="d-flex justify-content-center">
                      <div className="imageWrapper">
                        <img src={imageApi + item?.picture} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-4">{item?.pitchStatement}</p>
                <a href={item?.website} target="_blank" rel="noreferrer">
                  {"visit"}
                </a>
              </div>
            ))}
          </Slider>
          {/* <div className="row project">
            {data.map((item, index) => (
              <div
                key={index}
                className={`col-md-6 ${
                  index % 2 !== 0 ? " ps-md-5" : " pe-md-5"
                }`}
              >
                <div className="row mb-3">
                  <div className="col-9">
                    <h2 className="text-uppercase mb-3">{item?.name}</h2>
                    <p>Manufacturing</p>
                  </div>
                  <div className="col-3">
                    <div className="d-flex justify-content-center">
                      <img src={item?.image} alt="" />
                    </div>
                  </div>
                </div>
                <p className="mb-4">{item?.text}</p>
                <a href={item?.link}>{item?.link}</a>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </Style>
  );
}
