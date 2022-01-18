import {Dispatch} from "redux";
import {packsAPI} from "../../dal/packsAPI";
import {setError, setLoading} from "./app-reducer";
import {AppStoreType, AppThunk} from "../store/store";

const initState = {
    packName: '',
    minCardsCount: 0, // min and max of our slider
    maxCardsCount: 120,
    min: 5, // min and max that user selected
    max: 25,
    page: 1,
    pageCount: 20,
    packs: [] as PackType[],
    isMine: false,
    sortPacks: '',
}

export const packsReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "packs/SET-PACKS":
        case "packs/SET-RANGE-VALUES":
        case "packs/SET-CARDS-COUNT":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

//Action creators
export const setPacks = (packs: PackType[]) => ({type: 'packs/SET-PACKS', payload: {packs}} as const)
export const setCardsCount = (minCardsCount: number, maxCardsCount: number) => ({type: 'packs/SET-CARDS-COUNT',
    payload: {minCardsCount, maxCardsCount}} as const);
export const setRangeValues = (min: number, max: number) => ({type: 'packs/SET-RANGE-VALUES', payload: {min, max}} as const)

//Thunk creators
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

export const createPack = (name: string): AppThunk => async (dispatch) => {
        try {
            dispatch(setLoading(true));
            dispatch(setError(null));
            await packsAPI.createPack(name);
            dispatch(getPacks())

        } catch (e: any) {
            dispatch(setError(e.response? e.response.data.error : 'some error'))
        } finally {
            dispatch(setLoading(false))
        }
}

export const deletePack = (id: string): AppThunk => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await packsAPI.deletePack(id);
        dispatch(getPacks())
    }catch (e:any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

export const updatePack = (id: string, name?: string): AppThunk => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await packsAPI.updatePack(id, name);
        dispatch(getPacks())
    }catch (e:any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

//Types

type InitStateType = typeof initState;

type ActionsType = ReturnType<typeof setPacks> | ReturnType<typeof setRangeValues> | ReturnType<typeof setCardsCount>

export type PackType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    // path: string
    private: false
    // rating: 0
    shots: 0
    // type: "pack" | "folder"
    updated: string
    user_id: string
    user_name: string
    // __v: 0
    _id: string
}