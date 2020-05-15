import axios from '@/api/config/index'

export const getUploadUrl = (params)=>{
    return axios.post('/getUploadUrl',params);
}

export const uploadImg = (url,params)=>{
    return axios.put(url,params);
}