import s from "../a2-register/Registration.module.css"
import {ChangeEvent, useState} from "react";
import {registerApi} from "./dal/api";

export const Registration = () => {
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

    return (
        <div className={s.mainDiv}>
            <div className={s.innerMainDiv}>
                <h3>It-incubator</h3>
                <h4>Sign Up</h4>
                <form className={s.form}>
                    <input type={"email"}
                           value={email}
                           onChange={emailHandler}
                    />
                    <input type={"password"}
                           value={password}
                           onChange={passwordHandler}
                    />
                    <input type={"password"}
                           value={confPassword}
                           onChange={confPasswordHandler}
                    />
                    <button onClick={() => {
                        registerApi.createUser(email, password)
                            .then(() =>{
                                console.log("123")
                            })
                    }}>Register
                    </button>
                </form>
            </div>
        </div>
    )
}