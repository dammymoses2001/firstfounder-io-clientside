import { Developer } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const DeveloperReducer = (state = initialState, action) => {
  switch (action.type) {
    case Developer.POST_DEVELOPER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Developer.POST_DEVELOPER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Developer.POST_DEVELOPER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default DeveloperReducer;
