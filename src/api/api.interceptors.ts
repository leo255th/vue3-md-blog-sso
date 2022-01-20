import axios from 'axios';
import store from 'store2'
import vuex_store from '../store'
// request拦截器
axios.interceptors.request.use((config: any) => {
    if (store.get("session_token")) {
        config.headers['Authorization'] = store.get("session_token")

    }
    return config;
}, (error) => {
    console.log(error)
    return Promise.reject(error);
});

// respone拦截器
axios.interceptors.response.use((response) => {
    console.log('response拦截器')
    console.log('response:', response)
    return response;
}, (error) => {
    // 捕捉错误代码和错误消息
    const {statusCode,message}=JSON.parse(error.request.response)
    console.log(statusCode,message)
    if(statusCode==400||statusCode==401){
        // 登陆失败或会话过期等
        vuex_store.commit('update_err_msg',message)
    }
    return Promise.reject(error);
});
