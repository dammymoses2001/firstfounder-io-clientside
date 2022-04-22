import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../Ui/input";
import TextArea from "../Ui/TextArea";
// import FilePicker from "../Ui/FilePicker";
import Upload2 from "../Ui/Upload2";
import CheckboxList from "../Ui/CheckboxList";
import { useDispatch, useSelector } from "react-redux";
import { SendinblueAction, StartAProjectAction } from "../../Redux/actions";
import { Spinner } from "react-bootstrap";
import { getErrorMessage } from "../Ui/Messages";

const Style = styled.div`
    /* application */
    .application {
        background: #f8f9ff;
    }
    textarea::placeholder {
        font-size: 15px;
        opacity: 0.5;
        color: #3b3b3b;
    }

    ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: pink;
    }
    ::-moz-placeholder {
        /* Firefox 19+ */
        color: pink;
    }
    :-ms-input-placeholder {
        /* IE 10+ */
        color: pink;
    }
    :-moz-placeholder {
        /* Firefox 18- */
        color: pink;
    }

    ::-moz-placeholder {
        opacity: 1;
    }
`;

export default function FoundersInResidence() {
    const dispatch = useDispatch();
    const StartAProject = useSelector((state) => state.StartAProject);

    // //console.log.log(StartAProject);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [resume, setResume] = useState("");
    const [aboutyourself, setAboutyourself] = useState("");
    const [intInBuilding, setIntInBuilding] = useState("");
    const [whatyouthink, setWhatYouThink] = useState("");
    const [startup, setStartup] = useState("");
    const [whystartup, setWhyStartup] = useState("");
    const [why, setWhy] = useState("");
    // const [others, setOthers] = useState("");
    // const [aboutus, setAboutus] = useState("");
    // const [equity, setEquity] = useState("");
    // const [videopitch, setVideopitch] = useState("");
    // const [pitchdeck, setPitchdeck] = useState("no");
    // const [indemnity, setIndemnity] = useState("no");

    useEffect(() => {
        if (StartAProject.message) {
            setName("");
            setPhone("");
            setEmail("");
            setResume("");
            setCity("");
            setAboutyourself("");
            setIntInBuilding("");
            setWhatYouThink("");
            setStartup("");
            setWhyStartup("");
            setWhy("");
        }
    }, [StartAProject.message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert("hello");
        const formData = new FormData();
        formData.append("fullname", name);
        formData.append("phone", phone);
        formData.append("email", email);

        formData.append("location", city);
        formData.append("pitchDeck", resume[0]);
        formData.append("aboutyourself", aboutyourself);
        formData.append("ideas", intInBuilding);
        formData.append("techKnowhow", whatyouthink);
        formData.append("teachLead", startup);
        formData.append("whystartupcategory", whystartup);
        formData.append("teamplayerandwhy", why);

        // //console.log.log(startup);
        dispatch(StartAProjectAction(formData));
        //
        const form = new FormData();
        form.append("email", email);
        dispatch(SendinblueAction(form));
    };
    const handleDocumentSize = (document) => {
        document[0]?.size > 2000000
            ? getErrorMessage(
                  "danger",
                  "Message",
                  `${document[0]?.name} size should not be more than 2mb`
              )
            : setResume(document);
    };
    return (
        <Style>
            <form>
                <div className="form-group">
                    <Input
                        type="email"
                        label="Full Name"
                        name="fullname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <Input
                            type="number"
                            label="Telephone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <Input
                            type="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <Input
                        type="text"
                        label="Which city are you located in?"
                        name="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        // value={website}
                        // onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <Upload2
                        label=" Upload Resume "
                        accept=".zip,.rar,.7zip.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        // value={pitchdeck}
                        onChange={(image) =>
                            handleDocumentSize(image.target.files)
                        }
                    />
                </div>
                <div className="form-group">
                    <TextArea
                        label=" Tell us about yourself."
                        name="aboutyourself"
                        value={aboutyourself}
                        onChange={(e) => setAboutyourself(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <TextArea
                        label="What are you interested in building and why is it important?"
                        value={intInBuilding}
                        name="intInBuilding"
                        onChange={(e) => setIntInBuilding(e.target.value)}
                    />
                </div>

                <div className="form-group mb-5">
                    <TextArea
                        label="What do you know about the Tech ecosystem and do you have any tech skills that you can tell us about?"
                        value={whatyouthink}
                        name="whatyouthink"
                        onChange={(e) => setWhatYouThink(e.target.value)}
                    />
                </div>

                <div className=" mb-5">
                    <CheckboxList
                        // value={startup}
                        name="startup"
                        onChange={(e) => setStartup(e)}
                    />
                </div>

                <div className="form-group">
                    <TextArea
                        label="Tell us why you chose the startup category? "
                        value={whystartup}
                        name="whystartup"
                        onChange={(e) => setWhyStartup(e.target.value)}
                    />
                </div>

                <div className="form-group mb-6">
                    <TextArea
                        label="Do you think you can be a team player and why?"
                        value={why}
                        name="why"
                        onChange={(e) => setWhy(e.target.value)}
                    />
                </div>

                <div className="text-center">
                    <button
                        className=" btn-secondary btn-upload"
                        onClick={handleSubmit}
                    >
                        {StartAProject.loading ? (
                            <Spinner animation="grow" />
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
        </Style>
    );
}
