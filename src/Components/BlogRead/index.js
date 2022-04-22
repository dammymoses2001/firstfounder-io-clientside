/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { imageApi } from "../../urlconfig";
// import BlogForm from "../Forms/BlogForm";

const Style = styled.div`
  /* blog */
  .blog {
    background: #f8f9ff;
    overflow: unset;
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
    font-size: 12px;
  }
  .col-md-4 {
    position: sticky;
    top: 100px;
    height: 100%;
  }

  .col-md-12 .Wrapper:hover {
    background-color: #00162c !important;
    border-radius: 10px;
    color: #fff !important;
  }
  .col-md-12 .Wrapper:hover .imageWrapper {
    transform: scale(1.1);
  }
  a {
    color: #000;
  }
  img {
    height: 100%;
    object-fit: cover;
  }
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
export default function index({ data, data1 = [] }) {
  const getRandomMedia = (Medias) => {
    //console.log.log(Medias, "check");
    const newMedia = [...Medias];
    // Medias.map((media) => //console.log.log(media.id));
    const mediaright = [];
    // Shuffle array
    const length = 3;
    const shuffled = newMedia.sort(() => 0.5 - Math.random());
    // //console.log.log(shuffled, 'ame');
    for (let i = 0; i <= length; i++) {
      if (shuffled[i]) {
        // //console.log.log(shuffled[i]);
        mediaright.push(shuffled[i]);
      } else {
      }
      // shuffled[i].id ? media.push(shuffled[i]) : '';
    }
    // //console.log.log(media);
    // //console.log.log(mediaright);
    return mediaright;
  };

  return (
    <Style>
      <section className="blog-desc blog">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8 mb-5">
              <div className="mb-6">
                <p
                  dangerouslySetInnerHTML={{
                    __html: data?.article,
                  }}
                ></p>
              </div>
              {/* <div>
                <h5 className="mb-5">Leave Your Comment</h5>
                <BlogForm />
              </div> */}
            </div>
            <div className="col-md-4">
              {getRandomMedia(data1).map((item, index) => {
                if (index <= 1) {
                  return (
                    <div index={index} className="col-md-12 ps-md-4 mb-5">
                      <Link to={`/blog/${item?.id}/${item?.title}`}>
                        <div className="Wrapper px-3 py-4">
                          <BackgroundImage
                          // background={imageApi + item?.picture}
                          >
                            <div className="imageWrapper mb-3 mx-xl-2">
                              <img src={imageApi + item?.picture} alt="" />
                            </div>
                          </BackgroundImage>
                          <div className="d-flex align-items-center mb-4">
                            <div className="me-2">
                              <img
                                src={
                                  imageApi + JSON.parse(item?.author)?.picture
                                }
                                alt=""
                                width="45px"
                                height="45px"
                              />
                            </div>
                            <div className="author">
                              <p className="mb-0 text-uppercase author-name">
                                {JSON.parse(item?.author)?.name}
                              </p>
                              <p className="mb-0 date">
                                {" "}
                                {JSON.parse(item?.author)?.date}
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
