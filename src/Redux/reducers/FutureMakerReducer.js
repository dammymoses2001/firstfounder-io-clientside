import { FutureMarker } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const FutureMarkerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FutureMarker.POST_FUTURE_MARKER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FutureMarker.POST_FUTURE_MARKER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case FutureMarker.POST_FUTURE_MARKER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default FutureMarkerReducer;
