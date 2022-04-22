import { Blogs } from "../constant";
import axios from "../helper/axios";

const BlogsRequest = () => ({
  type: Blogs.GET_BLOGS_REQUEST,
});

const BlogsSuccess = (payload) => ({
  type: Blogs.GET_BLOGS_SUCCESS,
  payload,
});

const BlogsFailed = (payload) => ({
  type: Blogs.GET_BLOGS_FAILED,
  payload,
});

export const BlogsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(BlogsRequest());
      const res = await axios.get("blogs");
      // //console.log.log(res);
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(BlogsSuccess(res?.data?.data));
      }
    } catch (err) {
      const error = "oops, something went wrong";
      // s
      dispatch(BlogsFailed(error));
    }
  };
};
