/**
 * 多了再拆分
 */

import request from "@/utils/http";

export const getComponentDataAsync = (data = {}) => {
  const url = '/tag/list';
  const method = 'post';
  const params = { url, method, data };
  return request(params);
};

export const loginAsync = (data = {}) => {
  const url = '/admin/login';
  const method = 'post';
  const params = { url, method, data };
  return request(params);
};
