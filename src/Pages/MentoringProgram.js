import React from "react";
import Layout from "../Layout";
import styled from "styled-components";
import CareerImage from "../../src/Assets/Image/careerImage.svg";


import mentor from "../Assets/Image/mentor.png";

const Style = styled.section`
  background-image: url(${CareerImage});

  h1 {
    text-shadow: -4px 2px 4px rgba(51, 204, 204, 0.4);
    font-size: 50px;
    font-weight: 900 !important;
  }

  p {
    line-height: 30px;
    font-weight: 500;
  }
`;

export default function MentoringProgram() {

  
  return (
    <Layout title="Founders-In-Residence-Program">
  
      <Style>
        <div className="container mt-custom">
          <div className="row d-flex justify-content-center align-items-center g-3">
            <div className="col-lg-6">
              <h1 className="text-center fw-bolder mb-4">Call for Mentors (Startup Advisors)</h1>
              <p className="text-center">Mentoring and choosing to shape the future of young people while discussing ideas for growth and impact is always a boon for mentees.</p>
              <div className="text-center">
                <a href="#mentor" className="btn btn-primary  py-3 px-4">Get Started</a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img className="img-fluid img-width" src={mentor} alt="mentor Img" />
            </div>
          </div>
        </div>
      </Style>

      <section className="container" id="mentor">
        <div className="row my-4">
          <div className="mb-4">
            <h4 className="mentor-title">Call for Mentors</h4>
            <p>Mentoring and choosing to shape the future of young people while discussing ideas for growth and impact is always a boon for mentees.</p>
            <p>For the first time,  FirstFounders is calling on senior management executives and leaders from different backgrounds to share their unique academic and professional experience, knowledge and inspiration. </p>
            <p>Do you have at least 8 years of professional work experience? Are you willing to share your knowledge with early-stage entrepreneurs? Do you have a heart for developing others and leaving a legacy? </p>
            <p>If you think that describes you, then FirstFounders is looking for you.</p>
            <p>The goal of the mentoring opportunity is to facilitate one to one structured but informal interactions between you and our Founders. </p>
          </div>

          <div className="mb-4">
            <h4 className="mentor-title">Benefits</h4>
            <p>An opportunity to guide Founders to achieve their business goals and enhance their personal and professional development Build relationships with entrepreneurs for future collaborations and partnerships Serve as a source of inspiration FirstFounders will issue you a certificate of participation to all successful mentoring teams </p>
          </div>

          <div className="mb-4">
            <h4 className="mentor-title">How does it work?</h4>
            <p>The program will run from June to December 2022, and will include mentorship support with a matched early stage entrepreneur. Mentorship would involve several meeting sessions -  online and face-to-face.</p>
            <p>Upon review of your application, we expect mentors to develop a strategic mentoring plan, communicate consistently through various communication channels and provide mid-term and final evaluation of the mentorship progress to our team. Ultimately, we hope that the interactions will develop into a long-term relationship.</p>
            <p>Mentors should be willing to devote at least an hour every week to mentoring a Founder. </p>
          </div>

          <div className="mb-4">
            <h4 className="mentor-title">Signup Details</h4>
            <p>Please complete the Mentor Application here  to begin your journey of supporting our startup community. This call is open to mentors from different regions. You are requested to apply before May 20, 2022</p>
            <a rel="noreferrer" href="https://forms.gle/khpFCZPLMcGVWVwf8" target="_blank" className="btn btn-primary">Apply Here</a>
          </div>
          <p>If you have any questions or concerns, please do not hesitate to reach out via email at  <a href="mailto:hello@thefirstfounders.com" target="_blank" rel="noreferrer"> hello@thefirstfounders.com </a>. We look forward to connecting and working with you!</p>

        </div>
      </section>

    </Layout>
  );
}
