import axios from "../helper/axios";
import { StartAProject } from "../constant";
import { getErrorMessage, getNotification } from "../../Components/Ui/Messages";

const StartAProjectRequest = () => {
  return {
    type: StartAProject.POST_START_A_PROJECT_REQUEST,
  };
};

const StartAProjectSuccess = (payload) => {
  return {
    type: StartAProject.POST_START_A_PROJECT_SUCCESS,
    payload,
  };
};

const StartAProjectFailed = (payload) => {
  return {
    type: StartAProject.POST_START_A_PROJECT_FAILED,
    payload,
  };
};

export const StartAProjectAction = (form) => {
  return async (dispatch) => {
    dispatch(StartAProjectRequest());
    try {
      const res = await axios.post("launch projects", form);
      if (res.status === 200) {
        //console.log.log(res.data);
        getNotification(
          "success",
          "Message",
          res?.data?.message,
          "We will review your application and inform you if you are selected. "
        );
        dispatch(StartAProjectSuccess(res.data.message));
        setTimeout(() => {
          dispatch(StartAProjectSuccess());
        }, 5000);
        // dispatch(NotificationSuccess(res.data.message));
        // return report;
      }
    } catch (error) {
      if (error?.response) {
        // //console.log.log(error?.response?.data?.message, '1');
        if (typeof error?.response?.data?.message === "string") {
          //console.log.log(error?.response?.data?.message);
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

      dispatch(StartAProjectFailed());
    }
  };
};
