import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import VentureBoothForm from "../Components/Forms/VentureBoothForm";

const Style = styled.div`
    padding-top: 5rem;
    /* application */
    .application {
        background: #f8f9ff;
    }
`;

export default function FoundersInResidence() {
    return (
        <Layout title="Founders-in-Residence">
            <Style>
                <section className="application">
                    <div className="container">
                        <div
                            className="mb-5"
                            data-aos="fade-right"
                            data-aos-duration="300"
                        >
                            <h5 className="text-uppercase ">
                                application form for The Venture Booth
                            </h5>

                            <div className="w-25">
                                <hr />
                            </div>
                            <p>Each field can only take 200 characters</p>
                        </div>
                        <div className="mb-5">
                            <VentureBoothForm />
                        </div>
                    </div>
                </section>
            </Style>
        </Layout>
    );
}
