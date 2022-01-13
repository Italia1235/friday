import {Dispatch} from 'redux'
import {authAPI, LoginParamsType} from "../../dal/apiLogin";


const initialState: InitialStateType = {
    isLoggedIn: false,
    email:"",
    password:""
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}

        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setIsLoggedInAC>


export const setIsLoggedInAC = (isLoggedIn: boolean,email:string,password:string) =>
    ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn,email,password} as const)


type InitialStateType = {
    isLoggedIn: boolean
    email:string,
    password:string
}


export const LoginThunkCreator = (data:LoginParamsType) => {
    return (dispatch:Dispatch) =>{
        authAPI.login(data).then(res=>res._id)
        dispatch(setIsLoggedInAC(true,data.email,data.password))
        }
    }
