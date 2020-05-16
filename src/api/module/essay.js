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

export const queryEssayListByUserId = (params)=>{
    return axios.post('/queryEssayListByUserId',params);
}

export const deleteEssay = (params)=>{
    return axios.post('/deleteEssay',params);
}

export const updateEssay = (params)=>{
    return axios.post('/updateEssay',params);
}
