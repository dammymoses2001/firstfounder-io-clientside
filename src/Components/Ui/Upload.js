import React from "react";
import { BsCloudUploadFill } from "react-icons/bs";

export default function Upload({ label, placeholder }) {
  return (
    <div className="mb-5">
      <label className="mb-3">
        {label} <span>*</span>
      </label>
      <div className="upload">
        <p className="text-left">{placeholder}</p>
        <div className="text-center">
          <button className="btn-upload">
            <BsCloudUploadFill size={40} color={"#33cccc"} />
          </button>
        </div>
      </div>
    </div>
  );
}
