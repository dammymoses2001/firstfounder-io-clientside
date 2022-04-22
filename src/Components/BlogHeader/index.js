import moment from "moment";
import React from "react";
import styled from "styled-components";
// import BackgroundImage from "../../Assets/Image/blogHeader.png";
import { imageApi } from "../../urlconfig";

const Style = styled.div`
  /*  */
  .blogheader {
    background-image: url(${(props) => props.background});
    min-height: 120vh;
    background-size: cover;
    color: #ffffff;
    position: relative;
  }
  .container {
    z-index: 1;
  }

  section::before {
    bottom: 0;
    content: "";
    background: #000000c2;
    /* width: 100%; */
    position: absolute;
    /* height: 400px; */
    top: 0;
    z-index: 0;
    left: 0;
    right: 0;
  }

  .blogheader h1 {
    color: #ffbc00;
  }
  .blogheader span {
    color: #33cccc;
  }
  .blogheader .written {
    font-size: 15px;
  }
`;

export default function index({ data }) {
  return (
    <Style background={imageApi + data?.picture}>
      <section className="blogheader d-flex align-items-end">
        <div className="container">
          <div className="w-75 mb-5">
            <h1 className="mb-2">{data?.title}</h1>
            <p className="text-uppercase mb-1">Blog</p>
            <p className="written">
              Written by <span>{JSON.parse(data?.author)?.name} </span>{" "}
              {moment(JSON.parse(data.author)?.created_at).format("MMM Do YY")}
            </p>
          </div>
        </div>
      </section>
    </Style>
  );
}
