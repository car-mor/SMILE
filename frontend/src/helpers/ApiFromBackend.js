import axios from "axios"

export const apiFromBackend = axios.create({
    baseURL: "http://localhost:1234",
    withCredentials: true,
})