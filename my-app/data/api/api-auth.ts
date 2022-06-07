import  {GetAxiosAuth}  from './api';

// export const getTweet = (callback: any) => {
//     GetAxiosInstans().get("/tweets")
//     .then((res: any) => {
//         const data = res.data;
//         callback(true , data)
//     })
//     .catch((err: any) => {
//         callback(false , err)
//     })
// }


export const loginApi = (data:any ,callback: any) => {
    GetAxiosAuth().post("/login" , data)
    .then((res: any) => {
        callback(true , res.data)
    })
    .catch((err: any) => {
        callback(false , err?.response?.data?.message)
    })
}

export const signupApi = (data:any ,callback: any) => {
    GetAxiosAuth().post("/register" , data)
    .then((res: any) => {
        callback(true , res.data)
    })
    .catch((err: any) => {
        callback(false , err?.response?.data?.message)
    })
}

