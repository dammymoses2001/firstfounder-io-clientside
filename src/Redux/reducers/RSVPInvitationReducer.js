import { RSVPInvitation } from '../constant';

const initialState = {
  //   categories: [],
  loading: false,
  message: '',
  error: null,
};

const RSVPInvitationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RSVPInvitation.POST_RSVP_INVITATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RSVPInvitation.POST_RSVP_INVITATION_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case RSVPInvitation.POST_RSVP_INVITATION_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default RSVPInvitationReducer;
