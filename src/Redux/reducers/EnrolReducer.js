import { Enrol } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const EnrolReducer = (state = initialState, action) => {
  switch (action.type) {
    case Enrol.POST_ENROL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Enrol.POST_ENROL_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Enrol.POST_ENROL_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default EnrolReducer;
