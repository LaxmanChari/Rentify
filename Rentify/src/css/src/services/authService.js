// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

const register = (user) => {
    return axios.post(`${API_URL}/register`, user);
};

export default {
    register,
};
