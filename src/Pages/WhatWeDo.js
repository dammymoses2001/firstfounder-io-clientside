import React from "react";
import Layout from "../Layout";
import HeaderComp from "../Components/WhatWeDoHeader";
import WhatWeDoComp from "../Components/WhatWeDoComp";
// import AboutUs from "../Components/AboutUs";

//Images
import BackgroundImage from "../Assets/Image/boothHeaderImage2.png";
import HeaderImage from "../Assets/Image/boothHeaderImage.png";

import { Link } from "react-router-dom";

export default function WhatWeDo() {
  return (
    <Layout title="What We Do">
      <HeaderComp
        BackgroundImage={BackgroundImage}
        HeaderImage={HeaderImage}
        backgroundColor=" #00162c;"
        button
      />
      <WhatWeDoComp
        title="The Venture Booth"
        backgroundColor="whitesmoke"
        body={
          <div className="w-100">
            <p>
              We partner with 10 selected start-ups as co-founders in a 3+month
              exclusive venture building process that cuts across 6 stages of
              business development which includes;
              <span className="fw-bold">
                Business Model Development, Product UI/UX Design, Product
                Software Engineering, Growth Channel Development, Fundraising
                Tour and Mentorship/Startup Advisory.
              </span>
            </p>
            <br />
            <p>
              We are focused on the following sectors: healthcare, mobility,
              manufacturing, retail, Fintech, utility, sports, agriculture,
              IOT/Emerging Tech and Education.
            </p>
            <div className=" my-5">
              <p>
                We take 15% equity or more depending on the size of startup
                portfolio. <br />
                What You Get To Benefit From Our Program?
              </p>
              <ul className="pl-5 ">
                <li>
                  {" "}
                  <span className="fw-bold">100% Technical Support </span>
                  (We develop the whole of your technology solutions)
                </li>
                <li>
                  <span className="fw-bold">Business Strategy</span> (We provide
                  business modeling, growth and marketing strategies, legal
                  support)
                </li>
                <li>
                  <span className="fw-bold">Fundraising Roadmap</span> (We
                  provide you investor links and in most cases angel investors
                  that provide seed funding) is designed for budding
                  entrepreneurs with scalable digital startup ideas that require
                  technical and integrative support of experts for easy market
                  access and growth in an emerging digital economy.
                </li>
                <li>
                  <span className="fw-bold">
                    {" "}
                    Mentorship with Industry-Experts{" "}
                  </span>
                  (We have access to a global network of insight driven industry
                  experts that help you with relevant advice and support) .
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <Link
                to="/venturebooth"
                className=" btn-primary btn-upload fw-bold "
              >
                See More
              </Link>
              {/* <button className="btn btn-primary btn-md">See More</button> */}
            </div>
          </div>
        }
      />
      <WhatWeDoComp
        title="Founders-In-Residence Program"
        backgroundColor="white"
        body={
          <div className="w-100">
            <p>
              We have in-house startups that we hire founders to lead and manage
              for 20% equity while we take 80% and handle investments. The
              Founders-In-Residence Program identifies and selects founders who
              share in our vision and connects with our mission to run our
              startup ideas.
            </p>
            <br />
            <p>
              Just before we choose a founder to work with us, we try to
              understand the founder’s profile and skills across four key
              dimensions:
              <span className="fw-bold">
                Entrepreneurial mindset; Analytical Skills; Communication
                Skills; Tech Startup Ecosystem knowledge/expertise.
              </span>
            </p>
            <div className=" my-5">
              <p>
                The founders join at the very beginning of the venture, before
                the product building begins or teams formed, so that they can
                build and own the full journey. Sometimes, we start building
                before the founder comes but often times the technical founder
                comes first and start building the product.
              </p>
            </div>

            <div className="mb-6">
              <Link
                to="/foundersinresidenceprogram"
                className=" btn-primary btn-upload fw-bold  "
              >
                See More
              </Link>
            </div>
          </div>
        }
      />
      <WhatWeDoComp
        title="MVP Accelerator Program"
        backgroundColor="whitesmoke"
        marginBottom="mb-6"
        body={
          <div className="w-100 mvp">
            <p>
              We are always happy to partner with independent founders,
              corporate professionals who want to build a tech startup as a side
              hustle and just anyone with a meaningful idea to build their
              Minimum Viable Product or full project. We build and accelerate
              the growth of your product; providing you support and advisory
              even after the contract.
            </p>
            <div className=" my-5">
              <p className="fw-bold">What we really do for you.</p>
              <ul className="pl-4">
                <li>
                  {" "}
                  <span className="fw-bold">Product Scoping</span> – We help you
                  with structured product development process consisting of
                  research, business model, complete user flow, tech scope and
                  focus discussions to align product with founder’s business
                  vision.
                </li>
                <li>
                  <span className="fw-bold">UI/UX </span>– We help you design an
                  engaging product that is easy-to-use, attractive and
                  functional with access to key product screens or prototype.
                </li>
                <li>
                  <span className="fw-bold">MVP Builder</span> – We help you go
                  to market quickly with high-quality Minimum Viable Products
                  and this comprises of product scoping, UI/UX and development.
                </li>
                <li>
                  <span className="fw-bold">Growth Hacking Services</span> – We
                  help early stage founders test new ideas or explore market fit
                  across the entire growth hacking end-to-end journey including,
                  discovery, acquisition, conversion, adoption, and retention.
                </li>
              </ul>
            </div>

            <p className="mb-5">
              Want To Talk About Your Project MVP? Schedule A Call
            </p>

            <div className="mb-6">
              <a
                href="https://calendly.com/thefirstfounders/60min"
                target="_blank"
                className=" btn-primary btn-upload fw-bold  "
                rel="noreferrer"
              >
                Schedule A Call
              </a>
            </div>
          </div>
        }
      />
    </Layout>
  );
}
