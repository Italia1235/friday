import {useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";

export const RequestStatusInfo = () => {
    const {isLoading, appError} = useSelector((state: AppStoreType) => state.app);
    const passRecoverySuccess = useSelector((state: AppStoreType) => state.forgot.passRecoverySuccess)
    return (
        <div style={{height: '50px'}}>
            {isLoading && <div style={{color: '#FF4500FF'}}>...Loading</div>}
            {appError && <div style={{color: "red"}}>{appError}</div>}
            {passRecoverySuccess && <div style={{color: "greenyellow", fontWeight: 'bold'}}>Success!</div>}
        </div>
    )
}