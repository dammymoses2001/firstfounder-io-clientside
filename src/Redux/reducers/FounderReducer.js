import { Founders } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const FoundersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Founders.POST_FOUNDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Founders.POST_FOUNDERS_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Founders.POST_FOUNDERS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default FoundersReducer;
