import axios from "axios"

export const apiFromBackend = axios.create({
    baseURL: "http://192.168.1.69:1234",
    withCredentials: true,
})