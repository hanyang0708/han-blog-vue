import axios from '@/api/config/index'

export const login = (params)=>{
    return axios.post('/login',params);
}

export const register = (params)=>{
    return axios.post('/register',params);
}

export const uploadHeaderImg = (params)=>{
    return axios.post('/upload/headerImg',params);
}

export const uploadNickName = (params)=>{
    return axios.post('/uploadNickName',params);
}

