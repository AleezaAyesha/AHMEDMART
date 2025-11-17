import axios from 'axios';

const API_BASE = 'https://your-api.com';

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const getUsers = () => api.get('/users');
export const getVendors = () => api.get('/vendors');
export const getProducts = () => api.get('/products');
export const getOrders = () => api.get('/orders');
export const getReviews = () => api.get('/reviews');
export const getZones = () => api.get('/zones');
export const loginAdmin = (credentials) => api.post('/admin/login', credentials);
