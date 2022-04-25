import React from "react";
import styled from "styled-components";
import StartupBanner from '../../Assets/Image/startup.svg';
import { Link } from "react-router-dom"

const Style = styled.div`
  .banner{
    padding: 5rem 0;
    background-image: url(${(props) => props.background});
    min-height: 120vh auto;
    background-position: center;
    background-size: cover;
    color: #fff;
  }
`;

export const StartupCards = ({header, title, content, link, linkLabel, logo}) => {
  return(
    <div className="col-lg-5 position-relative"
      data-aos="zoom-in-right"
      data-aos-duration="1000"
      data-aos-once={true}
    >
      <img src={logo} width={80} alt="Img" className="position-absolute end-0 top-0" />
      <h3 className="color-primary">{header}</h3>
      <p className="small my-3">{title}</p>
      <p className="small line-height">{content}</p>
      <Link href={link} target="_blank" className="small mt-3 color-primary">{linkLabel}</Link>
    </div>
  )
}


const Index =()=> {
  return (
    <Style background={StartupBanner}>
      <section className="banner">
        <div className="container">
            <h5 className="text-uppercase p-0">Startups we are building</h5>
            <hr/>

            <div className="mt-5 d-flex justify-content-between flex-wrap gap-5">
              <StartupCards 
                header="MAYA ORGANICS"
                title="Manufacturing"
                content="Maya Organics is an indigenous African organic skincare company focused on formulating and producing the best of organic skincare, hair and body fitness products that drive natural experience and enable women live life beautifully."
                link="https://www.mayaorganics.com"
                linkLabel="www.mayaorganics.com"
                logo="/img/placeholder.png"
              />
              <StartupCards 
                header="MAYA ORGANICS"
                title="Manufacturing"
                content="Maya Organics is an indigenous African organic skincare company focused on formulating and producing the best of organic skincare, hair and body fitness products that drive natural experience and enable women live life beautifully."
                link="https://www.mayaorganics.com"
                linkLabel="www.mayaorganics.com"
                logo="/img/placeholder.png"
              />
              

            </div>

            <div className="mt-5 d-flex justify-content-between flex-wrap gap-5">
            <StartupCards 
                header="MAYA ORGANICS"
                title="Manufacturing"
                content="Maya Organics is an indigenous African organic skincare company focused on formulating and producing the best of organic skincare, hair and body fitness products that drive natural experience and enable women live life beautifully."
                link="https://www.mayaorganics.com"
                linkLabel="www.mayaorganics.com"
                logo="/img/placeholder.png"
              />
              <StartupCards 
                header="MAYA ORGANICS"
                title="Manufacturing"
                content="Maya Organics is an indigenous African organic skincare company focused on formulating and producing the best of organic skincare, hair and body fitness products that drive natural experience and enable women live life beautifully."
                link="https://www.mayaorganics.com"
                linkLabel="www.mayaorganics.com"
                logo="/img/placeholder.png"
              />
            </div>
        </div>
      </section>
    </Style>
  );
}

export default Index
