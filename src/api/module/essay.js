import axios from '@/api/config/index'

//创作文章
export const createEssay = (params)=>{
    console.log(params,'params')
    return axios.post('/createEssay',params);
}

export const queryEssayList = (params)=>{
    return axios.post('/queryEssayList',params);
}

export const queryEssayById = (params)=>{
    return axios.post('/queryEssayById',params);
}
