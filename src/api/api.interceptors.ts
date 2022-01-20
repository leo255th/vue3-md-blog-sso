import axios from 'axios';
import store from 'store2'

// request拦截器
axios.interceptors.request.use((config: any) => {
    console.log('执行')
    if (store.get("session_token")) {
        config.headers['Authorization'] = store.get("session_token")

    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// respone拦截器
axios.interceptors.response.use(response => {
    return response;
});
