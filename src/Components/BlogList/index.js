import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
// import LazyImage from "../Lazy_Load_Image";
import { imageApi } from "../../urlconfig";

const Style = styled.div`
  /* blog */

  .blog {
    background: #f8f9ff;
    padding-top: 8rem;
  }
  .blog .imageWrapper img {
    width: 100%;
  }

  .blog .author h5 {
    font-size: 16px;
  }
  .blog .author p {
    /*  */
  }
  .blog .date {
    font-size: 13px;
    letter-spacing: 1px;
  }
  .blog .author {
    font-weight: 500;
    font-size: 15px;
  }
  .blog .title,
  .blog .author-name {
    font-weight: 600;
  }
  .blog .blog-desc {
    font-size: 13px;
  }
  .col-md-6 .Wrapper {
    color: #000 !important;
  }
  .col-md-6 .Wrapper:hover {
    background-color: #00162c !important;
    border-radius: 10px;
    color: #fff !important;
  }
  .col-md-6 .Wrapper:hover .imageWrapper {
    transform: scale(1.1);
  }
  img {
    height: 100%;
    object-fit: cover;
  }
  .authorWrapper {
    width: 40px;
    height: 40px;
  }

  .authorWrapper img {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
  }
  /* @media only screen and (min-width: 769px) {
    .col-lg-4 {
      width: 27.333333% !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .col-lg-4 {
      width: 50% !important;
    }
  }
  @media only screen and (max-width: 560px) {
    .col-lg-4 {
      width: 100% !important;
    }
  } */
  /* .blog .imageWrapper,
  .blog-desc .imageWrapper {
    background-image: url("../Images/HomeImage.png");
    background-size: cover;
    height: 250px;
  } */
`;

const BackgroundImage = styled.div`
  .imageWrapper {
    background-image: url(${(props) => props.background});
    background-size: cover;
    height: 280px;
    border-radius: 10px;
    transition: 1s all;
  }
`;

export default function index({ data = [], data1 }) {
  return (
    <Style>
      <section className="blog">
        <div className="container">
          <div className="row ">
            {data1.map((item) => (
              <div className="col-sm-6 col-md-6 col-lg-4 px-md-4 py-md-3 mb-5">
                <Link to={`/blog/${item?.id}/${item?.title}`}>
                  <div className="Wrapper p-3 p-md-4">
                    {/* background={imageApi + item?.picture} */}
                    <BackgroundImage>
                      <div className="imageWrapper mb-3 ">
                        <img src={imageApi + item?.picture} alt="" />
                      </div>
                    </BackgroundImage>

                    <div className="d-flex align-items-center mb-4">
                      <div className="me-2">
                        <div className="authorWrapper">
                          <img
                            src={imageApi + JSON.parse(item?.author)?.picture}
                            alt=""
                            width="45px"
                            height="45px"
                          />
                        </div>
                      </div>
                      <div className="author">
                        <p className="mb-0 text-uppercase author-name">
                          {JSON.parse(item?.author)?.name}
                        </p>
                        <p className="mb-0 date">
                          {" "}
                          {moment(item?.created_at).format("MMM Do YY")}
                        </p>
                      </div>
                    </div>
                    <div className="blog-details mb-4">
                      <p className="mb-0 title mb-2 text-uppercase">
                        {item?.title}
                      </p>
                      <p
                        className="mb-0 blog-desc"
                        dangerouslySetInnerHTML={{
                          __html:
                            item?.article.length > 180
                              ? item?.article.substring(0, 180) + "..."
                              : item?.article + "...",
                        }}
                      ></p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Style>
  );
}
