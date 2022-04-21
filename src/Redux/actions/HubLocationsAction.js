import { HubLocations } from "../constant";
import axios from "../helper/axios";

const HubLocationsRequest = () => ({
  type: HubLocations.GET_HUB_LOCATION_REQUEST,
});

const HubLocationsSuccess = (payload) => ({
  type: HubLocations.GET_HUB_LOCATION_SUCCESS,
  payload,
});

const HubLocationsFailed = (payload) => ({
  type: HubLocations.GET_HUB_LOCATION_FAILED,
  payload,
});

export const HubLocationsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(HubLocationsRequest());
      const res = await axios.get("hubs location");
      // //console.log.log(res);
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(HubLocationsSuccess(res?.data?.data));
      }
    } catch (err) {
      const error = "oops, something went wrong";
      // //console.log.log(err?.response?.data?.message);
      dispatch(HubLocationsFailed(error));
    }
  };
};
