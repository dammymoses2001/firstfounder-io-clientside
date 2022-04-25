import React, {useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const Style = styled.div`
  .partners .ImageWrapper {
    cursor: pointer;
    transition: 1s all;
  }
  .partners .ImageWrapper:hover {
    transform: scale(1.1);
  }
  .partners .ImageWrapper img {
    width: 100%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: 1s all;
  }
  .partners .ImageWrapper:hover img {
    -webkit-filter: none;
    filter: none;
  }
  .partners .col-md-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Index =({header}) => {

  //=============================
  // FETCH PARTNER FROM JSON FILE 
  //=============================
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    axios.get("/api/partners.json")
    .then((res) =>  setPartners(res.data))
    .catch((err) => console.log(err));
  }, [])
  //=================================
  // END FETCH PARTNER FROM JSON FILE 
  //=================================

  return (
    <Style>
      <section className="partners">
        <div className="container">
          <div className="mb-5">
            <h5 className="text-uppercase">{header}</h5>
            <hr />
          </div>
          <div className="d-flex justify-content-between align-item-center">
            {
              partners.map((partner, key) => (
                <div key={key} className="">
                  <div className="ImageWrapper">
                    <img src={partner.image} alt="" />
                  </div>
                </div>
              ))
            } 
          </div>
        </div>
      </section>
    </Style>
  );
}

export default Index