import { Partners } from "../constant";
import axios from "../helper/axios";

const PartnersRequest = () => ({
  type: Partners.GET_PARTNERS_REQUEST,
});

const PartnersSuccess = (payload) => ({
  type: Partners.GET_PARTNERS_SUCCESS,
  payload,
});

const PartnersFailed = (payload) => ({
  type: Partners.GET_PARTNERS_FAILED,
  payload,
});

export const PartnersAction = () => {
  return async (dispatch) => {
    try {
      dispatch(PartnersRequest());
      const res = await axios.get("partners");
      // //console.log.log(res);
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(PartnersSuccess(res?.data?.data));
      }
    } catch (err) {
      const error = "oops, something went wrong";
      //console.log.log(err?.response?.data?.message);
      dispatch(PartnersFailed(error));
    }
  };
};
