import React from "react";
import styled from "styled-components";
const Style = styled.div`
    label {
        font-size: 18px;
    }
`;

export default function TextArea({ label, ...props }) {
    return (
        <Style>
            {label && (
                <label className="mb-3">
                    {label} <span>*</span>
                </label>
            )}
            <textarea
                className="form-control mb-4"
                rows="4"
                {...props}
                maxLength="200"
            ></textarea>
        </Style>
    );
}
