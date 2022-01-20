import {Dispatch} from "redux";
import {packsAPI} from "../../dal/packsAPI";
import {setError, setLoading} from "./app-reducer";
import {AppStoreType, AppThunk, AppThunkDispatch} from "../store/store";


export type SortedType = 'name' | 'cards' | 'last updated'

const initState = {
    packName: null as string | null,
    minCardsCount: null as number | null,
    maxCardsCount: null as number | null,
    page: 1,
    pageCount: 4,
    packs: [] as PackType[],
    currentPage: 1,
    sortedPacks: 'name' as SortedType,
    maxPacksCount: 20,
    min:0,
    max:120,
    isMine:false,
    sortPacks:"",

}

export const packsReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "SET-PACKS":
            return {...state, ...action.payload}
        case "SET_PAGE_COUNT":
            return {...state, pageCount: action.pageCount}
        case "SET_SORTED_PACKS":
            return {
                ...state,
                sortedPacks: action.sort,
                packs: handlerSorted(state, action.sort).packs
            }
        case "SET_MAX_PACKS_COUNT":
            return {...state, maxPacksCount: action.count}

        case "SEARCH\SET-VALUE":
            return {...state,packName: action.value}

        default:
            return state;
    }
}

const handlerSorted = (state: InitStateType, action: SortedType): InitStateType => {
    switch (action) {
        case "name": {
            return {
                ...state,
                packs: state.packs
                    .sort((a, b) => a.name < b.name ? 1 : -1)
                    .map((el) => el)
            }
        }
        case "cards": {
            return {
                ...state,
                packs: state.packs
                    .sort((a, b) => a.cardsCount < b.cardsCount ? 1 : -1)
                    .map((el) => el)
            }
        }
        case "last updated": {
            return {
                ...state,
                packs: state.packs
                    .sort((a, b) => a.updated < b.updated ? 1 : -1)
                    .map((el) => el)
            }
        }
        default: {
            return state
        }
    }
}

//Action creators
type setPacksType = ReturnType<typeof setPacks>
export const setRangeValues = (min: number, max: number) => ({type: 'packs/SET-RANGE-VALUES', payload: {min, max}} as const)
export const setPacks = (packs: PackType[]) => ({type: 'SET-PACKS', payload: {packs}} as const)
type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (pageCount: number) => {
    return {
        type: "SET_PAGE_COUNT",
        pageCount
    } as const
}
export const setSearchValue = (value:string)=>(
    {type:"SEARCH\SET-VALUE",value}as const)

type setSortedPacksType = ReturnType<typeof setSortedPacks>
export const setSortedPacks = (sort: SortedType) => ({type: "SET_SORTED_PACKS", sort} as const)
type setMaxPacksCountType = ReturnType<typeof setMaxPacksCount>
export const setMaxPacksCount = (count: number) => {
    return {
        type: "SET_MAX_PACKS_COUNT",
        count
    } as const
}

//Thunk creators
/*export const getPacks = (page?: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const res = await packsAPI.getPacks('', 0, 0, '', page);
        dispatch(setPacks(res.data.cardPacks))
        dispatch(setCurrentPage(res.data.pageCount))
    } catch (e: any) {
        dispatch(setError(e.response ? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}*/

export const getPacks = () => async (dispatch: Dispatch, getState: () => AppStoreType) => {
    const {packName, min, max, page, pageCount, isMine, sortPacks} = getState().packs
    const user_id = isMine ? getState().login.userId : null
    //how to add
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const res = await packsAPI.getPacks(packName, min, max, sortPacks, page, pageCount, user_id );
        dispatch(setPacks(res.data.cardPacks))
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}


export const createPack = (name: string):AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await packsAPI.createPack(name);
        dispatch(getPacks())

    } catch (e: any) {
        dispatch(setError(e.response ? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

export const deletePack = (id: string):AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await packsAPI.deletePack(id);
        dispatch(getPacks())
    } catch (e: any) {
        dispatch(setError(e.response ? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

export const updatePack = (id: string, name?: string):AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await packsAPI.updatePack(id, name);
        dispatch(getPacks())
    } catch (e: any) {
        dispatch(setError(e.response ? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

//Types

type InitStateType = typeof initState;

export type SearchType = ReturnType<typeof setSearchValue>

type ActionsType = setPacksType | setCurrentPageType | setSortedPacksType | setMaxPacksCountType | SearchType

export type PackType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: false
    rating: 0
    shots: 0
    type: "pack" | "folder"
    updated: string
    user_id: string
    user_name: string
    __v: 0
    _id: string
}