import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "../HeaderComp";
import Header2 from "../Header";
import styled from "styled-components";

import HeaderImage2 from "../../Assets/Image/mvpbackground.png";
import HeaderImage3 from "../../Assets/Image/header2.png";

import BackgroundImage from "../../Assets/Image/boothHeaderImage2.png";
import HeaderImage from "../../Assets/Image/boothHeaderImage.png";

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
                fade
                indicators={false}
                arrow={false}
                control={"false"}
                interval={3000}
            >
                <Carousel.Item>
                    <Header
                        BackgroundImage={BackgroundImage}
                        HeaderImage="/img/booth.svg"
                        backgroundColor=" #00162c;"
                        button
                    />
                </Carousel.Item>
                <Carousel.Item>
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
            Minimum Viable Product (MVP); UX/UI; Product Scoping or help to scale your startup. "
                    />
                </Carousel.Item>
            </Carousel>
        </Styled>
    );
}
