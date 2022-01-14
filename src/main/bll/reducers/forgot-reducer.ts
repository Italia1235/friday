import {Dispatch} from "redux";
import {setError, setLoading} from "./app-reducer";
import {forgotAPI} from "../../dal/forgotAPI";

const initState = {
    passRecoverySuccess: false
}
export const forgotReducer = (state = initState, action: ActionType): ForgotInitStateType => {
    switch (action.type) {
        case "SET-PASS-RECOVERY-SUCCESS":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

type ActionType = ReturnType<typeof setPassRecoverySuccess>
//Action Creator
export const setPassRecoverySuccess = (passRecoverySuccess: boolean) => ({
    type: 'SET-PASS-RECOVERY-SUCCESS', payload: {passRecoverySuccess}
} as const)

//Thunk Creator
// const recoveryLink = 'http://localhost:3000/set-new-password/$token$'
const recoveryLink = 'https://italia1235.github.io/friday/set-new-password/$token$'
const recoveryMessage = `<div style="background-color: #ccc; padding: 15px">
password recovery link: <a href=${recoveryLink}>
link</a></div>`

export const recoverPass = (email: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true))
        dispatch(setError(null))
        const res = await forgotAPI.forgot(email, 'test-front-admin', recoveryMessage);
        res.data.success && dispatch(setPassRecoverySuccess(true))
    } catch (e: any) {
        e.response ? dispatch(setError(e.response.data.error)) : dispatch(setError('some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

export type ForgotInitStateType = typeof initState;