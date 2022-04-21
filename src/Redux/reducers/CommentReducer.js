import { Comment } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Comment.POST_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Comment.POST_COMMENT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case Comment.POST_COMMENT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default CommentReducer;
