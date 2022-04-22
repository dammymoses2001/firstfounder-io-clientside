import axios from "../helper/axios";
import { Subscribe } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const SubscribeRequest = () => {
  return {
    type: Subscribe.POST_SUBSCRIBE_REQUEST,
  };
};

const SubscribeSuccess = (payload) => {
  return {
    type: Subscribe.POST_SUBSCRIBE_SUCCESS,
    payload,
  };
};

const SubscribeFailed = (payload) => {
  return {
    type: Subscribe.POST_SUBSCRIBE_FAILED,
    payload,
  };
};

export const SubscribeAction = (form) => {
  return async (dispatch) => {
    dispatch(SubscribeRequest());

    try {
      const res = await axios.post("subscribe", form);
      if (res.status === 200) {
        //console.log.log(res.data);
        //getNotification('danger', 'Warning');
        getErrorMessage("success", "Message", res.data.message);
        dispatch(SubscribeSuccess(res.data.message));
        setTimeout(() => {
          dispatch(SubscribeSuccess());
        }, 3000);
      }
    } catch (error) {
      if (error?.response) {
        //console.log.log(error?.response);
        //console.log.log(typeof error?.response?.data?.message == "object");
        if (typeof error?.response?.data?.message === "string") {
          // //console.log.log(error?.response?.data?.message);
          getErrorMessage("danger", "Message", error?.response?.data?.message);
        }

        if (typeof error?.response?.data?.message == "object") {
          // //console.log.log(error?.response?.data?.message, "2");
          const ErrorMessage = Object.values(error?.response?.data?.message);
          //console.log.log(ErrorMessage);
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
      }
      // //console.log.log(error?.response?.data?.message);
      if (form && !error?.response?.data?.message) {
        getErrorMessage(
          "danger",
          "Message",
          "Unable to Connect, Check your Network"
        );
      }
      dispatch(SubscribeFailed());
    }
  };
};
