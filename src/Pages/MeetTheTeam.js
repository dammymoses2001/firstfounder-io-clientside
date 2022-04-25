import React, {useState} from "react";
import Layout from "../Layout";
import styled from "styled-components";
import { FaLinkedin, FaEnvelope ,FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Style = styled.section`
  min-height: 90vh;
  margin-top: 5rem;
  h1 {
    text-shadow: -4px 2px 4px rgba(51, 204, 204, 0.4);
    font-size: 50px;
    line-height: 65px;
    font-weight: 900 !important;
  }
  p {
    line-height: 30px;
    font-weight: 500;
  }
`;

const MeetTheTeamPage = () => {

  const[team, setTeam] = useState("team")

  return (
    <Layout title={"Meet the team"}>
      <div className="bg-light">
        <Style>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <h1 className="text-center fw-bolder mb-4">MEET OUR TEAM</h1>
                <p className="px-4 mb-5 text-center"> We are a vibrant team of creative, skilled, highly cultured and friendly professionals  within the tech startup ecosystem with a combined 30years work experience spanning across Adrica and some key countries of the world. We are excited to welcome you into our world of building great startups.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-switch">
            <div className="switch d-flex">
              <span onClick={()=>setTeam("team")} className={ team ==="team" ? "team-tab team-tab-active": "team-tab" }>OUR TEAM</span>
              <span onClick={()=>setTeam("board")} className={ team ==="board" ? "team-tab team-tab-active": "team-tab" }>BOARD FACULTY</span>
            </div>
          </div>

          <div className="container">
            {team === "team" ? 
            <div className="row">
              <div className="col-lg-3 col-6 mb-4">
                <div className="card rounded border-0 shadow">
                  <div className="card-body text-center">
                    <div>
                      <img className="img-fluid mb-3 rounded-circle" src="/team/dlm.jpg" width="200" alt="Frame" />
                    </div>
                    <h4 className="card-title fw-bold w-70">DAVID LANRE MESAN</h4>
                    <p className="card-text small">Founder/CEO</p>
                    <div className="w-100 fs-4 text-center">
                      <Link to="/" className="color-primary">
                        <FaLinkedin />
                      </Link>
                      <Link to="/" className="mx-3 color-primary">
                        <FaEnvelope />
                      </Link>
                      <Link to="/" className="color-primary">
                        <FaTwitter />
                      </Link>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : null }

            {team === "board" ?
            <div className="row">
              <div className="col-lg-3 col-6 mb-4">
                <div className="card rounded border-0 shadow">
                  <div className="card-body text-center">
                    <div>
                      <img className="img-fluid mb-3 rounded-circle" src="/team/dlm.jpg" width="200" alt="Frame" />
                    </div>
                    <h4 className="card-title fw-bold w-70">DAVID LANRE MESAN</h4>
                    <p className="card-text small">Board /CEO</p>
                    <div className="w-100 fs-4 text-center">
                      <Link to="/" className="color-primary">
                        <FaLinkedin />
                      </Link>
                      <Link to="/" className="mx-3 color-primary">
                        <FaEnvelope />
                      </Link>
                      <Link to="/" className="color-primary">
                        <FaTwitter />
                      </Link>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :null}
        </div>

        </Style>
       
      </div>
    </Layout>
  );
}

export default MeetTheTeamPage
