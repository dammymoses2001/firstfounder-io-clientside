import { ClientProjects } from "../constant";

const initialState = {
  loading: false,
  ClientProjects: [],
  message: null,
  error: null,
};

const ClientProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ClientProjects.GET_CLIENT_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ClientProjects.GET_CLIENT_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        ClientProjects: action.payload,
        // message: 'no here',
      };
    case ClientProjects.GET_CLIENT_PROJECTS_FAILED:
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

export default ClientProjectsReducer;
