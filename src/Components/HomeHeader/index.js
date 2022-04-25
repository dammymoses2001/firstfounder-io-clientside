import React from "react";
import { Carousel } from "react-bootstrap";
import Header2 from "../Header";
import styled from "styled-components";

import HeaderImage from "../../Assets/Image/HomeImage.png";


const Styled = styled.div`
    .carousel-control-next,
    .carousel-control-prev {
        display: none;
    }
`;

export default function index() {
    return (
        <Styled>
            <Carousel
                autoPlay={true}
                interval={4000}
                controls={"false"}
                indicators={false}
            >
                <Carousel.Item>
                    <Header2
                        background={HeaderImage}
                        title="A Venture Studio partnering with early-stage founders to grow
                and scale startups."
                        desc=" We are helping early stage founders build MVP, product scoping,
                UI/UX and custom product software so they can go to market
                faster, attract early adopters, achieve product-market fit and
                be attractive to investors – and most importantly solving real
                human problems together."
                        buttonText="Build with us"
                        buttonLink="/whatwedo"
                    />
                </Carousel.Item>
                {/* <Carousel.Item>
                    <Header
                        BackgroundImage={BackgroundImage}
                        HeaderImage={HeaderImage4}
                        backgroundColor=" #00162c;"
                        button
                    />
                </Carousel.Item> */}
                {/* <Carousel.Item>
                    <Header2
                        background={HeaderImage3}
                        title=" We are building the future 
            together with smart talents 
            across the world"
                        desc=" We have in-house startups that we hire founders to lead and manage for
            20% equity while we take 80% and handle investments. The Founders-In-Residence 
            Program identifies and selects founders who share in our vision and connects with our 
            mission to run our startup ideas."
                        buttonText="Apply"
                        buttonLink="/foundersinresidenceprogram"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Header2
                        background={HeaderImage2}
                        buttonText=" Schedule A Call"
                        buttonLink1="https://calendly.com/thefirstfounders/60min"
                        title={
                            <span>
                                MVP <br /> Accelerator
                                <br /> Program
                            </span>
                        }
                        desc="We can help you bring your product idea to life whether it is a 
            Minimum Viable Product (MVP); UX/UI; Product Scoping or help to scale your startup."
                    />
                </Carousel.Item> */}
            </Carousel>
        </Styled>
    );
}
