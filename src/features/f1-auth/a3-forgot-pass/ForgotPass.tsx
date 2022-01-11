import s from './ForgotPass.module.css';
import SuperButton from "../../../main/ui/common/superButton/SuperButton";
import {SuperNavLink} from "../../../main/ui/common/superNavLink/SuperNavLink";
import SuperInput from "../../../main/ui/common/superInput/SuperInput";
import {PATH} from '../../../main/ui/routes/Routes';

export const ForgotPass = ({inputValue, onChange, onEnter, isLoading, passRecoverySuccess}: ForgotPropsType) => {
    return passRecoverySuccess
        ? <div>click the link in the message in your email</div>
        : <div className={s.forgotContainer}>
            <SuperInput value={inputValue}
                        onEnter={onEnter}
                        disabled={isLoading}
                        onChangeText={onChange}/>
            <SuperButton disabled={isLoading} onClick={onEnter}>send</SuperButton>
            <SuperNavLink text='login' url={PATH.LOGIN}/>
        </div>

}
type ForgotPropsType = {
    inputValue: string
    onChange: (value: string) => void
    onEnter: () => void
    isLoading: boolean
    passRecoverySuccess: boolean
}