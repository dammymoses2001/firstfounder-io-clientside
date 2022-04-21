import { Partners } from "../constant";

const initialState = {
  loading: false,
  Partners: [],
  message: null,
  error: null,
};

const PartnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Partners.GET_PARTNERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Partners.GET_PARTNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        Partners: action.payload,
        // message: 'no here',
      };
    case Partners.GET_PARTNERS_FAILED:
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

export default PartnersReducer;
