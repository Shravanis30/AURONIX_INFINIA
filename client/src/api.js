import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = (category) => {
  const url = category && category !== 'All' ? `/products?category=${encodeURIComponent(category)}` : '/products';
  return api.get(url);
};

export const getProductBySlug = (slug) => {
  return api.get(`/products/${slug}`);
};

export const submitEnquiry = (data) => {
  return api.post('/enquiry', data);
};

export const getBlogs = () => {
  return api.get('/blog');
};

export const getBlogBySlug = (slug) => {
  return api.get(`/blog/${slug}`);
};

export default api;
