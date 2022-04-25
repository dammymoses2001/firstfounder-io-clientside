import React from "react";
import styled from "styled-components";

const Style = styled.div`
  padding: 2rem 1rem;
  border: 1px solid #ced4da;
  background: #fff;
  p {
    color: #21252980;
  }
`;

export default function Upload2({ label, placeholder, onChange, ...props }) {
  return (
    <Style>
      <div className="custom-file">
        <p>{placeholder}</p>
        <input
          type="file"
          className="custom-file-input"
          onChange={onChange}
          {...props}
        />
        {label && <label className="custom-file-label my-3">{label}</label>}
      </div>
    </Style>
  );
}
