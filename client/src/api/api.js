import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api/auth',
  withCredentials: true, // Для передачи куков
});

export const register = (data) => API.post('/register', data);
export const login = (data) => API.post('/login', data);
export const getProfile = () => API.get('/profile');
export const logout = () => API.post('/logout');