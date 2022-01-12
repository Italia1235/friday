import s from "../a2-register/Registration.module.css"
import {ChangeEvent, useState} from "react";
import {registerApi} from "./dal/api";
import loading from "../../../img/Spinner-1s-200px.svg"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import {loadingStatusAC} from "../../../main/bll/reducers/register-reducer";
import eye from "../../../img/Eye.svg"


export const Registration = () => {
    let successfully = useSelector<AppStoreType, string>((state) => state.register.successfully)
    let dispatch = useDispatch()
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confPassword, setConfPassword] = useState("")
    let [mismatch, setMismatch] = useState(false)
    let [passwordType, setPasswordType] = useState("password")
    let [confPasswordType, setConfPasswordType] = useState("password")

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const confPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setConfPassword(e.currentTarget.value)
    }

    let registration = () => {
        if (password !== confPassword) {
            setMismatch(true)
            return
        } else {
            setMismatch(false)
        }
        dispatch(loadingStatusAC("loading"))
        registerApi.createUser(email, password)
            .then((res) => {
                console.log(res)
            })
            .finally(() => {
                dispatch(loadingStatusAC("successfully"))
            })
    }

    let cancelHandler = () => {
        setEmail("")
        setPassword("")
        setConfPassword("")
        setMismatch(false)
    }

    let typeHandler = (input: string) => {
        if (input === "password") {
            if (passwordType === "password") {
                setPasswordType("text")
            } else if (passwordType === "text") {
                setPasswordType("password")
            }
        } else if (input === "confPassword") {
            if (confPasswordType === "password") {
                setConfPasswordType("text")
            } else if (confPasswordType === "text") {
                setConfPasswordType("password")
            }
        }
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
                           value={email}
                           onChange={emailHandler}
                    />
                    <p className={s.inputText}>Password</p>
                    <div>
                        <input className={s.input}
                               type={passwordType}
                               value={password}
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
                               type={confPasswordType}
                               value={confPassword}
                               onChange={confPasswordHandler}
                        />
                        <img onClick={() => typeHandler("confPassword")}
                             className={s.eye}
                             src={eye}/>
                    </div>
                    {mismatch && <p className={s.error}>Passwords don't match</p>}
                    <div className={s.buttons}>
                        <button onClick={cancelHandler}
                                className={s.cancel}>Cancel
                        </button>
                        <button disabled={successfully === "loading"}
                                className={s.register}
                                onClick={registration}>Register
                        </button>
                    </div>
                </div>
                {successfully === "loading" && <img className={s.load} src={loading}/>}
            </div>
        </div>
    )
}