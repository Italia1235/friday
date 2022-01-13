import axios from "axios";

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})

export const registerApi = {
    createUser(params: PostParams) {
        return instance.post<PostParams, AddedUserType>("/auth/register", params)
    }
}

export type PostParams = {
    email: string
    password: string
}

type AddedUserType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    __v: number
    _id: string
}