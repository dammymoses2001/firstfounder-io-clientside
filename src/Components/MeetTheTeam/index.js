import React, {useEffect} from "react";
import styled from "styled-components";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";
import axios from "axios";


const Style = styled.div`
  section {
    padding-top: 7rem;
  }
  .team {
    background: #f8f9ff;
  }
  .team img {
    width: 100%;
    height: 280px;
    max-width: none;
    opacity: 1;
    object-fit: cover;
  }
  .team span {
    position: absolute;
    right: 25px;
    top: 20px;
    transition: 1s all;
    cursor: pointer;
  }
  .team span:hover {
    transform: scale(1.2);
    background-color: #fff;
  }
  .team button {
    color: #000000;
  }
  .peoplearesaying{
  }
  .peoplearesaying .IconWrapper img {
    width: 90px;
    height: auto;
  }
  @media only screen and (min-width: 769px) {
    .col-md-4 {
      width: 27.333333% !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .col-md-4 {
      width: 50% !important;
    }
  }
  @media only screen and (max-width: 400px) {
    .col-md-4 {
      width: 100% !important;
    }
  }
`;
const BackgroundImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: top;
  background-size: cover;
  height: 300px;
`;

const Index =({header, title})=>{

  //=============================
  // FETCH TEAM FROM JSON FILE 
  //=============================
  const [team, setTeam] = React.useState([]);
  useEffect(() => {
    axios.get("/api/team.json")
    .then((res) =>  setTeam(res.data))
    .catch((err) => console.log(err));
  }, [])
  //=============================
  // END FETCH TEAM FROM JSON FILE 
  //=============================

  
  return (
    <Style>
      <section className="team">
        <div className="container">
          <div className="mb-5">
            <h3
              className="text-uppercase"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-once={true}
            >
              {header}
            </h3>
            <hr />
          </div>

          <div className="row mb-5">
            <div className="col-md-7"><p>{title}</p></div>
          </div>

          <div className="row d-flex justify-content-between">
            {
              team.slice(0,3).map((item, key) => {

                return(
                  <div
                    className="col-lg-3 col-md-6  mb-5"
                    data-aos="fade-right"
                    data-aos-duration={`${300 * 3}`}
                    data-aos-once={true}
                    key={key}
                  >
                  <div className="mb-3 position-relative">
                    <BackgroundImage backgroundImage={item.image}>
                      <a href="/" target="_blank" rel="noreferrer">
                        <span><ImLinkedin color={"#0a66c2"} size={30} /> </span>
                      </a>
                    </BackgroundImage>
                  </div>
                  <h5 className="text-capitalize">{item.name}</h5>
                  <p>{item.position}</p>
                </div>
                )
              })
            }
          </div>
        
          <div
            className="text-end mt-3"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once={true}
          >
            <Link to="/team" className="btn btn-primary btn-lg">
              Discover the team
            </Link>
          </div>
        </div>
      </section>
    </Style>
  );
}

export default Index
