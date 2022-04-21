import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../Assets/Image/headerbackground3.png";
import howitworksImage from "../../Assets/Image/howitworksImage.png";
import LazyLoad from "../Lazy_Load_Image";

const Style = styled.div`
  .header3 {
    background: url(${BackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding-top: 7rem;
  }
  .header3 h1 {
    color: #ffffff;
    font-weight: 800;
  }
  .header3 img {
    width: 80%;
    object-fit: cover;
  }
`;
// import HeaderBackground from '../Header3/'

export default function index() {
  return (
    <Style>
      <section className="header3 d-flex align-items-center">
        <div className="container text-center">
          <div className="mb-6" data-aos="fade-down" data-aos-duration="500">
            <h1 className="mt-5">How We Work</h1>
          </div>
          <div data-aos="fade-right" data-aos-duration="500">
            <LazyLoad image={howitworksImage} alt="" />
          </div>
        </div>
      </section>
    </Style>
  );
}
