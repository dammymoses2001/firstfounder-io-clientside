import axios from "../helper/axios";
import { Investors } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const InvestorsRequest = () => {
  return {
    type: Investors.POST_INVESTORS_REQUEST,
  };
};

const InvestorsSuccess = (payload) => {
  return {
    type: Investors.POST_INVESTORS_SUCCESS,
    payload,
  };
};

const InvestorsFailed = (payload) => {
  return {
    type: Investors.POST_INVESTORS_FAILED,
    payload,
  };
};

export const InvestorsAction = (form) => {
  return async (dispatch) => {
    dispatch(InvestorsRequest());

    try {
      const res = await axios.post("investors", form);
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(InvestorsSuccess(res.data.message));

        // if (res.data.message) {
        setTimeout(() => {
          dispatch(InvestorsSuccess());
          // //console.log.log(res.data);
        }, 7000);
        // }

        // clearTimeout(Timer1);
      }
    } catch (error) {
      // //console.log.log(error.response, error);
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
      dispatch(InvestorsFailed());
    }
  };
};
