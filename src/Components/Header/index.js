import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import LazyImage from "../Lazy_Load_Image";

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
            <div className="col-xl-7 col-lg-10">
              <h1
                className="mb-4 header-style text-center text-sm-start"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                {title}
              </h1>
              <p className="mb-5" data-aos="fade-right">
                {desc}
              </p>

              <div className="mb-5" data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
                {buttonLink && (
                  <Link
                    className={`btn py-3 btn-primary btn-md   ${
                      smallScreen ? null : "mb-6 text-center text-sm-start"
                    }`}
                    to={buttonLink}
                  >
                    {buttonText}
                  </Link>
                )}
                {buttonLink1 && (
                  <a
                  className={`btn btn-primary btn-md data-aos="fade-up"  ${
                      smallScreen ? null : "mb-6"
                    }`}
                    href={buttonLink1}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {buttonText}
                  </a>
                )}
            
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
