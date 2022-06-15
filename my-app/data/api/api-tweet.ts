import  {GetAxiosApi, GetAxiosInstans}  from './api';

export const getTweet = (callback: any) => {
    GetAxiosApi().post("/getAllTweet")
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
    GetAxiosApi().post("/newTweet" , data)
    .then((res: any) => {
        const data = res.data;
        callback(true , data)
    })
    .catch((err: any) => {
        callback(false , err)
    })
}