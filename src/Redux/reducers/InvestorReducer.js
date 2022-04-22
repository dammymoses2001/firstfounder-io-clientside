import { Investors } from "../constant";

const initialState = {
  //   categories: [],
  loading: false,
  message: null,
  error: null,
};

const InvestorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Investors.POST_INVESTORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Investors.POST_INVESTORS_SUCCESS:
      //console.log.log(action);
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Investors.POST_INVESTORS_FAILED:
      //console.log.log(action);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default InvestorsReducer;
