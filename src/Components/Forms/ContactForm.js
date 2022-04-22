import React, { useEffect, useState } from "react";
import Input from "../Ui/input";
import TextArea from "../Ui/TextArea";
import { ConnectAction, SendinblueAction } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import { getNotification } from "../Ui/Messages";

export default function ContactForm() {
  const dispatch = useDispatch();
  const Connect = useSelector((state) => state.Connect);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setFullname("");
    setEmail("");
    setPhone("");
    setMessage("");
  }, [Connect.message]);

  const handleSumbit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", fullname);
    formData.append("last_name", fullname);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("company", "firstFounder");
    formData.append("your_project", message);
    dispatch(ConnectAction(formData));
    //
    const form = new FormData();
    form.append("email", email);
    dispatch(SendinblueAction(form));
  };
  getNotification();
  return (
    <div>
      <form>
        <div className="form-group">
          <Input
            label="Full Name"
            type="text"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <Input
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <Input
            label="Phone number"
            type="number"
            name="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group mb-6">
          <TextArea
            label="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="text-end">
          <button
            type="submit"
            className=" btn-secondary btn-upload"
            onClick={handleSumbit}
          >
            {Connect.loading ? <Spinner animation="grow" /> : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
