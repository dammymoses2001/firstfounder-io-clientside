import { OpenPosition } from "../constant";
import axios from "../helper/axios3";

const OpenPositionRequest = () => ({
  type: OpenPosition.GET_OPENPOSITION_REQUEST,
});

const OpenPositionSuccess = (payload) => ({
  type: OpenPosition.GET_OPENPOSITION_SUCCESS,
  payload,
});

const OpenPositionFailed = (payload) => ({
  type: OpenPosition.GET_OPENPOSITION_FAILED,
  payload,
});

export const OpenPositionAction = () => {
  return async (dispatch) => {
    try {
      dispatch(OpenPositionRequest());
      const res = await axios.get("openposition");
      // console.log(res.data, "hello");
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(OpenPositionSuccess(res?.data?.data));
      }
    } catch (err) {
      const error = "oops, something went wrong";
      // s
      dispatch(OpenPositionFailed(error));
    }
  };
};
