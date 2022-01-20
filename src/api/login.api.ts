import axios from 'axios';
import { NET_CONFIG } from './api.config';
import store from 'store2'

const BASE_URL = NET_CONFIG.BACKEND_URL + ':' + NET_CONFIG.BACKEND_PORT + '/user';

export class loginArgs {
    username:string;
    password:string;
    constructor() {
        this.username = '';
        this.password = '';
    }
}
export async function loginByPwd(
    args = new loginArgs()
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
        }
        return res;
    } catch (error) {
        console.error(error)
    }

}