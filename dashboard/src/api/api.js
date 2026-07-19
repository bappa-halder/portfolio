import axios from "axios";

const BASE_URL = "https://portfolio-backend-brown-beta.vercel.app"
const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

api.interceptors.request.use(
    (config) => {
        if (!config.headers.Authorization) {
            const token = localStorage.getItem("token")
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
        }
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config
        if (
            originalRequest &&
            error.response?.status === 401 &&
            !originalRequest._retry &&
            localStorage.getItem("token") &&
            !originalRequest.url.includes("/user/login") &&
            !originalRequest.url.includes("/user/register") &&
            !originalRequest.url.includes("/user/verify") &&
            !originalRequest.url.includes("/user/refresh-token")
        ) {
            originalRequest._retry = true

            try {
                const response = await axios.post(`${BASE_URL}/user/refresh-token`,
                    {},
                    {
                        withCredentials: true
                    }
                )
                const newAccessToken = response.data.accessToken
                localStorage.setItem("token", newAccessToken)
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                return api(originalRequest)
            } catch (refreshError) {
                localStorage.removeItem("token")
                localStorage.removeItem("username")
                localStorage.removeItem('email')
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }

)

export default api