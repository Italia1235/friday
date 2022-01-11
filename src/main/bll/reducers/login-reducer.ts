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
            return {...state, isLoggedIn: action.value}
        case 'login/CHANGE-VALUE':
        return{...state,email:action.email,password:action.password}
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setIsLoggedInAC>|ReturnType<typeof ChangeInputValueAC>


export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

export const ChangeInputValueAC = (email:string,password:string) =>
    ({type: 'login/CHANGE-VALUE', email,password} as const)


type InitialStateType = {
    isLoggedIn: boolean
    email:string,
    password:string
}


const LoginThunkCreator = (data:LoginParamsType) => {
    return (dispatch:Dispatch) =>{
        authAPI.login(data).then(res =>{})
    dispatch(ChangeInputValueAC(data.email,data.password))
        dispatch(setIsLoggedInAC(true))
        }
    }
