import SuperInput from "../../main/ui/common/superInput/SuperInput";
import SuperCheckbox from "../../main/ui/common/supperCheckbox/SuperCheckbox";
import SuperButton from "../../main/ui/common/superButton/SuperButton";
import s from './Test.module.css';
import {SuperNavLink} from "../../main/ui/common/superNavLink/SuperNavLink";
import {PATH} from "../../main/ui/routes/Routes";

export const Test = () => {
    return (
        <div className={s.example}>
            <h3>Test</h3>
            <SuperInput/>
            <SuperCheckbox/>
            <SuperNavLink text='Forgot your password?' url={PATH.FORGOT} />
            <SuperButton>Login</SuperButton>
        </div>
    )
}