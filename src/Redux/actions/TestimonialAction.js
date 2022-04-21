import { Testimonials } from "../constant";
import axios from "../helper/axios";

const TestimonialsRequest = () => ({
  type: Testimonials.GET_TESTIMONIALS_REQUEST,
});

const TestimonialsSuccess = (payload) => ({
  type: Testimonials.GET_TESTIMONIALS_SUCCESS,
  payload,
});

const TestimonialsFailed = (payload) => ({
  type: Testimonials.GET_TESTIMONIALS_FAILED,
  payload,
});

export const TestimonialsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(TestimonialsRequest());
      const res = await axios.get("testimonials");
      // //console.log.log(res);
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(TestimonialsSuccess(res?.data?.data));
      }
    } catch (err) {
      const error = "oops, something went wrong";
      // //console.log.log(err?.response?.data?.message);
      dispatch(TestimonialsFailed(error));
    }
  };
};
