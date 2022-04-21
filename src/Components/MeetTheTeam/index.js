/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
// import LazyImage from '../Lazy_Load_Image'
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";
// import { imageApi } from "../../urlconfig";

// import LinkedIn from "../../Assets/Image/LinkedIn.png";

const Style = styled.div`
  section {
    padding-top: 7rem;
  }
  /*  */
  .team {
    background: #f8f9ff;
  }
  .team img {
    /* width: 233px; */
    width: 100%;
    height: 280px;
    max-width: none;
    opacity: 1;
    object-fit: cover;
  }
  .team span {
    position: absolute;
    right: 25px;
    top: 20px;
    transition: 1s all;
    cursor: pointer;
  }
  .team span:hover {
    transform: scale(1.2);
    background-color: #fff;
  }
  .team button {
    color: #000000;
  }
  /* peoplearesaying */
  .peoplearesaying {
  }
  .peoplearesaying .IconWrapper img {
    width: 90px;
    height: auto;
  }
  @media only screen and (min-width: 769px) {
    .col-md-4 {
      width: 27.333333% !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .col-md-4 {
      width: 50% !important;
    }
  }
  @media only screen and (max-width: 400px) {
    .col-md-4 {
      width: 100% !important;
    }
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: top;
  background-size: cover;
  height: 300px;
`;

export default function index({
  title,
  data = [],
  data1 = [],
  button,
  check,
  size = 2,
  header,
}) {
  //console.log.log(data1);
  return (
    <Style id={check ? "team" : ""}>
      <section className="team">
        <div className="container">
          <div className="mb-5">
            <h3
              className="text-uppercase"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {header}
            </h3>
            <hr />
          </div>

          <div className="row mb-5">
            <div className="col-md-7">
              <p>{title}</p>
            </div>
          </div>
          <div className="row justify-content-between">
            {data1.map((item, index) => {
              if (index <= size) {
                return (
                  <div
                    key={index}
                    className="col-12 col-sm-6 col-md-4 mb-5"
                    data-aos="fade-right"
                    data-aos-duration={`${300 * 3}`}
                  >
                    <div className="mb-3 position-relative">
                      <BackgroundImage backgroundImage={item?.Picture}>
                        <a
                          href={item.linkedInurl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>
                            <ImLinkedin
                              color={"#0a66c2"}
                              size={30}
                              //   style={{ backgroundColor: "#fff" }}
                            />
                          </span>
                        </a>
                      </BackgroundImage>
                      {/* <img src={imageApi + item?.picture} alt="" /> */}
                    </div>
                    <h5 className="text-capitalize">{item?.name}</h5>
                    <p>{item?.position}</p>
                  </div>
                );
              }
            })}
          </div>
          {button && (
            <div
              className="text-end mt-3"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              <Link to="/team" className="btn btn-primary btn-lg">
                Discover the team
              </Link>
            </div>
          )}
        </div>
      </section>
    </Style>
  );
}
