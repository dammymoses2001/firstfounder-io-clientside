import { Press } from "../constant";

const initialState = {
  loading: false,
  Presses: [],
  message: null,
  error: null,
};

const PressReducer = (state = initialState, action) => {
  switch (action.type) {
    case Press.GET_PRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Press.GET_PRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        Presses: action.payload,
        // message: 'no here',
      };
    case Press.GET_PRESS_FAILED:
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

export default PressReducer;
