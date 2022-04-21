import axios from "../helper/axios";
import { PartnersHub } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const PartnersHubRequest = () => {
  return {
    type: PartnersHub.POST_PARTNERSHUB_REQUEST,
  };
};

const PartnersHubSuccess = (payload) => {
  return {
    type: PartnersHub.POST_PARTNERSHUB_SUCCESS,
    payload,
  };
};

const PartnersHubFailed = (payload) => {
  return {
    type: PartnersHub.POST_PARTNERSHUB_FAILED,
    payload,
  };
};

export const PartnersHubAction = (form) => {
  return async (dispatch) => {
    dispatch(PartnersHubRequest());
    try {
      const res = await axios.post("partners hub", form);
      if (res.status === 200) {
        // //console.log.log(res.data);

        dispatch(PartnersHubSuccess(res.data[0]));
        setTimeout(() => {
          dispatch(PartnersHubSuccess());
        }, 5000);
      }
    } catch (error) {
      if (error.response) {
        // //console.log.log(error?.response?.data?.message, '1');
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
        } else {
          getErrorMessage(
            "danger",
            "Message",
            "Unable to Connect, Check your Network"
          );
        }
        dispatch(PartnersHubFailed());
      }
    }
  };
};

//  dispatch(PartnersHubFailed());
