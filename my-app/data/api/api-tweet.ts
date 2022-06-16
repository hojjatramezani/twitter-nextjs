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
    GetAxiosApi().get("/getAllUser")
    .then((res: any) => {
        const data = res.data;
        callback(true , data)
    })
    .catch((err: any) => {
        callback(false , err)
    })
}

export const getHashtags = (callback: any) => {
    GetAxiosApi().get("/getAllHashTags")
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