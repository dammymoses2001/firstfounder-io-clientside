import axios from "../helper/axios";
import { PitchDeck } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const PitchDeckRequest = () => {
  return {
    type: PitchDeck.POST_PITCHDECK_REQUEST,
  };
};

const PitchDeckSuccess = (payload) => {
  return {
    type: PitchDeck.POST_PITCHDECK_SUCCESS,
    payload,
  };
};

const PitchDeckFailed = (payload) => {
  return {
    type: PitchDeck.POST_PITCHDECK_FAILED,
    payload,
  };
};

export const PitchDeckAction = (form) => {
  return async (dispatch) => {
    dispatch(PitchDeckRequest());
    try {
      const res = await axios.post("pitchdecks", form);
      if (res.status === 200) {
        // //console.log.log(res.data);

        getErrorMessage("success", "Message", res.data.message);
        dispatch(PitchDeckSuccess(res.data.message));
        setTimeout(() => {
          dispatch(PitchDeckSuccess(""));
        }, 5000);
        // dispatch(NotificationSuccess(res.data.message));
        // return report;
      }
    } catch (error) {
      // //console.log.log(error.response);
      if (error?.response) {
        if (typeof error?.response?.data?.message === "string") {
          // //console.log.log(error?.response?.data?.message);
          getErrorMessage("danger", "Message", error?.response?.data?.message);
        }

        if (typeof error?.response?.data?.message === "object") {
          const ErrorMessage = Object.values(error?.response?.data?.message);
          //ErrorMessage.map((data) => //console.log.log(data));
          ErrorMessage.forEach((data) =>
            getErrorMessage("danger", "Message", data[0])
          );
        }
        dispatch(PitchDeckFailed());
      } else {
        getErrorMessage(
          "danger",
          "Message",
          "Unable to Connect, Check your Network"
        );
      }
    }
  };
};
