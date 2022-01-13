import {Dispatch} from 'redux'
import {authAPI, LoginParamsType} from "../../dal/apiLogin";
import {getUserInfoAC} from "./profile-reducer";
import {setError} from "./app-reducer";


const initialState: InitialStateType = {
    isLoggedIn: false,
    email:"",
    password:"",
    error:null,

}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn,email:action.email}

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
    error:null|string
}
export type LoginPageType = {
    isLoggedIn: boolean
    email:string,
    password:string
    error:null|string
}


export const LoginThunkCreator = (data:LoginParamsType) => {
    return (dispatch:Dispatch) =>{
        authAPI.login(data).then(res=> {

            return dispatch(getUserInfoAC(res.data._id,res.data.email,res.data.name))

                }
             ).catch(err=>dispatch(setError(err.response.data.error)))
            dispatch(setIsLoggedInAC(true,data.email,data.password))
        }
    }
