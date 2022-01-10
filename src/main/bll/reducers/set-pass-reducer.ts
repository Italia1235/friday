const initState = {

}
export const setPassReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type){
        default:
            return state;
    }
}

type ActionType = {
    type: string
    payload: any
}

type InitStateType = typeof initState;