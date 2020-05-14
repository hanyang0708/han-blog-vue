import axios from 'axios';
import store from '@/store'
import router from '@/router'

axios.defaults.timeout = 20000;

axios.defaults.baseURL = 'http://localhost:3000';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.token = store.getters.getToken   //将token 放入请求头
    return config;
}, function (error) {
    console.log(error,'error')
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.data.res.code == 1){
        store.dispatch('setToken','');
        router.push({path:'/login'});
    }
    if(!response.data.res.success){
        return Promise.reject(response.data)
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios;