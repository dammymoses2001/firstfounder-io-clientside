import React from "react";
import Layout from "../Layout";
import styled from "styled-components";
import CareerImage from "../../src/Assets/Image/careerImage.svg";
import GetInTouch from "../Components/GetInTouch";
import { FaArrowRight } from 'react-icons/fa';


const Style = styled.section`
  background-image: url(${CareerImage});
  h1{
    text-shadow: -4px 2px 4px rgba(51, 204, 204, 0.4);
    font-size: 50px;
    font-weight: 900 !important;
  }
  p{
    line-height: 30px;
    font-weight: 500;
  }
  .input-group {
    height: 3.5rem!important;
    width: 100%!important;
  }
  .input-bg{
    background: #ECF3FE;
  }
  .ml{
    margin-left: -25px;
  }
 
`;

export const NetworkTemplate = ({icon, title, body})=>{
  return(
    <div className="col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded">
        <div className="card-body pb-5 text-center text-sm-start">
          <div>
            <img className="" src={icon} alt="Icon" />
          </div>
          <h6 className="card-title fw-bold">{title}</h6>
          <p className="card-text small">{body}</p>
     
        </div>
      </div>
    </div>
  )
}

const FoundersNetwork =()=> {
  return (
    <Layout title="Founders Network">
  
      <Style>
        <div className="container mt-custom">
          <div className="row d-flex justify-content-center align-items-center g-3">
            <div className="col-lg-6 text-center text-sm-start">
              <h1 className="fw-bolder mb-4">THE FOUNDERS NETWORK</h1>
              <p>This is a digital platform to connect and network with other early stage and experienced founders to gain the necessary support, mentorship, knowledge needed to build your own startup and thrive in the digital ecosystem.</p>
              <div className="input-group ">
                <input type="text" className="form-control border-0 input-bg" placeholder="Enter email address" />
                <button type="button" className="btn bg-main-color fw-bold"><span className="mx-3">Join Us</span> <FaArrowRight /></button>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid ml" src="/img/network.svg" alt="mentor Img" />
            </div>
          </div>
        </div>
      </Style>

      <section className="container">
        <div className="row my-4">
          <div className="mb-4">
            <h5
              className="text-uppercase"
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-once={true}
            >
              Why Join The Community (Benefits)
            </h5>
            <div className="w-25"><hr /></div>
            <p className="col-lg-6 small">You get access to like-minded people who are, mentors and also a broad list of advisors on the Africa fast rising startup studio platform. There are opportunities by engaging through online and physical events or simply connecting with members on the group. </p>
            <p className="my-3 small">Gain access to :</p>
         
          </div>
        </div>

        <div className="d-flex justify-content-between flex-wrap">
          <NetworkTemplate 
            icon="/img/weeklySessions.svg"
            title="Weekly Sessions"
            body="Weekly startup series session open to all members from some of Africa brightest founders.  questions about your startup and offer meaningful contributions."
          />
          <NetworkTemplate 
            icon="/img/physicalEvents.svg"
            title="Physical Events"
            body="While we promote online engagement, the physical is also necessary to talk with founders and other business executives one-on-one , exchange contacts and build a valuable network from there."
          />
          <NetworkTemplate 
            icon="/img/pitchSessions.svg"
            title="Open Pitch Sessions"
            body="Get opportunities monthly to pitch your startup and gain access to early stage funding from investors."
          />
     
        </div>
        <div className="container join">
          <div className="row d-flex justify-content-center align-items-center g-4">
            <div className="col-lg-6">
              <h5
                className="text-uppercase"
                data-aos="fade-down"
                data-aos-duration="400"
                data-aos-once={true}
              >
                Who should join
              </h5>
              <div className="w-25"><hr /></div>

              <div className="small">
                <li className="mb-3">The question whether to join or not to join depends on the level of efficiency your business wants to operate on, how well you are apprised of California labor laws</li>
                <li className="mb-3">The question whether to join or not to join depends on the level of efficiency your business wants to operate on, how well you are apprised of California labor laws</li>
                <li className="mb-3">The question whether to join or not to join depends on the level of efficiency your business wants to operate on, how well you are apprised of California labor laws</li>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src="/img/join.svg" alt="mentor Img" />
            </div>
          </div>
        </div>
      </section>


      <GetInTouch />

    </Layout>
  );
}


export default FoundersNetwork