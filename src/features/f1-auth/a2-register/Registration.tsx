import s from "../a2-register/Registration.module.css"
import {ChangeEvent, FormEventHandler, useState} from "react";
import {registerApi} from "./dal/api";
import loading from "../../../img/Spinner-1s-200px.svg"
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";

export const Registration = () => {
    // let successfully = useSelector<AppStoreType,string>((state) =>state.register.successfully)
    // let

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confPassword, setConfPassword] = useState("")
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const confPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setConfPassword(e.currentTarget.value)
    }

    let registration= () => {

        registerApi.createUser(email, password)
            .then((res) => {
                console.log(res)
            })
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
                    <input className={s.input}
                           type={"password"}
                           value={password}
                           onChange={passwordHandler}
                    />
                    <p className={s.inputText}>Confirm password</p>
                    <input className={s.input}
                           type={"password"}
                           value={confPassword}
                           onChange={confPasswordHandler}
                    />
                    <div className={s.buttons}>
                        <button className={s.cancel} >Cancel
                        </button>
                        <button className={s.register} onClick={registration}>Register
                        </button>
                    </div>

                </div>
                {/*<img className={s.load} src={loading}/>*/}
            </div>
        </div>
    )
}