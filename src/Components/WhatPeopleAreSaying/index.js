import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { imageApi } from "../../urlconfig";

const Styled = styled.div`
  /* peoplearesaying */
  overflow: hidden;
  .peoplearesaying {
  }
  .peoplearesaying .IconWrapper img {
    width: auto;
    height: 90px;
  }
  .icon {
    flex: 1;
  }
  .name {
    flex: 5;
  }
`;

export default function index({ data, data1 = [] }) {
  const silde = data1.length <= 1 ? 1 : 2;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: silde,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: silde,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <Styled>
      <section className="peoplearesaying">
        <div className="container">
          <div className="mb-5">
            <h3 className="text-uppercase">what people are saying</h3>
            <hr />
          </div>

          <Slider {...settings}>
            {data1.map((item, index) => (
              <div key={index} className="">
                <div className="px-md-5">
                  <div className="mb-4">
                    <div className="d-flex align-item-center">
                      <div className="icon me-1">
                        <div className="IconWrapper">
                          <img src={imageApi + item?.picture} alt="" />
                        </div>
                      </div>
                      <div className="name d-flex flex-column justify-content-center">
                        <h4>{item?.name}</h4>
                        <p className="mb-0">{item?.position}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>{item?.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Styled>
  );
}
