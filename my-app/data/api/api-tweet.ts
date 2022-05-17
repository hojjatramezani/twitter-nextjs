import  axios  from 'axios';
import { GetAxiosInstans } from './api';

export const getTweet = (callback: any) => {
    GetAxiosInstans().get("/tweets")
    .then((res: any) => {
        const data = res.data;
        callback(true , data)
    })
    .catch((err: any) => {
        callback(false , err)
    })
}