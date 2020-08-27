import { post, get } from './axios'


export const register = (data) => post('/user/userRegister', data);
export const login = (data) => post('/user/userLogin', data);
export const test = () => post('/post/queryIndexPosts');

