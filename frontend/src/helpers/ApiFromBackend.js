import axios from "axios"

export const apiFromBackend = axios.create({
    baseURL: "http://127.0.0.1:1234",
    withCredentials: true,
})