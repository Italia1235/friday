export type loadingStatus = "loading" | "successfully"
const initState = {
    successfully: "successfully"
}
export const registerReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "SET_LOADING_STATUS":
            return {...state, successfully: action.status}
        default:
            return state;
    }
}

type loadingStatusACType = ReturnType<typeof loadingStatusAC>
let loadingStatusAC = (status: loadingStatus) => {
    return {
        type: "SET_LOADING_STATUS",
        status
    } as const
}

type ActionType = loadingStatusACType

type InitStateType = typeof initState;