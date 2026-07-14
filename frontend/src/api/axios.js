import axios from "axios";

const api = axios.create({
    baseURL: "https://portfolio-backend-brown-beta.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api