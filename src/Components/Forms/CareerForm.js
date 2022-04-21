import React, { useEffect, useState } from "react";
import Input from "../Ui/input";
import Upload from "../Ui/Uploadtn";
//
import { ApplicationAction } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CareerForm() {
  // const [closeName, setCloseName] = useState(false);
  const dispatch = new useDispatch();
  const Application = useSelector((state) => state.Application);
  const [loading, setLoading] = useState(100);
  // const [pic, setPic] = useState("");
  //form
  //console.log(Application);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const intialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    porfolio: "",
  };
  const [resume, setResume] = useState();
  const [coverLetter, setCoverLetter] = useState();
  const [userData, setUserData] = useState(intialState);

  const { firstName, lastName, email, phone, linkedIn, porfolio } = userData;

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    if (Application.message) {
      setUserData(intialState);
      setCoverLetter("");
      setCoverLetter("");
    }
  }, [Application, intialState]);

  const handleSubmit = () => {
    const form = new FormData();
    form.append("fullname", `${firstName} ${lastName}`);
    form.append("email", email);
    form.append("phone", phone);
    form.append("linkedin", linkedIn);
    form.append("portfolio", porfolio);
    form.append("Picture", resume);
    form.append("Picture", coverLetter);
    dispatch(ApplicationAction(form));
  };

  // console.log(coverLetter, resume);
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-6">
            <Input
              label={"First Name"}
              inputpad={"15px"}
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-6">
            <Input
              label={"Last Name"}
              inputpad={"15px"}
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-6">
            <Input
              label={"Email"}
              inputpad={"15px"}
              name="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-6">
            <Input
              label={"Phone"}
              inputpad={"15px"}
              name="phone"
              value={phone}
              onChange={handleOnChange}
              check
            />
          </div>
          <div className="col-md-6">
            <Input
              label={"LinkedIn Profile"}
              inputpad={"15px"}
              name="linkedIn"
              value={linkedIn}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-6">
            <Input
              label={"Porfolio Link"}
              inputpad={"15px"}
              name="porfolio"
              value={porfolio}
              onChange={handleOnChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <Upload
              label={"Resume/CV"}
              getFile={setResume}
              accept={"application/pdf"}
              pic={resume}
              loading={loading}
              setLoading={setLoading}
            />
          </div>
          <div className="col-md-6 mb-6">
            <Upload
              label={"Cover Letter "}
              getFile={setCoverLetter}
              accept={"application/pdf"}
              pic={coverLetter}
              loading={loading}
              setLoading={setLoading}
            />
          </div>

          <div className="col-md-12 d-flex text-center justify-content-center">
            <div className="w-50">
              <button
                className="btn btn-secondary w-100 py-3"
                onClick={handleSubmit}
              >
                {Application.loading ? "Please Wait ..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
