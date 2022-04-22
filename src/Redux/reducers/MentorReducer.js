import { Mentors } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const MentorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Mentors.POST_MENTORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Mentors.POST_MENTORS_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Mentors.POST_MENTORS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default MentorsReducer;
