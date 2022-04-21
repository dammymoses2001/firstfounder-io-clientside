import React from "react";
import styled from "styled-components";
const Style = styled.div`
  .form-control {
    padding: ${(prop) => (prop.Inputpad ? prop.Inputpad : "10px")} !important;
    box-shadow: none;
  }
  label {
    font-size: 17px;
  }
`;

export default function input({ label, check, inputpad, ...props }) {
  return (
    <Style Inputpad={inputpad}>
      {label && (
        <label className="mb-3">
          {label} {!check && <span>*</span>}
        </label>
      )}
      <input className="form-control mb-4" {...props} maxLength="200" />
    </Style>
  );
}
