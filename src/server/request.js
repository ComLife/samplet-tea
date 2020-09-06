import { post, get } from './axios'


export const register = (data) => post('/user/userRegister', data);
export const login = (data) => post('/user/userLogin', data);
export const homePagePost = () => post('/post/queryIndexPosts');
export const forumPost = (data) => post('/post/queryForumPosts', data);
export const detailPost = (data) => post('/post/queryPostDetails', data);
