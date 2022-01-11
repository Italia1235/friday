import {ForgotInitStateType, forgotReducer, setPassRecoverySuccess} from "./forgot-reducer";

let startState: ForgotInitStateType;

beforeEach(()=> {
    startState = {
        passRecoverySuccess: false
    }
})

test('forgot-reducer should change passRecoverySuccess', ()=> {
    const endState = forgotReducer(startState, setPassRecoverySuccess(true))

    expect(endState.passRecoverySuccess).toBe(true)
})