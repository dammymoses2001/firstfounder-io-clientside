import React, { useState } from "react";
import styled from "styled-components";
import { GrFormCheckmark } from "react-icons/gr";

const Style = styled.div`
    .checkbox {
        width: 25px;
        height: 25px;
        border: 1px solid;
        border-radius: 5px;
    }
    .checked {
        background: blue;
    }
    h5 {
        font-size: 16px;
    }
`;

const list = [
    "Retail",
    "Utility",
    "Healthcare",
    "Education",
    "Manufacturing",
    "IOT/Emerging Technology",
    "Fintech",
    "Sports",
    "E-Commerce",
    "Agriculture",
    "Mobility",
];

export default function CheckboxList({ onChange }) {
    const [checked, setChecked] = useState(null);

    const handleCheckBox = (item) => {
        //console.log.log(item);
        setChecked(item);
        onChange(item);
    };

    return (
        <Style>
            <div className="form-group ">
                <label for="exampleFormControlTextarea1 ">
                    If you are to lead a startup, which of the category of
                    startups will you opt for? Tick as appropriate anyone you
                    feel fits? <span>*</span>
                </label>
                <div className="mt-4">
                    <div className="row">
                        {list.map((item) => (
                            <div className=" col-md-6 col-lg-4 mb-4">
                                <div className="form-check px-0">
                                    <div className="d-flex align-items-center">
                                        <div
                                            className={`checkbox  me-4 d-flex justify-content-center align-items-center`}
                                            onClick={() => handleCheckBox(item)}
                                            onChange={onChange}
                                        >
                                            {checked === item ? (
                                                <GrFormCheckmark />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <h5 className="m-0">{item}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Style>
    );
}
