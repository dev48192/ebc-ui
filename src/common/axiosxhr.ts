const baseURL = process.env.API_BASE_URL;
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL,
    withCredentials: true, // if using cookies/sessions
});

export default axiosInstance;