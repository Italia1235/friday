import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import s from './Login.tsx.module.css'
import {ChangeEvent, useState} from "react";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import {Link, Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../../main/ui/routes/Routes";
import {authReducer, LoginPageType, LoginThunkCreator} from "../../../main/bll/reducers/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import {InitStateTypeProfile} from "../../../main/bll/reducers/profile-reducer";

export const Login = () => {
    const login = useSelector<AppStoreType, LoginPageType>(state => state.login)
    const {isLoading, appError} = useSelector((state: AppStoreType) => state.app);
    const [emailValue, setEmailValue] = useState<string>("")
    const [passValue, setPassValue] = useState<string>("")
    const dispatch = useDispatch();
    const authStart = () => {
        dispatch(LoginThunkCreator({email: emailValue, password: passValue, rememberMe: true}))
    }

    const changePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
        setPassValue(e.currentTarget.value)
    }
    const changeEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }

    if (appError == null && login.email !== "") {
        debugger
        return <Navigate to={"/profile"}/>
    }


    return (

        <div>
            <h2 style={{textAlign: "center", paddingTop: "10px"}}>It-incubator</h2>
            <div className={s.allLoginArea}>
                <h3>Sign In</h3>
                <form>
                    <p>Email</p>
                    <SuperInput onChange={changeEmailValue} value={emailValue}/>
                    <p>Password</p>
                    <input type="password" onChange={changePasswordValue} value={passValue}/>мваd

                    {appError && <div style={{color: "red"}}>{appError}</div>}
                </form>
                <div style={{paddingTop: "10px"}}><NavLink style={{color: "darkgrey", paddingLeft: "250px"}}
                                                           to={PATH.FORGOT}>Forgot Password?</NavLink></div>
                <SuperButton style={{marginTop: "10px", width: "80px"}} onClick={authStart}>Login</SuperButton>
                <SuperButton style={{marginTop: "10px", width: "80px"}} > Sign up</SuperButton>
            </div>

        </div>
    )
}