import { Notification } from "../constant";

const initialState = {
  //   categories: [],
  loading: false,
  message: "",
  error: null,
};

const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Notification.GET_USE_NOTIFICATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Notification.GET_USE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        // Notification: action.payload,
        message: action.payload,
      };
    case Notification.GET_USE_NOTIFICATION_FAILED:
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

export default NotificationReducer;
