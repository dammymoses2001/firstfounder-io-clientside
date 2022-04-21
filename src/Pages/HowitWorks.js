import React from "react";
import Layout from "../Layout";
import WhatWeDoComp from "../Components/WhatWeDoComp";
import GetInTouch from "../Components/GetInTouch";
import Header3 from "../Components/Header3";

import { BsDot } from "react-icons/bs";

export default function HowitWorks() {
  return (
    <Layout title="How it Works">
      <Header3 />
      <WhatWeDoComp
        title="HOW WE WORK"
        backgroundColor="#fff"
        body={
          <div class="w-750">
            <div class="howitworks">
              <div
                className="mb-4"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <h5 class="text-uppercase mb-2">
                  <span>
                    <BsDot />
                  </span>{" "}
                  Ideation
                </h5>
                <p className="ms-4">
                  <span> Immersive Focus Sessions </span> - We engage in an
                  extensive discussion to understand the product vision and
                  align this vision to the mission of founders to develop a
                  substantiated idea.
                </p>
              </div>
              <div
                className="mb-4"
                data-aos="fade-down"
                data-aos-duration="500"
              >
                <h5 class="text-uppercase mb-2">
                  <span>
                    <BsDot />
                  </span>{" "}
                  Validation
                </h5>
                <p className="ms-4">
                  <span> Research Product Development</span> – We embark on a
                  robust qualitative and quantitative research analysis to find
                  tangible product-market-fit for the idea.
                </p>
              </div>
              <div
                className="mb-4"
                data-aos="fade-down"
                data-aos-duration="500"
              >
                <h5 class="text-uppercase mb-2">
                  <span>
                    <BsDot />
                  </span>{" "}
                  Creation
                </h5>
                <p className="ms-4">
                  <span>Product Design & Prototyping </span> – The UX/UI of your
                  product is an important part of the startup building as such
                  we create something that truly puts the user (customer) in
                  mind.
                </p>
                <p className="ms-4">
                  <span> Product Software Engineering </span> – We deploy the
                  best developers to work with you on the technology of your
                  prototype so as to arrive at a functional product that the
                  users can interact with.
                </p>
              </div>
              <div
                className="mb-4"
                data-aos="fade-down"
                data-aos-duration="500"
              >
                <h5 class="text-uppercase mb-2">
                  <span>
                    <BsDot />
                  </span>{" "}
                  Spinning Out
                </h5>
                <p className="ms-4">
                  <span> Product Testing</span> – The users that will enable you
                  measure and learn everything you need to make the product
                  better is sourced for your product.
                </p>
                <p className="ms-4">
                  <span>Growth Hacking & Marketing</span> – We work with you to
                  test the product or explore market fit across the entire
                  growth hacking end-to-end journey including, discovery,
                  acquisition, conversion, adoption, and retention.
                </p>
              </div>
              <div
                className="mb-4"
                data-aos="fade-down"
                data-aos-duration="500"
              >
                <h5 class="text-uppercase mb-2">
                  <span>
                    <BsDot />
                  </span>{" "}
                  Scaling-Up
                </h5>
                <p className="ms-4">
                  <span>Fundraising</span> – We understand that capital is
                  needed to keep the startup running and independent hence we
                  allocate a venture fund and also partner with key investors
                  spread across the world to inject pre-seed and seed funding
                  into your startup.
                </p>
              </div>

              <div
                className="mb-4"
                data-aos="fade-down"
                data-aos-duration="500"
              >
                <h5 class="text-uppercase mb-2">
                  <span>
                    <BsDot />
                  </span>
                  Exits
                </h5>
                <p className="ms-4">
                  <span> Stake Sales</span> – Startups once become babies in our
                  hands and we expect that one day, they will become adults and
                  ready to live their own lives. At that stage, we sell our
                  stakes or keep some equity and exit from the decision making
                  of the company
                </p>
                <p className="ms-4">
                  <span>Buy-Out</span> – We are also open to early buy out
                  whenever possible especially when another party is acquiring
                  your startup.
                </p>
              </div>
            </div>
          </div>
        }
      />
      <GetInTouch />
    </Layout>
  );
}
