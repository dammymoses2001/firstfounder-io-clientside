import axios from "axios";
import { api1 } from "../../urlconfig";

const axiosInstance = axios.create({
    baseURL: api1,
});

export default axiosInstance;
