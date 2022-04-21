import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../Ui/input";
import TextArea from "../Ui/TextArea";
// import FilePicker from "../Ui/FilePicker";
import { useDispatch, useSelector } from "react-redux";
import { FutureMarkerAction, SendinblueAction } from "../../Redux/actions";
import { Spinner } from "react-bootstrap";
import Upload2 from "../Ui/Upload2";
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
    const FutureMaker = useSelector((state) => state.FutureMaker);

    ////console.log.log(FutureMaker);
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");
    const [business, setBusiness] = useState("");
    const [businesscontact, setBusinesscontact] = useState("");
    const [industry, setIndustry] = useState("");
    const [city, setCity] = useState("");
    const [progress, setProgress] = useState("");
    const [businessidea, setBusinessidea] = useState("");
    const [fundsharing, setFundsharing] = useState("");
    const [legal, setLegal] = useState("");
    const [teams, setTeams] = useState("");
    const [others, setOthers] = useState("");
    const [aboutus, setAboutus] = useState("");
    const [equity, setEquity] = useState("no");
    const [videopitch, setVideopitch] = useState("");
    const [pitchdeck, setPitchdeck] = useState("");
    const [indemnity, setIndemnity] = useState("no");

    useEffect(() => {
        if (FutureMaker.message) {
            setName("");
            setEmail("");
            setWebsite("");
            setBusiness("");
            setBusinesscontact("");
            setIndustry("");
            setProgress("");
            setBusinessidea("");
            setFundsharing("");
            setCity("");
            setLegal("");
            setTeams("");
            setOthers("");
            setAboutus("");
            setEquity("");
            setVideopitch("");
            setPitchdeck("");
            setIndemnity("");
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    }, [FutureMaker.message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append(
            "website",
            website ? website : "http://127.0.0.1:8000/nowebsite"
        );
        formData.append("Business", business);
        formData.append("contact", businesscontact);
        formData.append("category", industry);
        formData.append("progress", progress);
        formData.append("email", email);
        formData.append("idea", businessidea);
        formData.append("equity", fundsharing);
        formData.append("legal", legal);
        formData.append("team", teams);
        formData.append("others", others);
        formData.append("aboutUs", aboutus);
        formData.append("videoPitch", videopitch[0]);
        formData.append("pitchDeck", pitchdeck[0]);
        formData.append("equityAgreement", equity);
        formData.append("indemnity", indemnity);

        ////console.log.log(formData, name, videopitch[0], equity, indemnity);
        dispatch(FutureMarkerAction(formData));

        //
        const form = new FormData();
        form.append("email", email);
        dispatch(SendinblueAction(form));
    };

    const handleVideoSize = (document) => {
        console.log(document);
        document[0]?.size > 62466185
            ? getErrorMessage(
                  "danger",
                  "Message",
                  `${document[0]?.name} size should not be more than 60mb`
              )
            : setVideopitch(document);
    };

    const handleDocumentSize = (document) => {
        document[0]?.size > 2000000
            ? getErrorMessage(
                  "danger",
                  "Message",
                  `${document[0]?.name} size should not be more than 2mb`
              )
            : setPitchdeck(document);
    };

    return (
        <Style>
            <form>
                <div className="row">
                    <div className="form-group col-md-6">
                        <Input
                            type="text"
                            label="Name"
                            name="fullname"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <Input
                            type="url"
                            label="Website"
                            name="website"
                            check
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group col-md-12">
                    <Input
                        type="email"
                        label="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-12">
                    <Input
                        type="url"
                        label="Which city are you located in?"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <TextArea
                        label=" Business description"
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <TextArea
                        label="Founder and Business Contact"
                        placeholder="Founders info, phone, team members, number of team members, business location etc."
                        value={businesscontact}
                        onChange={(e) => setBusinesscontact(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <TextArea
                        label="Product/Service category"
                        placeholder="Business category – industry, years of establishment, etc"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <TextArea
                        label="Progress"
                        placeholder="Is service/product used, market coverage, revenue, etc"
                        value={progress}
                        onChange={(e) => setProgress(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <TextArea
                        label="Business Idea"
                        placeholder="Why this business, founder’s expertise, competitors, USP, what do you need to start, etc"
                        value={businessidea}
                        onChange={(e) => setBusinessidea(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <TextArea
                        label="Equity/Fund sharing"
                        placeholder="Investment received, ownership, business structure, employees, planned equity for new startups etc."
                        value={fundsharing}
                        onChange={(e) => setFundsharing(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <TextArea
                        label="Legal"
                        placeholder="Intellectual property agreement, non-founder involvement, any vital info worth sharing"
                        value={legal}
                        onChange={(e) => setLegal(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <TextArea
                        label="Team"
                        placeholder="Who are the key players and what is their experience"
                        value={teams}
                        onChange={(e) => setTeams(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <TextArea
                        label="Others"
                        placeholder="Other interesting business ideas, future business proposals/idea"
                        value={others}
                        onChange={(e) => setOthers(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <TextArea
                        label="  How did you hear about us?"
                        placeholder="why FirstFounders, how did you hear about this program etc."
                        value={aboutus}
                        onChange={(e) => setAboutus(e.target.value)}
                    />
                </div>

                <div className="form-group mb-5">
                    <Upload2
                        label="Video Pitch(not more than 60mb)"
                        placeholder="Upload a 3 minute video pitch telling us about your digital business idea"
                        // value={videopitch}
                        accept="video/mp4,video/x-m4v,video/*"
                        onChange={(image) =>
                            handleVideoSize(image.target.files)
                        }
                    />
                </div>
                <div className="form-group mb-5">
                    {/* <FilePicker isLoading={isUploadingImage} 
        handleGetImage={(images) => this.handleGetImage(images)}
         multiple={false} label={`Select profile image`} /> */}

                    <Upload2
                        label="  Pitch Deck (not more than 2mb)"
                        placeholder="Upload A 10-page pitch deck"
                        accept=".zip,.rar,.7zip.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        // value={pitchdeck}
                        onChange={(image) =>
                            handleDocumentSize(image.target.files)
                        }
                        // onChange={//console.log.log(onChange)}
                    />
                </div>
                <div className="form-group mb-7">
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label className="mb-3">
                                Equity <span>*</span>
                            </label>
                            <p>
                                Do you agree to relinquish 15% of your company
                                to FirstFounders upon Selection
                            </p>
                            <div className="w-50">
                                <select
                                    className="form-control form-control-lg"
                                    value={equity}
                                    onChange={(e) => setEquity(e.target.value)}
                                >
                                    <option>Select</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <label className="mb-3">
                                Indemnity <span>*</span>
                            </label>
                            <p>
                                We take into cognizance the privacy of your idea
                                and would commit to protecting it. However,
                                FirstFounders will not be liable for any loss,
                                damages etc incurred during and after the course
                                of this program.
                            </p>
                            <div className="w-50">
                                <select
                                    className="form-control form-control-lg"
                                    value={indemnity}
                                    onChange={(e) =>
                                        setIndemnity(e.target.value)
                                    }
                                >
                                    <option>Select</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        className=" btn-secondary btn-upload"
                        onClick={handleSubmit}
                    >
                        {FutureMaker.loading ? (
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
