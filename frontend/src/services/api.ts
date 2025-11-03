import axios from 'axios';

const PORT = 8090;

const api = axios.create({
baseURL: `http://localhost:${PORT}/api`,
});

export default api;