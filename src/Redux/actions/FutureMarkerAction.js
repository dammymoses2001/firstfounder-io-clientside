import axios from "../helper/axios";
import { FutureMarker } from "../constant";
import { getErrorMessage, getNotification } from "../../Components/Ui/Messages";

const FutureMarkerRequest = () => {
    return {
        type: FutureMarker.POST_FUTURE_MARKER_REQUEST,
    };
};

const FutureMarkerSuccess = (payload) => {
    return {
        type: FutureMarker.POST_FUTURE_MARKER_SUCCESS,
        payload,
    };
};

const FutureMarkerFailed = (payload) => {
    return {
        type: FutureMarker.POST_FUTURE_MARKER_FAILED,
        payload,
    };
};

export const FutureMarkerAction = (form) => {
    return async (dispatch) => {
        dispatch(FutureMarkerRequest());
        try {
            const res = await axios.post("future makers", form);
            if (res.status === 200) {
                // //console.log.log(res.data);
                getNotification(
                    "success",
                    "Message",
                    res?.data?.message,
                    "We will review your application and inform you if you are selected. "
                );
                // getErrorMessage("success", "Message", res?.data?.message);
                dispatch(FutureMarkerSuccess(res.data.message));
                setTimeout(() => {
                    dispatch(FutureMarkerSuccess());
                }, 5000);
                // dispatch(NotificationSuccess(res.data.message));
                // return report;
            }
        } catch (error) {
            //console.log.log(error.response);
            if (typeof error?.response?.data?.message === "string") {
                // //console.log.log(error?.response?.data?.message);
                getErrorMessage(
                    "danger",
                    "Message",
                    error?.response?.data?.message
                );
            } else if (typeof error?.response?.data?.message === "object") {
                // //console.log.log(error?.response?.data?.message, "2");
                const ErrorMessage = Object.values(
                    error?.response?.data?.message
                );
                //ErrorMessage.map((data) => //console.log.log(data));
                ErrorMessage.forEach((data) =>
                    getErrorMessage("danger", "Message", data[0])
                );
            } else {
                getErrorMessage(
                    "danger",
                    "Message",
                    "Oops,something went wrong, make sure your fill required fields and not more than 200 characters"
                );
            }
            dispatch(FutureMarkerFailed());
        }
    };
};
