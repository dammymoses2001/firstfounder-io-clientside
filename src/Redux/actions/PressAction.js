import { Press } from "../constant";
import axios from "../helper/axios";

const PressRequest = () => ({
  type: Press.GET_PRESS_REQUEST,
});

const PressSuccess = (payload) => ({
  type: Press.GET_PRESS_SUCCESS,
  payload,
});

const PressFailed = (payload) => ({
  type: Press.GET_PRESS_FAILED,
  payload,
});

export const PressAction = () => {
  return async (dispatch) => {
    try {
      dispatch(PressRequest());
      const res = await axios.get("presses");
      // //console.log.log(res);
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(PressSuccess(res?.data?.data));
      }
    } catch (err) {
      const error = "oops, something went wrong";
      // //console.log.log(err?.response?.data?.message);
      dispatch(PressFailed(error));
    }
  };
};
