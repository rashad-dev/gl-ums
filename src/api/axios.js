import axios from "axios";

const Instance = axios.create({
  baseURL: "https://fakestoreapi.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Request interceptor
Instance.interceptors.request.use(
  (config) => {
    // you can log requests or attach auth token from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Response interceptor
Instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

export default Instance;
