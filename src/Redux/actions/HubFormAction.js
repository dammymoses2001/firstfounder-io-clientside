import axios from "../helper/axios";
import { HubForm } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const HubFormRequest = () => {
  return {
    type: HubForm.POST_HUBFORM_REQUEST,
  };
};

const HubFormSuccess = (payload) => {
  return {
    type: HubForm.POST_HUBFORM_SUCCESS,
    payload,
  };
};

const HubFormFailed = (payload) => {
  return {
    type: HubForm.POST_HUBFORM_FAILED,
    payload,
  };
};

export const HubFormAction = (form) => {
  return async (dispatch) => {
    dispatch(HubFormRequest());
    try {
      const res = await axios.post("hub form", form);
      if (res.status === 200) {
        // //console.log.log(res.data);

        dispatch(HubFormSuccess(res?.data?.message));
        setTimeout(() => {
          dispatch(HubFormSuccess());
        }, 3000);
      }
    } catch (error) {
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
      dispatch(HubFormFailed());
    }
  };
};
