import axios from "../helper/axios";
import { RSVPInvitation } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const RSVPInvitationRequest = () => {
  return {
    type: RSVPInvitation.POST_RSVP_INVITATION_REQUEST,
  };
};

const RSVPInvitationSuccess = (payload) => {
  return {
    type: RSVPInvitation.POST_RSVP_INVITATION_SUCCESS,
    payload,
  };
};

const RSVPInvitationFailed = (payload) => {
  return {
    type: RSVPInvitation.POST_RSVP_INVITATION_FAILED,
    payload,
  };
};

export const RSVPInvitationAction = (form) => {
  return async (dispatch) => {
    dispatch(RSVPInvitationRequest());
    try {
      const res = await axios.post("rsp invitations", form);
      if (res.status === 200) {
        // //console.log.log(res.data);

        dispatch(RSVPInvitationSuccess(res?.data?.message));
        setTimeout(() => {
          dispatch(RSVPInvitationSuccess());
        }, 3000);
      }
    } catch (error) {
      if (error.response) {
        if (typeof error?.response?.data?.message === "string") {
          // //console.log.log(error?.response?.data?.message);
          getErrorMessage("danger", "Message", error?.response?.data?.message);
        }
        if (typeof error?.response?.data?.message === "object") {
          // //console.log.log(error?.response?.data?.message, "2");
          const ErrorMessage = Object.values(error?.response?.data?.message);
          //ErrorMessage.map((data) => //console.log.log(data));
          ErrorMessage.forEach((data) =>
            getErrorMessage("danger", "Message", data[0])
          );
        }
      } else {
        getErrorMessage(
          "danger",
          "Message",
          "Unable to Connect, Check your Network"
        );
      }
      dispatch(RSVPInvitationFailed());
    }
  };
};

//dispatch(RSVPInvitationFailed());
