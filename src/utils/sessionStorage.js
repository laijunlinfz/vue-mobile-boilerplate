/**
 * sesseionStorage 操作相关
 */

const STORE = 'STORE';
const TOKEN = 'TOKEN';

export const setStore = (params = {}) => {
  const data = typeof params === 'string' ? params : JSON.stringify(params);
  sessionStorage.setItem(STORE, data);
};

export const getStore = () => {
  const result = sessionStorage.getItem(STORE);
  return JSON.parse(result || '{}');
};

export const setToken = (token = '') => {
  sessionStorage.setItem(TOKEN, token);
};

export const getToken = () => {
  return sessionStorage.getItem(TOKEN) || '';
};
