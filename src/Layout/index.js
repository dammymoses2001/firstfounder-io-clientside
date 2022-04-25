import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function index({ children, title }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`FirstFounders | ${title}`}</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
