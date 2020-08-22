import { post } from './axios'


export const register = (data) => post('/user/userRegister', data);
