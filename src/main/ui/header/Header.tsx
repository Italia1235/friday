import {Link} from "react-router-dom";
import s from './Header.module.css'
import {PATH} from "../routes/Routes";

export const Header = () => {
    return (
        <nav className={s.nav}>
            <Link to={PATH.PROFILE}>Profile</Link>
            <Link to={PATH.TEST}>Test</Link>
            <Link to={PATH.REGISTER}>Registration</Link>
            <Link to={PATH.LOGIN}>Login</Link>
            <Link to={PATH.PACKS}>Packs</Link>
            <Link to={PATH.FORGOT}>ForgotPass</Link>
            <Link to={PATH.SET_PASS}>SetNewPass</Link>
        </nav>
    )
}