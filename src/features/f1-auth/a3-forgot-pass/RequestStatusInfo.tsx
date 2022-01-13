import {useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";

export const RequestStatusInfo = ({passError}: RequestStatusPropsType) => {
    const {isLoading, appError} = useSelector((state: AppStoreType) => state.app);
    const newPassSuccess = useSelector((state:AppStoreType)=> state.setPass.newPassSuccess);
    return (
        <div style={{height: '50px'}}>
            {isLoading && <div style={{color: '#FF4500FF'}}>...Loading</div>}
            {appError && <div style={{color: "red"}}>{appError}</div>}
            {passError && <div style={{color: "red"}}>Passwords don't match!</div>}
            {newPassSuccess && <div style={{color: "greenyellow", fontWeight: 'bold'}}>Success!</div>}
        </div>
    )
}
type RequestStatusPropsType = {
    passError?: boolean
}