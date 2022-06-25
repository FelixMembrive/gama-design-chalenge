import axios from "axios"

const baseAPI = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        "Content-Type": "aplication/json"
    }
})

export default baseAPI