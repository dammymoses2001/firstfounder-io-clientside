import React from "react";
import Layout from "../Layout";
import Header from "../Components/HomeHeader";
import OurApproach from "../Components/OurApproach";
import Focus from "../Components/Focus";
import StartupComp from "../Components/StartupComp";
import MeetTheTeam from "../Components/MeetTheTeam";
import WhatPeopleAreSaying from "../Components/WhatPeopleAreSaying";
import OurPartners from "../Components/OurPartners";
import MediaMention from "../Components/MediaMention";
import GetInTouch from "../Components/GetInTouch";

//
import {
  ApproachData,
  OurFocus,
  startupData,
  TeamData,
  whatTheySayData,
  OurPartner,
  MediaData,
} from "../Data";

import { useSelector } from "react-redux";
export default function Home() {
  // const UpcomingEventsData = useSelector((state) => state.UpcomingEvents);
  const Partners = useSelector((state) => state.Partners.Partners);
  // const MediaMentions = useSelector(
  //   (state) => state.MediaMentions.MediaMention
  // );
  const ClientProjects = useSelector(
    (state) => state.ClientProjects.ClientProjects
  );
  const Testimonials = useSelector((state) => state.Testimonials.Testimonials);
  // const BlogsData = useSelector((state) => state.Blogs.Blogs);
  const Press = useSelector((state) => state.Presses.Presses);
  const Team = useSelector((state) => state.getTeam.Team);
  // const Team = useSelector((state) => state.getTeam);
  // //console.log.log(ClientProjects);
  const getTeamMember = (Team) => {
    const DataS = [];
    //Team?.map((data) => (data.type === "1" ? Data.push(data) : ""));
    Team.forEach((data) => {
      if (data.type === "1") {
        console.log(data);
        DataS.push(data);
        // return Data.push(data);
      }
    });
    //console.log(DataS);
    return DataS;
  };

  const CheckLenght = (Array) => {
    // //console.log.log(Array.length > 1 ? true : false);
    return Array.length > 1 ? true : false;
  };
  return (
    <div>
      <Layout title="Home">
        <Header />
        <OurApproach data={ApproachData} />
        <Focus data={OurFocus} />
        {CheckLenght(ClientProjects) && (
          <StartupComp data={startupData} data1={ClientProjects} />
        )}
        {CheckLenght(Team) && (
          <MeetTheTeam
            data={TeamData}
            data1={getTeamMember(Team)}
            check
            size={2}
            header="Meet the team"
            button
            title="We are a vibrant team of creative, skilled, highly cultured and friendly professionals within the tech startup ecosystem with a combined 30 years work experience spanning across Africa and some key countries of the world. We are excited to welcome you into our world of building great startups."
          />
        )}
        {CheckLenght(Testimonials) && (
          <WhatPeopleAreSaying data={whatTheySayData} data1={Testimonials} />
        )}
        {CheckLenght(Partners) && (
          <OurPartners
            data={OurPartner}
            data1={Partners}
            title="Trusted by Our Partners"
          />
        )}
        {CheckLenght(Press) && <MediaMention data={MediaData} data1={Press} />}
        <GetInTouch />
      </Layout>
    </div>
  );
}
