import { HubLocations } from "../constant";

const initialState = {
  loading: false,
  HubLocations: [],
  message: null,
  error: null,
};

const HubLocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HubLocations.GET_HUB_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HubLocations.GET_HUB_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        HubLocations: action.payload,
        // message: 'no here',
      };
    case HubLocations.GET_HUB_LOCATION_FAILED:
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

export default HubLocationsReducer;
