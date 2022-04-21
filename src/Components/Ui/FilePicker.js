import React, { useState } from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { FormGroup } from "react-bootstrap";
import { BsCloudUploadFill } from "react-icons/bs";
// import Tooltip from '../Tooltip';

//
const ErrorStyled = styled.div`
  color: red;
`;

const UploadImage = styled.div`
  min-height: 115px;
  border: 1px solid #4545485c;
  background: white;
  padding: 15px 10px;
  border-radius: 0.1rem;
  color: #303030;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input[type="file"] {
    display: none;
  }

  label {
    height: 60px;
    width: 250px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .preview {
    overflow: hidden;
    /* width: 150px; */
    height: 200px;
    position: relative;
    -webkit-transition: 1s;
    transition: 1s;
    z-index: 1;
    border-radius: 8px;
  }
  .preview::before {
    position: absolute;
    background: #000;
    opacity: 0.1;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .preview i {
    position: absolute;
    cursor: pointer;
    top: 1px;
    z-index: 20000;
    right: 3px;
    font-size: 20px;
    color: #fff;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .doc {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .doc .name {
    color: black;
    position: absolute;
    bottom: 0px;
    padding: 0 1rem;
    word-break: break-all;
    /* left: 50%; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: gray; */
    font-size: 18px;
    width: 100%;
    cursor: pointer;
    transition: 0.3s;
    &:hover + .info {
      transform: translateY(0px);
      opacity: 1;
      /* pointer-events:all; */
    }
  }
  .doc .info {
    position: absolute;
    bottom: 25px;
    right: 2px;
    transform: translateY(150px);
    word-break: break-all;
    opacity: 0;
    pointer-events: none;
    /* border: 1px solid; */
    padding: 5px;
    background: #fff;
    transition: 0.3s;
  }

  p {
    /* color: #00000096;
    font-size: 15px; */
  }
  .btn-outline-info {
    padding: 10px 82px;
    border: none;
    background: rgba(0, 22, 44, 0.1);
    border-radius: 5px;
  }
`;

function Filepicker({
  multiple,
  accept,
  handleGetImage,
  label,
  check,
  placeholder,
  value,
  name,
  onChange,
  error,
  exist,
}) {
  // Create a reference to the hidden file input element

  //   const [Image, selectImage] = useState([]);
  const [showImage, selectshowImage] = useState([]);
  // const [selectedImage, setSelectedImage] = useState('');
  // const [selectedImages, setImages] = useState([]);
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    event.preventDefault();
    //const emptyImage = [];
    // const fileUploaded = event.target.files[0];
    // const filesUploaded = event.target.files;
    // const newIMages = Object.values(filesUploaded);
    // newIMages.map((images) => emptyImage.push(URL.createObjectURL(images)));
    // selectshowImage(emptyImage);
    // //using handleImage to send the images to the front
    // handleImage(newIMages);

    const fileUploaded = event.target.files;
    const newPic = Object.values(fileUploaded);
    // setImages(event.target.files[0])
    if (multiple) {
      selectshowImage([...showImage, ...newPic]);
      onChange(`${name}`, [...showImage, ...newPic]);
    } else {
      selectshowImage([...newPic]);
      //console.log.log([...newPic]);
      // //console.log.log(`${name}`, [...newPic]);
      // onChange(`${name}`, [...newPic]);
      onChange([...newPic]);
    }

    // for (let pic of showImage) {
    //     handleGetImage(pic)
    // }

    // let selectedImage = URL.createObjectURL(fileUploaded[0]);
    // setSelectedImage(selectedImage);
    // let oldAndNew = [...selectedImages, selectedImages];
    // selectshowImage(oldAndNew);
  };

  const handleRemove = (id) => {
    // //console.log.log(id);
    selectshowImage(showImage.filter((Image, index) => index !== id));
  };
  // //console.log.log(value);

  return (
    <>
      <FormGroup>
        {label ? (
          <label className="mb-3">
            {label} {check ? <span>*</span> : null}
          </label>
        ) : null}
        {label ? <></> : null}
        <UploadImage>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            name={name}
            style={{ display: "none" }}
            multiple={multiple ? "multiple" : null}
            accept={accept}
          />
          <div className="container">
            <p className="text-left">{placeholder}</p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-info btn-upload"
                onClick={handleClick}
              >
                <BsCloudUploadFill size={40} color={"#33cccc"} />
              </button>
            </div>

            <div className="row mt-4">
              {showImage.map((Image, index) => {
                let selectedImage = URL.createObjectURL(Image);
                // //console.log.log(index);
                return (
                  <div
                    className={
                      multiple ? "col-12 col-md-4 mb-3" : "col-12 col-md-8"
                    }
                    key={index}
                  >
                    <div
                      className={
                        Image.type === "image/*" ? "preview" : "preview"
                      }
                    >
                      <i>
                        <MdCancel
                          // onChange={() => selectshowImage([])}
                          onClick={() => {
                            handleRemove(index);
                            selectshowImage([]);
                          }}
                        />
                      </i>
                      {Image.type.includes("image") ? (
                        <img src={`${selectedImage}`} alt="" />
                      ) : (
                        <div className="doc">
                          <FcDocument size={200} />
                          <p className="name" href="#" id="TooltipExample">
                            {Image.name.length <= 10
                              ? Image.name
                              : `${Image.name.substring(0, 25)}...`}
                          </p>
                          <p className="info px-2">{Image.name}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
                // }
              })}
            </div>
          </div>
        </UploadImage>
        {error ? <ErrorStyled className="required">{error}</ErrorStyled> : null}
      </FormGroup>
    </>
  );
}

//multiple, accept, handleImage

export default Filepicker;
