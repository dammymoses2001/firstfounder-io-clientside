import { ClientProjects } from "../constant";
import axios from "../helper/axios";

const ClientProjectsRequest = () => ({
  type: ClientProjects.GET_CLIENT_PROJECTS_REQUEST,
});

const ClientProjectsSuccess = (payload) => ({
  type: ClientProjects.GET_CLIENT_PROJECTS_SUCCESS,
  payload,
});

const ClientProjectsFailed = (payload) => ({
  type: ClientProjects.GET_CLIENT_PROJECTS_FAILED,
  payload,
});

export const ClientProjectsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(ClientProjectsRequest());
      const res = await axios.get("clientProjects");
      // //console.log.log(res);
      if (res.status === 200) {
        // //console.log.log(res.data);
        dispatch(ClientProjectsSuccess(res?.data?.data));
      }
    } catch (err) {
      if (err.response) {
        // const error = 'oops, something went wrong';
        // //console.log.log(err?.response?.data?.message);
      }
      dispatch(ClientProjectsFailed());
    }
  };
};
