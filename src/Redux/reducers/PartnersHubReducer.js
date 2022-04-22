import { PartnersHub } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const PartnersHubReducer = (state = initialState, action) => {
  switch (action.type) {
    case PartnersHub.POST_PARTNERSHUB_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PartnersHub.POST_PARTNERSHUB_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case PartnersHub.POST_PARTNERSHUB_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default PartnersHubReducer;
