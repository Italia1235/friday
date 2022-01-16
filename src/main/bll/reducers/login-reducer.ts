import {Dispatch} from 'redux'
import {authAPI, LoginParamsType} from "../../dal/apiLogin";
import {getUserInfoAC} from "./profile-reducer";
import {setError} from "./app-reducer";


const initialState: InitialStateType = {
    isLoggedIn: false,
    email: "",
    password: "",
    error: null,
    userId: null
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn, email: action.email};
        case "login/SET-USER-INFO":
            return {...state, ...action.payload};
        default:
            return state;
    }
}

type ActionsType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setUserInfo>


export const setIsLoggedInAC = (isLoggedIn: boolean, email: string, password: string) =>
    ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn, email, password} as const)

export const setUserInfo = (userId: string) => ({type: 'login/SET-USER-INFO', payload: {userId}} as const)

type InitialStateType = {
    isLoggedIn: boolean
    email: string,
    password: string
    error: null | string
    userId: string | null
}
export type LoginPageType = {
    isLoggedIn: boolean
    email: string,
    password: string
    error: null | string
}


export const LoginThunkCreator = (data: LoginParamsType) => {
    return (dispatch: Dispatch) => {
        authAPI.login(data).then(res => {
                dispatch(getUserInfoAC(res.data._id, res.data.email, res.data.name));
                dispatch(setUserInfo(res.data._id))
            }
        ).catch(err => dispatch(setError(err.response.data.error)))
        dispatch(setIsLoggedInAC(true, data.email, data.password))
    }
}
