import { Application } from "../constant";

const initialState = {
  loading: false,

  message: null,
  error: null,
};

const ApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Application.POST_APPLICATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Application.POST_APPLICATION_SUCCESS:
      return {
        ...state,
        loading: false,

        message: action.payload,
      };
    case Application.POST_APPLICATION_FAILED:
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

export default ApplicationReducer;
