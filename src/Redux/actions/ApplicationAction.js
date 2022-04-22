import axios from "../helper/axios3";
import { Application } from "../constant";
import { getErrorMessage } from "../../Components/Ui/Messages";

const ApplicationRequest = () => {
    return {
        type: Application.POST_APPLICATION_REQUEST,
    };
};

const ApplicationSuccess = (payload) => {
    return {
        type: Application.POST_APPLICATION_SUCCESS,
        payload,
    };
};

const ApplicationFailed = (payload) => {
    return {
        type: Application.POST_APPLICATION_FAILED,
        payload,
    };
};

export const ApplicationAction = (form) => {
    return async (dispatch) => {
        dispatch(ApplicationRequest());
        try {
            const res = await axios.post(`application`, form);
            //console.log.log(res);
            if (res.status === 200 || res.status === 201) {
                // //console.log.log(res.data);

                getErrorMessage(
                    "success",
                    "Message",
                    "Application Submitted,we get back to you soon"
                );
                dispatch(
                    ApplicationSuccess(
                        "Application Submitted,we get back to you soon"
                    )
                );
                setTimeout(() => {
                    dispatch(ApplicationSuccess());
                    // window.location.reload();
                }, 3000);
                // dispatch(NotificationSuccess(res.data.message));
                // return report;
            }
        } catch (error) {
            // console.log(error.response);
            // //console.log.log(typeof error?.response?.data?.message);
            if (error?.response) {
                // //console.log.log(error?.response?.data?.message, '1');
                if (
                    typeof error?.response?.data?.message ||
                    error?.response?.data?.error === "string"
                ) {
                    // //console.log.log(error?.response?.data?.message);
                    getErrorMessage(
                        "danger",
                        "Message",
                        error?.response?.data?.error ||
                            error?.response?.data?.message
                    );
                }

                if (typeof error?.response?.data?.errors === "object") {
                    // //console.log.log(error?.response?.data?.message, "2");
                    const ErrorMessage = Object.values(
                        error?.response?.data?.errors
                    );
                    console.log(ErrorMessage);
                    //ErrorMessage.map((data) => //console.log.log(data));
                    ErrorMessage.forEach((data) =>
                        getErrorMessage("danger", "Message", data?.msg)
                    );
                }
            } else {
                getErrorMessage(
                    "danger",
                    "Error",
                    "Unable to Connect, Check your Network"
                );
            }
            dispatch(ApplicationFailed());
        }
    };
};
