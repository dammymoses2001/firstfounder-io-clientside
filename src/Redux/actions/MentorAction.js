import axios from "../helper/axios";
import { Mentors } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const MentorsRequest = () => {
  return {
    type: Mentors.POST_MENTORS_REQUEST,
  };
};

const MentorsSuccess = (payload) => {
  return {
    type: Mentors.POST_MENTORS_SUCCESS,
    payload,
  };
};

const MentorsFailed = (payload) => {
  return {
    type: Mentors.POST_MENTORS_FAILED,
    payload,
  };
};

export const MentorsAction = (form) => {
  return async (dispatch) => {
    dispatch(MentorsRequest());

    try {
      const res = await axios.post("mentors", form);

      if (res.status === 200) {
        //   //console.log.log(res.data);
        //   const report = {
        //     type: 'message',
        //     message: res.data.message,
        //   };

        dispatch(MentorsSuccess(res.data.message));
        // dispatch(NotificationSuccess(res.data.message));
        // setTimeout(() => {
        //   dispatch(NotificationSuccess());
        //   dispatch(MentorsSuccess());
        // }, 3500);
      }
    } catch (error) {
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
      } else {
        getErrorMessage(
          "danger",
          "Message",
          "Unable to Connect, Check your Network"
        );
      }
      dispatch(MentorsFailed());
    }
  };
};
