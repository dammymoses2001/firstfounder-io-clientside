import { Subscribe } from "../constant";

const initialState = {
  //   categories: [],
  loading: false,
  message: "",
  error: null,
};

const SubscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Subscribe.POST_SUBSCRIBE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Subscribe.POST_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Subscribe.POST_SUBSCRIBE_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default SubscribeReducer;
