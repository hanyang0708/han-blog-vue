import axios from '@/api/config/index'

export const login = (params)=>{
    return axios.post('/login',params);
}

export const register = (params)=>{
    return axios.post('/register',params);
}