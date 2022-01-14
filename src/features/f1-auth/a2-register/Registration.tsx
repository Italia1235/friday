import s from "../a2-register/Registration.module.css"
import {ChangeEvent, useEffect, useState} from "react";
import {registerApi} from "./dal/registration_api";
import loading from "../../../img/Spinner-1s-200px.svg"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import {createUserTC, loadingStatusAC, setUser} from "../../../main/bll/reducers/register-reducer";
import eye from "../../../img/Eye.svg"
import {Navigate} from "react-router-dom";

type RegistrationPropsType = {
    userName: string
    email: string
    emailHandler: (e: ChangeEvent<HTMLInputElement>) => void
    passwordType: string
    password: string
    passwordHandler: (e: ChangeEvent<HTMLInputElement>) => void
    typeHandler: (input: string) => void
    confPasswordType: string
    confPassword: string
    confPasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void
    mismatch: boolean
    cancelHandler: () => void
    successfully: string
    registration: () => void
    error: string
}

export const Registration = ({
                                 emailHandler, passwordHandler, typeHandler,
                                 confPasswordHandler, cancelHandler, registration, ...props
                             }: RegistrationPropsType) => {

    if (props.userName !== "") {
        return <Navigate to={"/login"}/>
    }
    return (
        <div className={s.mainDiv}>
            <div className={s.innerMainDiv}>
                <p className={s.title}>It-incubator</p>
                <p className={s.subTitle}>Sign Up</p>
                <div className={s.form}>
                    <p className={s.inputText}>Email</p>
                    <input className={s.input}
                           type={"email"}
                           value={props.email}
                           onChange={emailHandler}
                    />
                    <p className={s.inputText}>Password</p>
                    <div>
                        <input className={s.input}
                               type={props.passwordType}
                               value={props.password}
                               onChange={passwordHandler}
                        />
                        <img
                            onClick={() => typeHandler("password")}
                            className={s.eye}
                            src={eye}
                        />
                        <p className={s.inputText}>Confirm password</p>
                    </div>
                    <div>
                        <input className={s.input}
                               type={props.confPasswordType}
                               value={props.confPassword}
                               onChange={confPasswordHandler}
                        />
                        <img onClick={() => typeHandler("confPassword")}
                             className={s.eye}
                             src={eye}/>
                    </div>
                    {props.mismatch && <p className={s.error}>Passwords don't match</p>}
                    {props.error !== "" && <p className={s.error}>{props.error}</p>}
                    <div className={s.buttons}>
                        <button onClick={cancelHandler}
                                className={s.cancel}>Cancel
                        </button>
                        <button disabled={props.successfully === "loading"}
                                className={s.register}
                                onClick={registration}>Register
                        </button>
                    </div>
                </div>
                {props.successfully === "loading" && <img className={s.load} src={loading}/>}
            </div>
        </div>
    )
}