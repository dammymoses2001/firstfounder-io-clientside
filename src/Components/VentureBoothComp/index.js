import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BoothImage from "../../Assets/Image/boothImage1.png";

const Style = styled.div`
  .imageWrapper img {
    width: 90%;
  }
  .booth {
    background: #f8f9ff;
    margin: 0;
    padding: 5rem 0 2rem 0;
  }
  .booth .desc p {
    margin-bottom: 27px;
    text-align: justify;
  }
`;

export default function VentureBooth() {
  return (
    <Style>
      <section className="booth">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-md-3 pe-md-4 mb-4"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="imageWrapper">
                <img src={BoothImage} alt="" />
              </div>
            </div>
            <div
              className="col-md-9"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <h5 className="text-uppercase">Introduction</h5>
              <div className="w-25 mb-4">
                <hr />
              </div>
              <div className="mb-5 desc">
                <p>
                  The Venture Booth is designed for budding entrepreneurs with
                  scalable digital startup ideas that require technical and
                  integrative support of experts for easy market access and
                  growth in an emerging digital economy.
                </p>

                <p>
                  We devote our resources to developing your product, building
                  the technology application, raising funds, creating
                  appropriate growth strategies, the needed mentorship and
                  networking for growth.
                </p>
                <p>
                  We provide support for founders with ideas that require
                  technical, business and mentorship support for 15% equity and
                  above depending on the size of portfolio. 10 Selected
                  start-ups go through a 3+month exclusive venture building
                  process that cuts across 6 stages of business development
                  which includes;Business Model Development, Product UI/UX
                  Design, Product Software Engineering, Growth Channel
                  Development, Fundraising Tour and Mentorship/Startup Advisory.
                </p>
                {/* <p></p> */}
              </div>
              <div>
                <Link
                  to="/ventureboothapplication"
                  class=" btn-primary btn-upload fw-bold "
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
