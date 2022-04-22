import { OpenPosition } from "../constant";

const initialState = {
  loading: false,
  OpenPosition: [],
  message: null,
  error: null,
};

const OpenPositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case OpenPosition.GET_OPENPOSITION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OpenPosition.GET_OPENPOSITION_SUCCESS:
      return {
        ...state,
        loading: false,
        OpenPosition: action.payload,
        // message: 'no here',
      };
    case OpenPosition.GET_OPENPOSITION_FAILED:
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

export default OpenPositionReducer;
