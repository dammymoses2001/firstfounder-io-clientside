import { HubForm } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const HubFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case HubForm.POST_HUBFORM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HubForm.POST_HUBFORM_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case HubForm.POST_HUBFORM_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default HubFormReducer;
