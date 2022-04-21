import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const Style = styled.div`
    .form-control {
        padding: ${(prop) =>
            prop.Inputpad ? prop.Inputpad : "10px"} !important;
        box-shadow: none;
    }
    label {
        font-size: 17px;
    }
    button {
        background: transparent !important;
        outline: none !important;
        border-radius: 5px !important;
        border: 1px solid !important;
    }
    small {
        word-break: break-all;
    }
`;

export default function Input({
    label,
    check,
    inputpad,
    getFile,
    // setPic,
    // pic,
    // loading,
    // setLoading,
    ...props
}) {
    let inputRef;
    const [loading, setLoading] = useState(0);
    const [pic, setPic] = useState("");
    const Application = useSelector((state) => state.Application);
    useEffect(() => {
        if (Application.message) {
            setPic("");
        }
    }, [Application]);

    useEffect(() => {
        if (pic?.name && loading !== 100) {
            const timer = setInterval(() => {
                setLoading((beforeValue) =>
                    beforeValue >= 100 ? 0 : beforeValue + 10
                );
            }, 300);
            return () => {
                clearInterval(timer);
            };
        }
    }, [loading, pic?.name, setLoading]);

    const handleSubmission = (e) => {
        //console.log(e, "new");
        var file = null;
        file = e.target.files[0];
        setLoading(0);
        // const [file] = e.target.files;
        console.log(file, "file");
        setPic(file);
        getFile(file);
        // setPic(URL.createObjectURL(file));
    };
    return (
        <Style Inputpad={inputpad}>
            {label && (
                <label className="mb-3">
                    {label} {!check && <span>*</span>}
                </label>
            )}
            <div className="icon w-100 row align-items-center">
                <div className="col-md-4 mb-3">
                    <input
                        type="file"
                        hidden={true}
                        ref={(refParam) => (inputRef = refParam)}
                        onChange={handleSubmission}
                        {...props}
                    />
                    <button
                        onClick={() => {
                            inputRef.click();

                            // setPic({});
                        }}
                        className=" btn-dark text-dark py-3 px-4"
                    >
                        Upload
                    </button>
                </div>
                {pic?.name && (
                    <div className="col-md ps-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="fw-bold">{pic?.name}</small>
                            <span
                                onClick={() => {
                                    setLoading(0);
                                    setPic(null);
                                }}
                            >
                                <AiOutlineClose />
                            </span>
                        </div>
                        <ProgressBar variant="warning" now={loading} />
                        <div className="d-flex justify-content-between align-items-center ps-3">
                            <small>
                                {loading !== 100 ? "Uploading..." : "complete"}
                            </small>
                            {loading !== 100 && <small>{loading} %</small>}
                        </div>
                    </div>
                )}
            </div>
        </Style>
    );
}
