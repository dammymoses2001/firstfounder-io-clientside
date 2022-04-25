// headerImage1.png
import React from "react";
import Layout from "../Layout";
import Header from "../Components/Header";
import WhatWeDoComp from "../Components/WhatWeDoComp";
import mvpbackground from "../Assets/Image/mvpbackground.png";
import mvpHeaderImage from "../Assets/Image/mvpHeaderImage.png";
// import { Link } from "react-router-dom";

export default function MVPAcceleration() {
    return (
        <Layout title="MVP ACCELERATOR PROGRAM">
            <Header
                title={
                    <h1>
                        MVP <br />
                        Accelerator
                        <br /> Program
                    </h1>
                }
                background={mvpbackground}
                buttonText="Schedule A Call"
                buttonLink1="https://calendly.com/thefirstfounders/60min"
                contactus
                sideImage={mvpHeaderImage}
                smallScreen
                desc="
        We can help you bring your product idea to life, whether it is a Minimum Viable Product (MVP); UX/UI; Product Scoping or scaling your startup. "
            />
            <WhatWeDoComp
                title="MVP Accelerator Program"
                backgroundColor="#f8f9ff"
                body={
                    <div className="w-100 mvp">
                        <p className="fw-bold">What we really do for you.</p>
                        <ul className="pl-4 my-5">
                            <li>
                                <span>Product Scoping </span> – We help you with
                                structured product development process
                                consisting of research, business model, complete
                                user flow, tech scope and focus discussions to
                                align product with founder’s business vision.
                            </li>
                            <li>
                                <span>UI/UX </span>– We help you design an
                                engaging product that is easy-to-use, attractive
                                and functional with access to key product
                                screens or prototype.
                            </li>
                            <li>
                                <span>MVP Builder </span>– We help you go to
                                market quickly with a high-quality Minimum
                                Viable Product and this comprises of product
                                scoping, UI/UX and development.
                            </li>
                            <li>
                                <span>Growth Hacking Services</span> – We help
                                early stage founders test new ideas or explore
                                market fit across the entire growth hacking
                                end-to-end journey including, discovery,
                                acquisition, conversion, adoption and retention.
                            </li>
                        </ul>
                        <p className="mb-5 fw-bold">
                            Want To Talk About Your Project MVP? Schedule A Call
                        </p>
                        <div>
                            <a
                                className="btn btn-primary btn-md mb-6 fw-bold"
                                target="_blank"
                                href="https://calendly.com/thefirstfounders/60min"
                                rel="noreferrer"
                            >
                                Schedule A Call
                            </a>
                            {/* <button className="btn btn-primary btn-md mb-6">Apply</button> */}
                        </div>
                    </div>
                }
            />
        </Layout>
    );
}
