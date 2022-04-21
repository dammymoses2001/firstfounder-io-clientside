import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function index({ children, title }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`FirstFounders | ${title}`}</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div>
        <Navbar />
      </div>
      {children}
      <div>
        <Footer />
      </div>
    </div>
  );
}
