/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import LazyImage from "../Lazy_Load_Image";
// import { ImLinkedin } from "react-icons/im";
// import { Link } from "react-router-dom";
import { imageApi } from "../../urlconfig";

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
        /* width: 100px;
    height: 100px;
    max-width: none;
    opacity: 1; */
        object-fit: cover;
        width: 100%;
    }
    /* .team span {
    position: absolute;
    right: 25px;
    top: 20px;
    transition: 1s all;
    cursor: pointer;
  } */
    /* .team span:hover {
    transform: scale(1.2);
    background-color: #fff;
  } */
    .team span {
        height: 80px;
        width: 80px;
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

    a {
        color: #000000;
    }

    /* @media only screen and (min-width: 769px) {
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
  }*/
`;

const BackgroundImage = styled.div`
    background-image: url(${(props) => props.backgroundImage});
    background-position: top;
    background-size: cover;
    height: 300px;
    /* background-color: blue; */

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: end;
`;

export default function index({
    title,
    data = [],
    data1 = [],
    button,
    check,
    size = 2,
}) {
    return (
        <Style id={check ? "team" : ""}>
            <section className="team">
                <div className="container">
                    {/* <div className="mb-5">
            <h3 className="text-uppercase">Meet the team</h3>
            <hr />
          </div> */}

                    <div className="row mb-5">
                        <div className="col-md-7">
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className="row ">
                        {data1.map((item, index) => (
                            <div
                                key={index}
                                className="col-12 col-sm-6 col-md-4 mb-5 px-sm-5"
                            >
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="mb-3 position-relative">
                                        <BackgroundImage
                                            backgroundImage={
                                                imageApi + item?.picture
                                            }
                                        >
                                            <span className="mb-3">
                                                <LazyImage
                                                    image={
                                                        imageApi +
                                                        item?.press_logo
                                                    }
                                                />
                                            </span>
                                        </BackgroundImage>
                                        {/* <img src={imageApi + item?.picture} alt="" /> */}
                                    </div>
                                    {/* <h5 classNameName="text-capitalize">{item?.title}</h5> */}
                                    <p className="fw-bolds">{item?.title}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Style>
    );
}
