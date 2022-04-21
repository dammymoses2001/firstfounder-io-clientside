import axios from "../helper/axios";
import { Founders } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const FoundersRequest = () => {
  return {
    type: Founders.POST_FOUNDERS_REQUEST,
  };
};

const FoundersSuccess = (payload) => {
  return {
    type: Founders.POST_FOUNDERS_SUCCESS,
    payload,
  };
};

const FoundersFailed = (payload) => {
  return {
    type: Founders.POST_FOUNDERS_FAILED,
    payload,
  };
};

export const FoundersAction = (form) => {
  return async (dispatch) => {
    dispatch(FoundersRequest());

    try {
      const res = await axios.post("founders", form);
      if (res.status === 200) {
        // //console.log.log(res.data);

        dispatch(FoundersSuccess(res.data.message));
        setTimeout(() => {
          dispatch(FoundersSuccess());
        }, 5000);
        // setTimeout(() => {
        //   dispatch(FoundersSuccess());
        //   dispatch(NotificationSuccess());
        // }, 3000);
      }
    } catch (error) {
      if (error.response) {
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
      dispatch(FoundersFailed());
    }
  };
};
