import  axios  from 'axios';

export const GetAxiosInstans: any = () => {
    return axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            API_KEY: "weeeeeeeeeeeeeeeeeeeeeeweeeeeewweweewe"
        }
    })
}

export const GetAxiosAuth: any = () => {
    return axios.create({
        baseURL: "https://twitterapi.liara.run/api",
        headers: {
            // API_KEY: "weeeeeeeeeeeeeeeeeeeeeeweeeeeewweweewe"
        }
    })
}