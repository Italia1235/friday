import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean

}

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<ResponseType>('auth/login', data);
    }
}