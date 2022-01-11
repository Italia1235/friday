import {SetPassword} from "./SetPassword";
import {RequestStatusInfo} from "../a3-forgot-pass/RequestStatusInfo";
import s from './SetPassword.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import {useState} from "react";
import {setError} from "../../../main/bll/reducers/app-reducer";

export const SetPassContainer = () => {
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const dispatch = useDispatch();
    const [text1, setText1] = useState<string>('');
    const [text2, setText2] = useState<string>('');

    const onNewPassSubmit = () => {
        if(text1 === text2){
            alert(text1)
        } else {
            dispatch(setError("Passwords don't match!"))
        }

    }
    return (
        <div className={s.container}>
            <h3>setPass</h3>
            <RequestStatusInfo/>
            <SetPassword inputValue={[text1, text2]}
                         isLoading={isLoading}
                         onChange1={setText1}
                         onChange2={setText2}
                         onSubmit={onNewPassSubmit}/>
        </div>
    )
}