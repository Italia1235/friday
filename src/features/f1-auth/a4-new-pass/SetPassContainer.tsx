import {SetPassword} from "./SetPassword";
import {RequestStatusInfo} from "../a3-forgot-pass/RequestStatusInfo";
import s from './SetPassword.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import {useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import {setNewPass} from "../../../main/bll/reducers/set-pass-reducer";
import {PATH} from "../../../main/ui/routes/Routes";

export const SetPassContainer = () => {
    const [passError, setPassError] = useState(false)
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const newPassSuccess = useSelector((state:AppStoreType)=> state.setPass.newPassSuccess);
    const {token} = useParams<"token">();
    const dispatch = useDispatch();
    const [text1, setText1] = useState<string>('');
    const [text2, setText2] = useState<string>('');
    const onNewPassSubmit = () => {
        if(token && (text1 === text2)){
            passError && setPassError(false);
            dispatch(setNewPass(text1, token));
        } else {
            setPassError(true)
        }
    }
    if(newPassSuccess){
        return <Navigate to={PATH.LOGIN} />
    }
    return (
        <div className={s.container}>
            <h3>setPass</h3>
            <RequestStatusInfo passError={passError}/>
            <SetPassword inputValue={[text1, text2]}
                         isLoading={isLoading}
                         onChange1={setText1}
                         onChange2={setText2}
                         onSubmit={onNewPassSubmit}/>
        </div>
    )
}