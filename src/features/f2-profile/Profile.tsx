import {useSelector} from "react-redux";
import {AppStoreType} from "../../main/bll/store/store";
import {InitStateTypeProfile} from "../../main/bll/reducers/profile-reducer";


export const Profile = () => {

    const profile = useSelector<AppStoreType,InitStateTypeProfile>(state => state.profile)
    return (
        <div>
        <h3>Profile</h3>

            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
        </div>
    )
}