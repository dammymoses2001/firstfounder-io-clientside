import { MediaMention } from "../constant";

const initialState = {
  loading: false,
  MediaMention: [],
  message: null,
  error: null,
};

const MediaMentionReducer = (state = initialState, action) => {
  switch (action.type) {
    case MediaMention.GET_MEDIA_MENTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MediaMention.GET_MEDIA_MENTION_SUCCESS:
      return {
        ...state,
        loading: false,
        MediaMention: action.payload,
        // message: 'no here',
      };
    case MediaMention.GET_MEDIA_MENTION_FAILED:
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

export default MediaMentionReducer;
