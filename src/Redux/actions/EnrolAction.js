import axios from "../helper/axios";
import { Enrol } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const EnrolRequest = () => {
  return {
    type: Enrol.POST_ENROL_REQUEST,
  };
};

const EnrolSuccess = (payload) => {
  return {
    type: Enrol.POST_ENROL_SUCCESS,
    payload,
  };
};

const EnrolFailed = (payload) => {
  return {
    type: Enrol.POST_ENROL_FAILED,
    payload,
  };
};

export const EnrolAction = (form) => {
  return async (dispatch) => {
    dispatch(EnrolRequest());
    try {
      const res = await axios.post("digital entrepreneurs", form);
      if (res.status === 200) {
        //console.log.log(res.data);

        dispatch(EnrolSuccess(res.data[0]));
        setTimeout(() => {
          dispatch(EnrolSuccess());
        }, 5000);
        // dispatch(NotificationSuccess(res.data.message));
        // return report;
      }
    } catch (error) {
      if (error?.response) {
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
        dispatch(EnrolFailed());
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
