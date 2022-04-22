import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import LazyImage from "../Lazy_Load_Image";
// import { Link } from "react-router-dom";

// import HeaderImage from "../../Assets/Image/HomeImage.png";
const Style = styled.div`
  /* Header */
  .header {
    padding-top: 10rem;
    background-image: url(${(props) => props.background});
    min-height: 120vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    color: #fff;
    padding-bottom: 0;
  }
  .header h1 {
    line-height: 50px;
    font-weight: 800;
  }
  .header p {
    line-height: 30px;
  }
  .header img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }
`;
export default function index({
  background,
  sideImage,
  title,
  desc,
  buttonText,
  contactus,
  smallScreen,
  buttonLink,
  buttonLink1,
}) {
  return (
    <Style background={background}>
      <section className="header">
        <div className="container">
          <div className="row pt-6">
            <div className={smallScreen ? "col-md-6 mb-5" : "col-md-8"}>
              <h1
                className="mb-4"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {title}
              </h1>
              <p className="mb-5" data-aos="fade-right">
                {desc}
              </p>

              <div className="mb-5" data-aos="fade-up" data-aos-duration="2000">
                {buttonLink && (
                  <Link
                    class={`btn btn-primary btn-md   ${
                      smallScreen ? null : "mb-6"
                    }`}
                    to={buttonLink}
                  >
                    {buttonText}
                  </Link>
                )}
                {buttonLink1 && (
                  <a
                    class={`btn btn-primary btn-md data-aos="fade-up"  ${
                      smallScreen ? null : "mb-6"
                    }`}
                    href={buttonLink1}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {buttonText}
                  </a>
                )}
                {/* <button className=" btn-primary btn-upload">
                    {buttonText}
                  </button> */}
              </div>
            </div>
            {sideImage && (
              <div className="col d-flex align-items-end " data-aos="fade-left">
                <div>
                  <LazyImage image={sideImage} alt="" width="100%" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Style>
  );
}
