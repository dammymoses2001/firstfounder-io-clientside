import React from "react";
import styled from "styled-components";
import FooterImage from "../../Assets/Image/logo2.png";
import footerBack from "../../Assets/Image/footerBack.png";
//
import { SubscribeAction, SendinblueAction } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Spinner } from "react-bootstrap";
import { HashLink as Link3 } from "react-router-hash-link";

const Style = styled.div`
    /* Footer */
    footer {
        background-color: #ffffff;
        background-image: url(${footerBack});
        background-size: cover;
    }
    footer .container-fluid {
        padding: 3rem 0;
    }
    footer p {
        color: #000000;
        margin-bottom: 15px;
        transition: 1s all;
    }

    footer p:hover {
        transform: scale(1.1);
    }

    footer h5 {
        color: #000000 !important;
    }

    input {
        width: 90%;
        border: none;
        border-bottom: 1px solid #000000;
        padding: 10px 0;
        outline: none;
    }
    .position-absolute {
        right: 0;
    }
    .pointer {
        cursor: pointer;
    }
`;

export default function Index() {
    const dispatch = useDispatch();
    const Subscribe = useSelector((state) => state.Subscribe);

    useEffect(() => {
        if (Subscribe?.message) {
            setEmail("");
        }
    }, [Subscribe]);

    const [email, setEmail] = useState("");

    const handleOnClickDefault = () => {
        // if (email) {
        //console.log.log(email);
        const form = new FormData();
        form.append("email", email);
        dispatch(SendinblueAction(form));
        dispatch(SubscribeAction(form));
    };
    return (
        <Style id="footer">
            <footer>
                <div className="container-fluid px-3 px-md-5">
                    <div className="row">
                        <div className="col-lg-3 mx-auto mb-4">
                            <div>
                                <Link3 to="/">
                                    <img src={FooterImage} alt="" />
                                </Link3>
                            </div>
                        </div>
                        <div className="col-lg-2 mx-auto mb-4">
                            <div>
                                <h5 className="mb-3">Menu</h5>

                                <Link3 to="/#startup">
                                    <p>Startups</p>{" "}
                                </Link3>
                                <Link3 to="/about">
                                    <p>About</p>{" "}
                                </Link3>
                                <Link3 to="/whatwedo">
                                    <p>What we do</p>
                                </Link3>
                                <Link3 to="/howitworks">
                                    <p>How it works</p>
                                </Link3>
                            </div>
                        </div>
                        <div className="col-lg-2 mx-auto mb-4">
                            <div>
                                <h5 className="mb-3">Explore</h5>

                                <a
                                    href="https://twitter.com/the1stfounders"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="mb-3">Twitter</p>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/thefirstfounders"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="pr-5">Linkedln</p>
                                </a>
                                <a
                                    href="https://www.instagram.com/firstfounders.cc/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="pr-5">Intagram</p>
                                </a>
                                <a
                                    href="https://web.facebook.com/thefirstfounders"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="pr-5">Facebook</p>
                                </a>
                                <a
                                    href="https://www.clubhouse.com/join/firstfounders-inc/5IZrQIg3"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="pr-5">ClubHouse</p>
                                </a>
                                <a
                                    href="https://chat.whatsapp.com/DuKMSI3zyXB3MH1kVlfIrk"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="pr-5">Whatsapp</p>
                                </a>
                                <Link3 to="/contact">
                                    <p>Contact Us</p>
                                </Link3>
                            </div>
                        </div>

                        <div className="col-lg-3 mx-auto mb-5">
                            <div className="pt-4">
                                <p>Subscribe to our newsletter</p>
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <span
                                        onClick={
                                            !Subscribe.loading
                                                ? handleOnClickDefault
                                                : null
                                        }
                                        className="position-absolute pointer"
                                    >
                                        {!Subscribe.loading ? (
                                            <RiArrowRightSLine size={30} />
                                        ) : (
                                            <Spinner animation="grow" />
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>©FirstFoundersInc 2021. All rights reserved.</p>
                </div>
            </footer>
        </Style>
    );
}
