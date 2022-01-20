const initState = {
    valueSearch: "",
}

export type SearchType = {
    valueSearch: string | undefined
}
export const searchReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {

        case "SEARCH\SET-VALUE":
       return {...state,valueSearch: action.value}

        default:
            return state;
    }
}

type ActionType = SearchSetType

//Actions Creators
export const setSearchValue = (value:string)=>(
    {type:"SEARCH\SET-VALUE",value}as const)


type SearchSetType = ReturnType<typeof setSearchValue>

type InitStateType = typeof initState