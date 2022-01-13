import {Route, Routes} from "react-router-dom";
import {Login} from "../../../features/f1-auth/a1-login/Login";
import {Profile} from "../../../features/f2-profile/Profile";
import {Registration} from "../../../features/f1-auth/a2-register/Registration";
import {Test} from "../../../features/f0-test/Test";
import {Error404} from "../../../features/error404/Error404";
import React from "react";
import {ForgotPass} from "../../../features/f1-auth/a3-forgot-pass/ForgotPass";
import {SetPassword} from "../../../features/f1-auth/a4-new-pass/SetPassword";
import {RegistrationContainer} from "../../../features/f1-auth/a2-register/RegistrationContainer";

export const PATH = {
    PROFILE: '/profile',
    LOGIN: '/login',
    FORGOT: '/forgot',
    REGISTER: '/register',
    TEST: '/test',
    SET_PASS: '/set-new-password'
}

export const RoutesComponent = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.FORGOT} element={<ForgotPass/>}/>
                <Route path={PATH.REGISTER} element={<RegistrationContainer/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.SET_PASS} element={<SetPassword/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </>
    )
}