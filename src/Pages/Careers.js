import React, { useState } from "react";
import Layout from "../Layout";
import CareerHeader from "../Components/CareerHeader";
import GetInTouch from "../Components/GetInTouch";
import CareerPosition from "../Components/CareerPosition";
import SinglePosition from "../Components/singlePosition";
import { useSelector } from "react-redux";

export default function Careers() {
  const [info, setInfo] = useState({});
  const OpenPosition = useSelector((state) => state.OpenPosition);
  return (
    <Layout title={"Careers"}>
      {!info._id && (
        <div>
          <CareerHeader />
          {OpenPosition?.OpenPosition && (
            <CareerPosition
              setInfo={setInfo}
              Careerdata={OpenPosition?.OpenPosition}
            />
          )}
          <GetInTouch />
        </div>
      )}
      {info._id && <SinglePosition setInfo={setInfo} info={info} />}
    </Layout>
  );
}
