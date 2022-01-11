import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import s from './Login.tsx.module.css'
import {ChangeEvent, useState} from "react";
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import {Link, NavLink} from "react-router-dom";
import {PATH} from "../../../main/ui/routes/Routes";
export const Login = () => {

    const [emailValue,setEmailValue] = useState<string>("")
    const [passValue,setPassValue] = useState<string>("")



    const changePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
        setPassValue(e.currentTarget.value)
    }
    const changeEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }
        return (

        <div >
            <h2 style ={{textAlign:"center",paddingTop:"10px" }}>It-incubator</h2>
            <div className={s.allLoginArea}>

        <h3>Sign In</h3>

            <form>
            <p>Email</p>
            <SuperInput onChange={changeEmailValue} value={emailValue}/>
            <p>Password</p>
            <SuperInput onChange={changePasswordValue} value={passValue} />


            </form>
                <div style={{paddingTop:"10px"}}>  <NavLink style={{color:"darkgrey",paddingLeft:"250px"}} to={PATH.FORGOT}>Forgot Password?</NavLink> </div>
                <SuperButton style={{marginTop:"10px",width:"80px"}}>Login</SuperButton>

                <SuperButton style={{marginTop:"10px",width:"80px"}}>Sign up</SuperButton>
            </div>

        </div>
    )
}