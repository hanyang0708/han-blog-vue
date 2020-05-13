import axios from '@/api/config/index'

export const login = (params)=>{
    console.log(params,'params');
    return axios.post('/login',params);
}