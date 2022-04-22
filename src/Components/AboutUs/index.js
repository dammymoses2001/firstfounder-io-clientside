import styled from "styled-components";
// import HeaderImage from "../../Assets/Image/HomeImage.png";
const Style = styled.div`
    /* story */
    .story {
        background-color: #f8f9ff;
    }
    .story h1 {
        font-size: 60px;
        color: #33cccc;
        font-weight: 800;
    }
    .story span {
        color: #ffbc00;
        font-weight: 600;
    }
    .story p {
        font-size: 20px;
    }
`;

export default function index() {
    return (
        <Style>
            <section className="story">
                <div className="container">
                    <div className="row mb-6">
                        <div
                            className="col-md-3 pr-4 d-none d-md-block"
                            data-aos="fade-right"
                            data-aos-duration="300"
                        >
                            <h1>
                                Our <br />
                                Story
                            </h1>
                        </div>
                        <div
                            className="col-md-9"
                            data-aos="fade-down"
                            data-aos-duration="500"
                        >
                            <h5 className="text-uppercase">Our Story:</h5>
                            <div className="w-25 mb-4">
                                <hr />
                            </div>
                            <p>
                                <span>FirstFounders</span> Inc. registered its
                                first branch in Lagos, Nigeria and began full
                                operations in June, 2020 with 9 staff. In its
                                early stage, the company focused more on
                                providing technology services to businesses keen
                                on transitioning their business models from
                                traditional models to digital business models.
                                We served about 20 clients and unveiled our new
                                business model of building the technology of
                                startups for equity.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div
                            className="col-md-3 pr-4 d-none d-md-block"
                            data-aos="fade-right"
                            data-aos-duration="500"
                        >
                            <h1>
                                Who <br />
                                We Are
                            </h1>
                        </div>
                        <div
                            className="col-md-8 mb-6"
                            data-aos="fade-down"
                            data-aos-duration="500"
                        >
                            <h5 className="text-uppercase">Who We Are:</h5>
                            <div className="w-25 mb-4">
                                <hr />
                            </div>
                            <p>
                                <span> FirstFounders Inc.</span> is a venture
                                studio committed to building the technology of
                                early stage startup ideas into investable
                                Minimum Viable Products (MVPs) while positioning
                                them for growth. <br />
                                We are building a startup ecosystem where early
                                stage founders with value-driven tech startup
                                ideas will be continuously provided the platform
                                to thrive and scale their project ideas with
                                access to technical support, go-to-market
                                strategies, product design, access to funding,
                                mentorship and an ever supporting community of
                                experts and founders.
                            </p>
                        </div>
                    </div>

                    <div className="row mb-6">
                        <div
                            className="col-md-3 pr-4 d-none d-md-block"
                            data-aos="fade-right"
                            data-aos-duration="300"
                        >
                            <h1>
                                Our <br />
                                Vision
                            </h1>
                        </div>
                        <div
                            className="col-md-9"
                            data-aos="fade-down"
                            data-aos-duration="500"
                        >
                            <h5 className="text-uppercase">Our Vision:</h5>
                            <div className="w-25 mb-4">
                                <hr />
                            </div>
                            <p>
                                <span>We</span> are working towards becoming one
                                of the most valuable portfolio holding venture
                                builders in the world.
                            </p>
                        </div>
                    </div>

                    <div className="row mb-6">
                        <div
                            className="col-md-3 pr-4 d-none d-md-block"
                            data-aos="fade-right"
                            data-aos-duration="300"
                        >
                            <h1>
                                Our <br />
                                Mission
                            </h1>
                        </div>
                        <div
                            className="col-md-9"
                            data-aos="fade-down"
                            data-aos-duration="500"
                        >
                            <h5 className="text-uppercase">Our Mission:</h5>
                            <div className="w-25 mb-4">
                                <hr />
                            </div>
                            <p>
                                <span>We</span> are partnering with early stage
                                founders with scalable ideas building the
                                technology needed for their startups to launch
                                and grow within an emerging market in Africa and
                                beyond; providing them the resource people,
                                access to market, funding and support required
                                every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Style>
    );
}
