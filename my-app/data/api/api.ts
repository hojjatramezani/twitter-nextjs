import  axios  from 'axios';

export const GetAxiosInstans: any = () => {
    axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            API_KEY: "weeeeeeeeeeeeeeeeeeeeeeweeeeeewweweewe"
        }
    })
}