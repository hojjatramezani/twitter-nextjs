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

export const getTweetByHashtag = (hashTag:string , callback: any) => {
    GetAxiosApi().post("/getAllTweet" , {hashTag})
    .then((res: any) => {
        const data = res.data;
        callback(true , data)
    })
    .catch((err: any) => {
        callback(false , err)
    })
}

export const getTweetByUser = (user:string , callback: any) => {
    GetAxiosApi().post("/getAllTweet" , {user})
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

export const likeTweet = (id:any ,callback: any) => {
    GetAxiosApi().get(`/likeTweet/${id}`)
    .then((res: any) => {
        const data = res.data;
        callback(true , data)
    })
    .catch((err: any) => {
        callback(false , err)
    })
}