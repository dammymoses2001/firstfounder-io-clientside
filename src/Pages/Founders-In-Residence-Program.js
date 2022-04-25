import React from "react";
import Layout from "../Layout";
import Header from "../Components/Header";
import WhatWeDoComp from "../Components/WhatWeDoComp";
import GetInTouch from "../Components/GetInTouch";
//
import HeaderImage from "../Assets/Image/header2.png";
import { Link } from "react-router-dom";
export default function FoundersInResidence() {
  return (
    <Layout title="Founders-In-Residence-Program">
      <Header
        background={HeaderImage}
        title="We are building the future together with smart talents across the world"
        desc="We have in-house startups that we hire founders to lead and manage for 20% equity while we take 80% and handle investments. The Founders-In-Residence Program identifies and selects founders who share in our vision and connect with our mission to run our startup ideas."
        buttonText="Apply"
        buttonLink="/venturefoundersinresidence"
      />
      <WhatWeDoComp
        title="FOUNDERS-IN-RESIDENCE PROGRAM"
        backgroundColor="#f8f9ff"
        body={
          <div className="w-75">
            <p>
              Just before we choose a founder to work with us, we try to
              understand the founder’s profile and skills across four key
              dimensions:
            </p>
            <ul className="pl-4 my-5">
              <li>Entrepreneurial mindset</li>
              <li>Analytical Skills</li>
              <li>Communication Skills</li>
              <li>Tech Startup Ecosystem knowledge/expertise.</li>
            </ul>
            <p className="mb-5">
              The founders join at the very beginning of the venture, before the
              product building begins or teams formed, so that they can build
              and own the full journey. Sometimes, we start building before the
              founder comes but often times the technical founder comes first
              and start building the product.
            </p>
            <div>
              <Link
                className="btn btn-primary btn-md mb-6 fw-bold"
                to="/venturefoundersinresidence"
              >
                Apply
              </Link>
            </div>
          </div>
        }
      />
      <GetInTouch background="#fff" />
    </Layout>
  );
}
