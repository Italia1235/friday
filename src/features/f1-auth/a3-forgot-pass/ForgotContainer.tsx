import {ForgotPass} from "./ForgotPass";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import {recoverPass} from "../../../main/bll/reducers/forgot-reducer";
import {RequestStatusInfo} from "./RequestStatusInfo";
import s from './ForgotPass.module.css';

export const ForgotContainer = () => {
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const passRecoverySuccess = useSelector((state: AppStoreType) => state.forgot.passRecoverySuccess)
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');
    const onInputChangeText = (value: string) => {
        setText(value);
    }

    const onRecoverPass = () => {
        dispatch(recoverPass(text))
        setText('');
    }

    return (
        <div className={s.container}>
            <h3>Forgot</h3>
            <RequestStatusInfo/>
            <ForgotPass inputValue={text}
                        isLoading={isLoading}
                        passRecoverySuccess={passRecoverySuccess}
                        onChange={onInputChangeText}
                        onEnter={onRecoverPass}
            />
        </div>
    )
}
