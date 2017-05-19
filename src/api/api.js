import axios from 'axios';

let base = ''

export const reqLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
export const getArticle = params => { return axios.get(`${base}/getArticle/today`) };
export const getArticle2 = params => { return axios.get(`${base}/getArticle/random`) };
