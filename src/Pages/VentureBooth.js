import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import HeaderComp from "../Components/HeaderComp";
import VentureBoothComp from "../Components/VentureBoothComp";
import Benefits from "../Components/Benefits";
import WhoCanApply from "../Components/WhoCanApply";
import HowitWorks from "../Components/HowitWorks";
import GetInTouch from "../Components/GetInTouch";
// import AboutUs from "../Components/AboutUs";

//Images
import BackgroundImage from "../Assets/Image/boothHeaderImage2.png";
import HeaderImage from "../Assets/Image/boothHeaderImage.png";
import VentureandBenefitBackground from "../Assets/Image/bouncherImage.png";

//data
import { BenfitsData, whocanapplyData } from "../Data";

const Background = styled.div`
  position: relative;
  .boothbackground {
    position: absolute;
    right: 0;
    top: 20%;
  }
`;

export default function VentureBooth() {
  return (
    <Layout title="Venture Booth">
      <HeaderComp
        BackgroundImage={BackgroundImage}
        HeaderImage={HeaderImage}
        backgroundColor=" #00162c;"
        button
      />
      <Background>
        <div className="boothbackground">
          <img src={VentureandBenefitBackground} alt="" />
        </div>
        <VentureBoothComp />
        <Benefits data={BenfitsData} />
      </Background>
      <WhoCanApply data={whocanapplyData} />
      <HowitWorks />
      <GetInTouch />
    </Layout>
  );
}
