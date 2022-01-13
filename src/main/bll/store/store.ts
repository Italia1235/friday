import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "../reducers/login-reducer";
import {registerReducer} from "../reducers/register-reducer";
import {forgotReducer} from "../reducers/forgot-reducer";
import {setPassReducer} from "../reducers/set-pass-reducer";
import {profileReducer} from "../reducers/profile-reducer";
import thunk from 'redux-thunk';
import {appReducer} from "../reducers/app-reducer";

const rootReducer = combineReducers({
    login: authReducer,
    register: registerReducer,
    forgot: forgotReducer,
    setPass: setPassReducer,
    profile: profileReducer,
    app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>;