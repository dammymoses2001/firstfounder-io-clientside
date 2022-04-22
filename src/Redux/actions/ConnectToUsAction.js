import axios from "../helper/axios";
import { Connect } from "../constant";
import { getErrorMessage, getNotification } from "../../Components/Ui/Messages";

const ConnectRequest = () => {
  return {
    type: Connect.POST_CONNECT_TO_US_REQUEST,
  };
};

const ConnectSuccess = (payload) => {
  return {
    type: Connect.POST_CONNECT_TO_US_SUCCESS,
    payload,
  };
};

const ConnectFailed = (payload) => {
  return {
    type: Connect.POST_CONNECT_TO_US_FAILED,
    payload,
  };
};

export const ConnectAction = (form) => {
  return async (dispatch) => {
    dispatch(ConnectRequest());

    try {
      const res = await axios.post("connect to us", form);
      if (res.status === 200) {
        // //console.log.log(res.data);
        // getErrorMessage("success", "Message", res?.data?.message);
        getNotification(
          "success",
          "Message",
          "Message successful!",
          "Thank you for applying, an email will be sent to your inbox for further information. "
        );
        dispatch(ConnectSuccess(res.data.message));
        setTimeout(() => {
          dispatch(ConnectSuccess());
        }, 5000);
        // setTimeout(() => {
        //   dispatch(ConnectSuccess());
        //   dispatch(NotificationSuccess());
        // }, 3000);
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
        dispatch(ConnectFailed());
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
