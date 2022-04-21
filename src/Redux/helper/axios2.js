import axios from "axios";
import { sendinblue } from "../../urlconfig";

const axiosInstance = axios.create({
  baseURL: sendinblue,
});

export default axiosInstance;
