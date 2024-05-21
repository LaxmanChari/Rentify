// src/services/propertyService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/properties';

const getAllProperties = () => {
    return axios.get(API_URL);
};

const postProperty = (property) => {
    return axios.post(API_URL, property);
};

export default {
    getAllProperties,
    postProperty,
};
