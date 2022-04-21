import styled from "styled-components";
import { store } from "react-notifications-component";
// preferred way to import (from `v4`). Uses `animate__` prefix.
import "animate.css/animate.min.css";

// Alternate way to use classes without prefix like `animated fadeIn`
import "animate.css/animate.compat.css";
//Image

// import SuccessImage from '../Images/successImg.png';

import SuccessImage from "../../Assets/Image/successImg.png";

const ModalStyle = styled.div`
  background: #fff;
  text-align: center;
  width: 400px;
  padding: 2rem;
  img {
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    width: auto;
    img {
      width: 30%;
    }
    /* max-width: 80%; */
  }
`;

export const getErrorMessage = (type, title, message) => {
  store.addNotification({
    title: `${title}`,
    message: `${message}`,
    type: `${type}`,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      showIcon: true,
      onScreen: true,
      pauseOnHover: true,
    },
    dismissable: { click: true },
  });
};

export const getNotification = (type, title, message, subtitle) => {
  if (message) {
    store.addNotification({
      content: AllModal(message, subtitle),
      title: `${title}`,

      type: `${type}`,
      insert: "top",
      container: "center",
      animationIn: ["animate__animated", "animate__fadeInDown"],
      animationOut: ["animate__animated", "animate__fadeOutDown"],
      dismiss: {
        duration: 5000,
        pauseOnHover: true,
      },
      dismissable: { click: true, pauseOnHover: true },
    });
  }
};

//modal
export const AllModal = (message, subtitle) => {
  return (
    <ModalStyle>
      <div className="d-flex justify-content-center mb-3">
        <img src={SuccessImage} alt="" />
      </div>
      <h4 className="mb-3">
        {message
          ? message
          : "Thank you for your interest to join FirstFounders Investors Network. !"}
      </h4>
      <p>{subtitle ? subtitle : "We will keep you updated on next steps. "}</p>
    </ModalStyle>
  );
};
