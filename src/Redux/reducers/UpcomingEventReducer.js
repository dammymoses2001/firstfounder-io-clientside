import { UpcomingEvents } from "../constant";

const initialState = {
  loading: false,
  UpcomingEvents: [],
  message: null,
  error: null,
};

const UpcomingEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UpcomingEvents.GET_UPCOMING_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UpcomingEvents.GET_UPCOMING_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        UpcomingEvents: action.payload,
        // message: 'no here',
      };
    case UpcomingEvents.GET_UPCOMING_EVENTS_FAILED:
      // //console.log.log(action);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UpcomingEventsReducer;
