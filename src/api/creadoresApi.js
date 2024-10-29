import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL
// console.log(API_URL)

const creadoresApi = axios.create({
    baseURL: API_URL,    
});

creadoresApi.interceptors.request.use( config => {
    const token = localStorage.getItem('token')
    
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
    }
    return config;
})


// Todo: configurar interceptores

export default creadoresApi;