import axios from 'axios';

let base = '';

export const reqLogin = params => axios.post(`${base}/login`, params).then(res => res.data);
export const getUserList = params => axios.get(`${base}/user/list`, { params: params });
export const getArticle = params => axios.get(`${base}/getArticle/today`);
export const getArticle2 = params => axios.get(`${base}/getArticle/random`);
export const getToken = params => axios.get(`${base}/getToken`);
