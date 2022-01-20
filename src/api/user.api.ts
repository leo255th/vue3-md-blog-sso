import axios from 'axios';
import { NET_CONFIG } from './api.config';
import store from 'store2'

const BASE_URL = NET_CONFIG.BACKEND_URL + ':' + NET_CONFIG.BACKEND_PORT + '/user';

export async function loginByPwd(
    args:{
        username:string,
        password:string
    }
): Promise<any> {
    try {
        const res = await axios({
            method: 'post',
            url: BASE_URL + '/sign-in',
            data: {
                ...args
            },
        })
        // 登陆成功后写入localstorage
        if(res.data&&res.data.res==true){
            store.set('session_token',res.data.sessionToken)
            store.set('userId',res.data.userId)
        }
        return res;
    } catch (error) {
        // console.error(error)
    }

}

export async function get_ticket_token(
    args:{
        sessionToken:string,
        url:string|null,
        userId:number,
    }
): Promise<any> {
    try {
        const res = await axios({
            method: 'post',
            url: BASE_URL + '/get-ticket-token',
            data: {
                ...args
            },
        })
        return res;
    } catch (error) {
        // console.error(error)
    }

}

