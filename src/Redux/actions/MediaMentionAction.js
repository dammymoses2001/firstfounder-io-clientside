import { MediaMention } from "../constant";
import axios from "../helper/axios";

const MediaMentionRequest = () => ({
  type: MediaMention.GET_MEDIA_MENTION_REQUEST,
});

const MediaMentionSuccess = (payload) => ({
  type: MediaMention.GET_MEDIA_MENTION_SUCCESS,
  payload,
});

const MediaMentionFailed = (payload) => ({
  type: MediaMention.GET_MEDIA_MENTION_FAILED,
  payload,
});

export const MediaMentionAction = () => {
  return async (dispatch) => {
    try {
      dispatch(MediaMentionRequest());
      const res = await axios.get("media");
      // //console.log.log(res);
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(MediaMentionSuccess(res?.data?.data));
      }
    } catch (err) {
      const error = "oops, something went wrong";
      // //console.log.log(err?.response?.data?.message);
      dispatch(MediaMentionFailed(error));
    }
  };
};
