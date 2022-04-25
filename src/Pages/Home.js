import React from "react";
import Layout from "../Layout";
import Header from "../Components/HomeHeader";
import Startup from "../Components/Startup";
import OurApproach from "../Components/OurApproach";
import Focus from "../Components/Focus";
import StartupComp from "../Components/StartupComp";
import MeetTheTeam from "../Components/MeetTheTeam";
import WPAS from "../Components/WPAS";
import OurPartners from "../Components/OurPartners";
import GetInTouch from "../Components/GetInTouch";


import {
  ApproachData,
  OurFocus,
  startupData,
} from "../Data";

import { useSelector } from "react-redux";
export default function Home() {

  const ClientProjects = useSelector((state) => state.ClientProjects.ClientProjects);

  const CheckLength = (Array) => {
    return Array.length > 1 ? true : false;
  };

  return (
    <div>
      <Layout title="Home">
        
        <Header />
        <OurApproach data={ApproachData} />
        <Focus data={OurFocus} />
        {CheckLength(ClientProjects) && (
          <StartupComp data={startupData} data1={ClientProjects} />
        )}
        
        <Startup />  

        <MeetTheTeam
          header="Meet the team"
          title="FirstFounders team consists of the founder, David lanre messan, with Bright Ugwumadu (Head, Technology), Bunmi Odunjo (Community Manager) Paschal Offordum (Legal Advisor), All have experienced the highs and lows of start-up life and held senior  management positions in big corporations."
        />

        <WPAS header="What people are saying"/>
        
        <OurPartners header="Trusted by our partners"/>
        
    
        <GetInTouch />
      </Layout>
    </div>
  );
}
