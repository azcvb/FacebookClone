import axios from "axios";
import Cookies from "js-cookie";
import { useRef } from "react";



const request = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

request.interceptors.request.use(async (config) => {
    const token = Cookies.get('Token');

    const exceptionApi = ["auth/login"]
    if(!token || exceptionApi.some(endPoint => config.url.includes(endPoint))) {
        return config;
    }
    config.headers.Authorization = `Bearer ${token}`
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