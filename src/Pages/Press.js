import React from "react";
import Layout from "../Layout";
//import PressList from "../Components/Press";
//import { useSelector } from "react-redux";
//import { PressData } from "../Data";
import UnderConstructionicon from '../Assets/Image/underConstruction.svg'
import { Link } from "react-router-dom";

export default function Press() {
  //const Press = useSelector((state) => state.Presses.Presses);
  return (
    <Layout title="Press">
      {/* <PressList data1={Press} data={PressData} /> */}
      <section>
     <div className="mt-5 text-center">
       <Link to={"/"}>
       <img className="" src={UnderConstructionicon} alt=""/>
       </Link>
    
     </div>
      </section>
     
    </Layout>
  );
}
