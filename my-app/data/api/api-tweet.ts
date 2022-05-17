import  {GetAxiosInstans}  from './api';

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

export const getUsers = (callback: any) => {
    GetAxiosInstans().get("/users")
    .then((res: any) => {
        const data = res.data;
        callback(true , data)
    })
    .catch((err: any) => {
        callback(false , err)
    })
}

export const getHashtags = (callback: any) => {
    GetAxiosInstans().get("/hashtags")
    .then((res: any) => {
        const data = res.data;
        callback(true , data)
    })
    .catch((err: any) => {
        callback(false , err)
    })
}

export const newTweetsRequest = (data:any ,callback: any) => {
    GetAxiosInstans().post("/tweets" , data)
    .then((res: any) => {
        callback(true)
    })
    .catch((err: any) => {
        callback(false)
    })
}