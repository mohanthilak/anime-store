import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_LOCAL_BASE_URL
})

export const axiosPrivate =  axios.create({
    baseURL: import.meta.env.VITE_LOCAL_BASE_URL,
    Headers: {'Content-Type': 'application/json'},
    withCredentials: true,
})

