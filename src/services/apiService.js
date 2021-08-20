import axios from "axios";
import { getToken } from "./authService";

const api = axios.create({
    baseURL: `https://localhost:5001`
});

export default api;