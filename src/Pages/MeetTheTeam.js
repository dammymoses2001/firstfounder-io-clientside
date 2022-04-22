import React from "react";
import Layout from "../Layout";
import MeetTheTeam from "../Components/MeetTheTeam";

//
//import { TeamData } from "../Data";
import { useSelector } from "react-redux";

export default function MeetTheTeamPage() {
  const Team = useSelector((state) => state.getTeam.Team);

  const getBoardMember = (Team) => {
    const DataS = [];
    //Team?.map((data) => (data.type === "1" ? Data.push(data) : ""));
    Team.forEach((data) => {
      if (data.type === "2") { 
        // console.log(data); 
        DataS.push(data);
        // return Data.push(data);
      }
    });
    //console.log(DataS);
    return DataS;
  };

  const getTeamMember = (Team) => {
    const DataS = [];
    //Team?.map((data) => (data.type === "1" ? Data.push(data) : ""));
    Team.forEach((data) => {
      if (data.type === "1") {
        // console.log(data);
        DataS.push(data);
        // return Data.push(data);
      }
    });
    //console.log(DataS);
    return DataS;
  };
  return (
    <Layout title="Meet The Team">
      {getBoardMember(Team).length > 1 && (
        <MeetTheTeam
          // data={BoardMember}
          data1={getBoardMember(Team)}
          size={Team.length}
          header="Board Faculty"
          title="Our Faculty comprise of outstanding startup advisors and corporate professionals  who are independently committed to supporting our founders with insights and advice for startup growth."
        />
      )}
      {getTeamMember(Team).length > 1 && (
        <MeetTheTeam
          // data={TeamMember}
          data1={getTeamMember(Team)}
          size={Team.length}
          header="Meet the team"
          title="We are a vibrant team of creative, skilled, highly cultured and friendly professionals  within the tech startup ecosystem with a combined 30 years work experience spanning across Africa and some key countries of the world. We are excited to welcome you into our world of building great startups."
        />
      )}
    </Layout>
  );
}
