import axios from 'axios';

const signupAxios = axios.create({
  baseURL: 'http://localhost:8080',
});

signupAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default signupAxios;
