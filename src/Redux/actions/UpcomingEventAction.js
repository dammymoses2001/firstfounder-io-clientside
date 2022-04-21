import { UpcomingEvents } from "../constant";
import axios from "../helper/axios";

const UpcomingEventsRequest = () => ({
  type: UpcomingEvents.GET_UPCOMING_EVENTS_REQUEST,
});

const UpcomingEventsSuccess = (payload) => ({
  type: UpcomingEvents.GET_UPCOMING_EVENTS_SUCCESS,
  payload,
});

const UpcomingEventsFailed = (payload) => ({
  type: UpcomingEvents.GET_UPCOMING_EVENTS_FAILED,
  payload,
});

export const UpcomingEventsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(UpcomingEventsRequest());
      const res = await axios.get("upcomingEvents");
      // //console.log.log(res);
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(UpcomingEventsSuccess(res?.data?.data));
      }
    } catch (err) {
      const error = "oops, something went wrong";
      // //console.log.log(err?.response?.data?.message);
      dispatch(UpcomingEventsFailed(error));
    }
  };
};
