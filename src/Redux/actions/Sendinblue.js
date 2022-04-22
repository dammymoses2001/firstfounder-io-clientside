import axios from "../helper/axios2";
import { SendinBlue } from "../constant";
//import { getErrorMessage } from "../../Components/Ui/Messages";

const SendinblueRequest = () => {
  return {
    type: SendinBlue.POST_SENDINBLUE_REQUEST,
  };
};

const SendinblueSuccess = (payload) => {
  return {
    type: SendinBlue.POST_SENDINBLUE_SUCCESS,
    payload,
  };
};

const SendinblueFailed = (payload) => {
  return {
    type: SendinBlue.POST_SENDINBLUE_FAILED,
    payload,
  };
};

export const SendinblueAction = (form) => {
  return async (dispatch) => {
    dispatch(SendinblueRequest());
    //console.log.log(form);
    try {
      const res = await axios.post("sendinblue", form);
      if (res.status === 200) {
        console.log.log(res.data);
        //getNotification('danger', 'Warning');
        // getErrorMessage("success", "Message", res.data.message);
        dispatch(SendinblueSuccess(res.data.message));
        setTimeout(() => {
          dispatch(SendinblueSuccess());
        }, 3000);
      }
    } catch (error) {
      //   if (error?.response) {
      //     //console.log.log(error?.response);
      //     //console.log.log(typeof error?.response?.data?.message == "object");
      //     if (typeof error?.response?.data?.message === "string") {
      //       // //console.log.log(error?.response?.data?.message);
      //       getErrorMessage("danger", "Message", error?.response?.data?.message);
      //     }

      //     if (typeof error?.response?.data?.message == "object") {
      //       // //console.log.log(error?.response?.data?.message, "2");
      //       const ErrorMessage = Object.values(error?.response?.data?.message);
      //       //console.log.log(ErrorMessage);
      //       //ErrorMessage.map((data) => //console.log.log(data));
      //       ErrorMessage.forEach((data) =>
      //         getErrorMessage("danger", "Message", data[0])
      //       );
      //     } else {
      //       getErrorMessage(
      //         "danger",
      //         "Message",
      //         "Unable to Connect, Check your Network"
      //       );
      //     }
      //   }
      //   // //console.log.log(error?.response?.data?.message);
      //   if (form && !error?.response?.data?.message) {
      //     getErrorMessage(
      //       "danger",
      //       "Message",
      //       "Unable to Connect, Check your Network"
      //     );
      //   }
      dispatch(SendinblueFailed());
    }
  };
};
