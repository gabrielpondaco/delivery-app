import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestPost = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error) {
    return undefined;
  }
};

export const requesGet = async (endpoint, body) => {
  try {
    const { data } = await api.get(endpoint, body);
    return data;
  } catch (error) {
    return undefined;
  }
};

export default api;
