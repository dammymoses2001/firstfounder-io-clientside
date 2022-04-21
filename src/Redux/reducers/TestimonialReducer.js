import { Testimonials } from "../constant";

const initialState = {
  loading: false,
  Testimonials: [],
  message: null,
  error: null,
};

const TestimonialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Testimonials.GET_TESTIMONIALS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Testimonials.GET_TESTIMONIALS_SUCCESS:
      return {
        ...state,
        loading: false,
        Testimonials: action.payload,
        // message: 'no here',
      };
    case Testimonials.GET_TESTIMONIALS_FAILED:
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

export default TestimonialsReducer;
