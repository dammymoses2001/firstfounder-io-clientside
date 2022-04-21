import React from "react";
import Layout from "../Layout";
import HeaderComp from "../Components/HeaderComp";
import AboutUs from "../Components/AboutUs";

//Images
import BackgroundImage from "../Assets/Image/AboutheaderImage1.png";
import HeaderImage from "../Assets/Image/AboutheaderImage3.png";

export default function About() {
  return (
    <Layout title="About Us">
      <HeaderComp BackgroundImage={BackgroundImage} HeaderImage={HeaderImage} />
      <AboutUs />
    </Layout>
  );
}
