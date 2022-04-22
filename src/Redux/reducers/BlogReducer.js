import { Blogs } from "../constant";

const initialState = {
  loading: false,
  Blogs: [],
  message: null,
  error: null,
};

const BlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Blogs.GET_BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Blogs.GET_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        Blogs: action.payload,
        // message: 'no here',
      };
    case Blogs.GET_BLOGS_FAILED:
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

export default BlogsReducer;
