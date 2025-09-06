import axios from "axios";

const Instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add retry config
const MAX_RETRIES = 3;

// Request interceptor
Instance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    // Initialize retry count
    config.__retryCount = config.__retryCount || 0;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor with retry
Instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (!config || config.__retryCount >= MAX_RETRIES) {
      // Max retries reached or no config, reject
      return Promise.reject(error);
    }

    // Increment retry count
    config.__retryCount += 1;

    console.log(`Retrying request... Attempt ${config.__retryCount}`);

    // Optional: Wait a bit before retrying
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Retry the request
    return Instance(config);
  }
);

export default Instance;
