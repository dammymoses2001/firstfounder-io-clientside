import React, { useEffect } from "react";
import styled from "styled-components";
import CareerForm from "../Forms/CareerForm";
import { BiArrowBack } from "react-icons/bi";
import { HashLink as Link } from "react-router-hash-link";

const Style = styled.section`
  padding: 9rem 0;
  h1 {
    color: #00162c;
    font-size: 45px;
    text-shadow: -4px 2px 4px rgba(51, 204, 204, 0.4);
  }
  ul li {
    margin-bottom: 10px;
    font-size: 17px;
  }
  .form {
    background: #dbebfb;
    padding: 6rem 0;
  }
  .form h4 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    display: inline-block;
    padding-bottom: 10px;
  }
  .input {
    padding: 15px 0;
  }
`;
export default function Index({ setInfo, info }) {
  // console.log(info);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Style>
      <div className="container">
        <div
          className="mb-5"
          onClick={(e) => {
            e.preventDefault();
            setInfo("");
          }}
        >
          <BiArrowBack size={30} />
        </div>
        <div className="pb-6">
          <div className="d-flex justify-content-between">
            <h1 className="fw-bold mb-6">{info?.position}</h1>
            <div>
              <Link to="/careers/#form" className="btn btn-primary px-4">
                Apply
              </Link>
            </div>
          </div>
          <div className="mb-5">
            <h5 className="text-uppercase mb-4">The Role</h5>
            <hr />
            <div className="py-3 px-2 px-md-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: info?.therole,
                }}
              ></div>
            </div>
          </div>
          <div>
            <h5 className="text-uppercase mb-4">Ideal Profile</h5>
            <hr />
            <div className="py-3 px-2 px-md-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: info?.ideaprofile,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <section className="form " id="form">
        <div className="container">
          <div className="">
            {" "}
            <h4 className="text-uppercase mb-6 pe-1">Apply for job</h4>
            <div>
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
}
