import {PostParams, registerApi} from "../../../features/f1-auth/a2-register/dal/registration_api";
import {Dispatch} from "redux";

export type loadingStatus = "loading" | "successfully"
const initState = {
    name: "",
    successfully: "successfully"
}
export const registerReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "SET_USER":
            return {...state, name: action.name}
        case "SET_LOADING_STATUS":
            return {...state, successfully: action.status}
        default:
            return state;
    }
}

type SetUserType = ReturnType<typeof setUser>
export const setUser = (name: string,) => {
    return {
        type: "SET_USER",
        name,
    } as const
}

type LoadingStatusACType = ReturnType<typeof loadingStatusAC>
export const loadingStatusAC = (status: loadingStatus) => {
    return {
        type: "SET_LOADING_STATUS",
        status
    } as const
}

export const createUserTC = (data: PostParams) => {
    return (dispatch: Dispatch) => {
        dispatch(loadingStatusAC("loading"))
        registerApi.createUser(data)
            .then((res) => {
                dispatch(setUser(res.name))
            })
            .finally(() => {
                dispatch(loadingStatusAC("successfully"))
            })
    }
}

type ActionType = LoadingStatusACType | SetUserType

type InitStateType = typeof initState;