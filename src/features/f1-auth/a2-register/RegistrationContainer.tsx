import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import {ChangeEvent, useState} from "react";
import {createUserTC} from "../../../main/bll/reducers/register-reducer";
import {Registration} from "./Registration";

export const RegistrationContainer = () => {
    const successfully = useSelector<AppStoreType, string>((state) => state.register.successfully)
    const userName = useSelector<AppStoreType, string>(state => state.register.name)
    const error = useSelector<AppStoreType, string>(state => state.register.error)
    const dispatch = useDispatch()
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
        dispatch(createUserTC({email, password}))
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
    return <Registration userName={userName}
                         email={email}
                         emailHandler={emailHandler}
                         passwordType={passwordType}
                         password={password}
                         passwordHandler={passwordHandler}
                         typeHandler={typeHandler}
                         confPasswordType={confPasswordType}
                         confPassword={confPassword}
                         confPasswordHandler={confPasswordHandler}
                         mismatch={mismatch}
                         cancelHandler={cancelHandler}
                         successfully={successfully}
                         registration={registration}
                         error={error}
    />
}