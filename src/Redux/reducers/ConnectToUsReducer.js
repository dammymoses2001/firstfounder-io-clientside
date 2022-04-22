import { Connect } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const ConnectReducer = (state = initialState, action) => {
  switch (action.type) {
    case Connect.POST_CONNECT_TO_US_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Connect.POST_CONNECT_TO_US_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Connect.POST_CONNECT_TO_US_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ConnectReducer;
