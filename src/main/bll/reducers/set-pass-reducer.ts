import {Dispatch} from "redux";
import {setPassAPI} from "../../dal/setPassAPI";
import {setError, setLoading} from "./app-reducer";

const initState = {
    newPassSuccess: false,
}
export const setPassReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type){
        case "SET-NEW-PASSWORD-SUCCESS":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

//Action Creators
export const setNewPasswordSuccess = (newPassSuccess: boolean) => ({type: 'SET-NEW-PASSWORD-SUCCESS', payload: {newPassSuccess}} as const)

//Thunk Creators
export const setNewPass = (password: string, token: string) => async(dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await setPassAPI.setNewPass(password, token);
        dispatch(setNewPasswordSuccess(true));
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

type ActionType = ReturnType<typeof setNewPasswordSuccess>

type InitStateType = typeof initState;