import axios from "../helper/axios";
import { Comment } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const CommentRequest = () => {
  return {
    type: Comment.POST_COMMENT_REQUEST,
  };
};

const CommentSuccess = (payload) => {
  return {
    type: Comment.POST_COMMENT_SUCCESS,
    payload,
  };
};

const CommentFailed = (payload) => {
  return {
    type: Comment.POST_COMMENT_FAILED,
    payload,
  };
};

export const CommentAction = (form, id) => {
  return async (dispatch) => {
    dispatch(CommentRequest());
    try {
      const res = await axios.post(`blogs/${id}/comment`, form);
      //console.log.log(res);
      if (res.status === 201) {
        // //console.log.log(res.data);

        getErrorMessage("success", "Message", res?.data?.message);
        dispatch(CommentSuccess(res?.data?.message));
        setTimeout(() => {
          dispatch(CommentSuccess());
          window.location.reload();
        }, 3000);
        // dispatch(NotificationSuccess(res.data.message));
        // return report;
      }
    } catch (error) {
      // //console.log.log(error.response);
      // //console.log.log(typeof error?.response?.data?.message);
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
          "Error",
          "Unable to Connect, Check your Network"
        );
      }
      dispatch(CommentFailed());
    }
  };
};
