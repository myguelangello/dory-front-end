import axios from 'axios';

// conectando o front-end com a api do back-end
const api = axios.create({
  baseURL: 'http://localhost:3030',
});

export default api;
