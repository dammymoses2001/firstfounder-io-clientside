import { SendinBlue } from "../constant";

const initialState = {
  //   categories: [],
  loading: false,
  //   message: "",
  error: null,
};

const SendinBlueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SendinBlue.POST_SENDINBLUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SendinBlue.POST_SENDINBLUE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case SendinBlue.POST_SENDINBLUE_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default SendinBlueReducer;
