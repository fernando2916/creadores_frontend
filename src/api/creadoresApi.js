import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL
// console.log(API_URL)

const creadoresApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,    
});

creadoresApi.interceptors.request.use( config => {
    const token = Cookies.get('accessToken')

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})


// Todo: configurar interceptores

export default creadoresApi;