import React from "react";
import Layout from "../Layout";
import styled from "styled-components";
import CareerImage from "../../src/Assets/Image/careerImage.svg";
import GetInTouch from "../Components/GetInTouch";
import { Link } from "react-router-dom";
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
`;

export const PitchTemplate = ({section, image, title, body, link})=>{
  return(
    <div className="col-sm-3 mb-4">
      <div className="card">
        <div className="card-body">
          <p className="text-muted mb-2 small">{section}</p>
          <div>
            <img className="img-fluid w-100 mb-3" src={image} alt="Frame" />
          </div>
          <h4 className="card-title fw-bold">{title}</h4>
          <p className="card-text small">{body}</p>
          <div className="w-100 text-end">
            <Link to={link}>
              <span className="color-primary fw-bold">Pitch Deck <FaArrowRight /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const PitchDeck =()=> {
  return (
    <Layout title="Pitch Deck">
  
      <Style>
        <div className="container mt-custom">
          <div className="row d-flex justify-content-center align-items-center g-3">
            <div className="col-lg-6 text-center text-sm-start">
              <h1 className="fw-bolder mb-4">JOIN US TO INVEST IN AFRICAN STARTUPS!</h1>
              <p>At first founders we partner with early-stage founders with scalable ideas build the technology needed for their startups to launch and grow within emerging market in Africa and beyond.We are looking for investors to share in the growth of these startups.</p>
            </div>
            <div className="col-lg-6 text-center">
              <img className="img-fluid" src="/img/pitchDeck.svg" alt="mentor Img" />
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
              Why should you invest in our startups?
            </h5>
            <div className="w-25"><hr /></div>
            <p>Early-stage founders find it difficult to access funding, often adopt inappropriate development method or have issues with identifying an ideal market for their MVPs, But with firstfounders Inc. guiding them through the steps of ideation, validation, creation down to spin-out, these startups have a top MVP’s(minimum viable product),that are solving the ever blooming African market.</p>
            <p>So yes! Join us to invest in these promising African startups.</p>
          </div>
        </div>

        <div className="row">
          
          <PitchTemplate 
            section="Sport" 
            image="/img/frame.png" 
            title="Socialiga" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />

          <PitchTemplate 
            section="Finance" 
            image="/img/frame.png" 
            title="Cashia" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />

          <PitchTemplate 
            section="Finance" 
            image="/img/frame.png" 
            title="QPay" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />

          <PitchTemplate 
            section="Agriculture" 
            image="/img/frame.png" 
            title="Sunla" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />

          <PitchTemplate 
            section="Agriculture" 
            image="/img/frame.png" 
            title="Danmurray" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />

          <PitchTemplate 
            section="Sport" 
            image="/img/frame.png" 
            title="Socialiga" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />

          <PitchTemplate 
            section="Fintech" 
            image="/img/frame.png" 
            title="Syarpa" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />

          <PitchTemplate 
            section="Manufacturing" 
            image="/img/frame.png" 
            title="Dreamhouse" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />

          <PitchTemplate 
            section="Finance" 
            image="/img/frame.png" 
            title="Maya Organics" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />

          <PitchTemplate 
            section="Mobility" 
            image="/img/frame.png" 
            title="Couriax" 
            body="Lacus tortor tortor odio cursus eget viverra mauris arcu, ante. A quis molestie arcu nisi. Diam lacus." 
            link="/"  
          />
        
        </div>

      </section>
      <GetInTouch />

    </Layout>
  );
}


export default PitchDeck