import React from "react";
import Input from "../Ui/input";
import TextArea from "../Ui/TextArea";
import styled from "styled-components";

const Style = styled.div`
  .form-check-label {
    font-size: 16px !important;
    font-weight: 400 !important;
  }
  .form-check-input:checked {
    background-color: #00162c !important;
    border-color: none;
    box-shadow: none !important;
  }
`;

export default function BlogForm() {
  
  return (
    <Style>
      <form>
        <div className="w-750">
          <div className="form-group">
            <Input placeholder="First Name" type="name" />
          </div>
          <div className="form-group">
            <Input placeholder="Email" type="email" />
          </div>
        </div>
        <div className="form-group">
          <TextArea rows="5" placeholder={"Comment"} />
        </div>
        <div className="form-group mb-6">
          <p>
            FirstFounders is dedicated to protecting your privacy, we will only
            use your information to provide the product and services you
            requested from us. We would also like to contact you on our products
            and services as well as other contents that may be of interest to
            you. If you consent to this, please tick below.
          </p>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              I agree to receive information from FirstFounders and to store my
              personal data
            </label>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className=" btn-secondary btn-upload">
            Submit
          </button>
        </div>
      </form>
    </Style>
  );
}
