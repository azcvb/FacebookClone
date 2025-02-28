import axios from "axios";
import Cookies from "js-cookie";


const request = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

request.interceptors.request.use(async (config) => {
    const token = Cookies.get('Token');

    const api = ["auth/introspect"]
    if(api.some(endPoint => config.url.includes(endPoint))) {
        config.headers.Authorization = `Bearer ${token}`
        return config;
    }
    return config;
}, (err) => {
    return Promise.reject(err)
})

export const post = async (path, option={}) => {
    const response = await request.post(path, option)
    return response.data;
}

export const get = async (path, option={}) => {
    const response = await request.get(path, option)
    return response.data;
}

export default request;