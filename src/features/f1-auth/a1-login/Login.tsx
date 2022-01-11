import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import s from './Login.tsx.module.css'
import {useState} from "react";
export const Login = () => {

    const [emailValue,setEmailValue] = useState()
    const [passValue,setPassValue] = useState()


        return (



        <div >
            <h2 style ={{textAlign:"center",paddingTop:"10px" }}>It-incubator</h2>
            <div className={s.allLoginArea}>

        <h3>Sign In</h3>

            <form>
            <p>Email</p>
            <SuperInput/>
            <p>Password</p>
            <SuperInput />
            </form>
            </div>
        </div>
    )
}