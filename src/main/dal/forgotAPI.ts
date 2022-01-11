import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/'
})
export const forgotAPI = {
    forgot(email: string, from: string, message: string){
        return instance.post('auth/forgot', {email, from, message})
    }
}