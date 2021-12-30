import axios from 'axios';

const instance = axios.create({
    baseURL: '/api/',
});
instance.defaults.headers['Vary'] = '*';
instance.defaults.headers['Content-Type'] = 'application/json';

instance.interceptors.request.use(
    (config) => {
        if (!config.headers.Authorization) {
            const token = JSON.parse(localStorage.getItem('auth'))?.access || null;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;