import axios from "../helper/axios";
import { Developer } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const DeveloperRequest = () => {
  return {
    type: Developer.POST_DEVELOPER_REQUEST,
  };
};

const DeveloperSuccess = (payload) => {
  return {
    type: Developer.POST_DEVELOPER_SUCCESS,
    payload,
  };
};

const DeveloperFailed = (payload) => {
  return {
    type: Developer.POST_DEVELOPER_FAILED,
    payload,
  };
};

export const DeveloperAction = (form) => {
  return async (dispatch) => {
    dispatch(DeveloperRequest());
    try {
      const res = await axios.post("developers", form);
      if (res.status === 200) {
        // //console.log.log(res.data);

        dispatch(DeveloperSuccess(res.data.message));
        setTimeout(() => {
          dispatch(DeveloperSuccess());
        }, 5000);
        // dispatch(NotificationSuccess(res.data.message));
        // return report;
      }
    } catch (error) {
      if (error?.response) {
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
        }
      } else {
        getErrorMessage(
          "danger",
          "Message",
          "Unable to Connect, Check your Network"
        );
      }
      dispatch(DeveloperFailed());
    }
  };
};
