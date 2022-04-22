import { StartAProject } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const StartAProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case StartAProject.POST_START_A_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case StartAProject.POST_START_A_PROJECT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case StartAProject.POST_START_A_PROJECT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default StartAProjectReducer;
