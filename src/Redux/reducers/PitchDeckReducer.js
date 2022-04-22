import { PitchDeck } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const PitchDeckReducer = (state = initialState, action) => {
  switch (action.type) {
    case PitchDeck.POST_PITCHDECK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PitchDeck.POST_PITCHDECK_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case PitchDeck.POST_PITCHDECK_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default PitchDeckReducer;
