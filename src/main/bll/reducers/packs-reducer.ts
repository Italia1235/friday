import {Dispatch} from "redux";
import {packsAPI} from "../../dal/packsAPI";
import {setError, setLoading} from "./app-reducer";
import {AppThunkDispatch} from "../store/store";

const initState = {
    packName: null as string | null,
    minCardsCount: 0, // min and max of our slider
    maxCardsCount: 120,
    min: 0, // min and max that user selected
    max: 25,
    page: 1,
    pageCount: 20,
    packs: [] as PackType[],
    isMine: false,
}

export const packsReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "SET-PACKS":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

//Action creators
export const setPacks = (packs: PackType[]) => ({type: 'SET-PACKS', payload: {packs}} as const)

//Thunk creators
export const getPacks = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const res = await packsAPI.getPacks();
        dispatch(setPacks(res.data.cardPacks))
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'))
    } finally {
        dispatch(setLoading(false))
    }
}

export const createPack = (name: string) => async(dispatch: AppThunkDispatch) => {
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

export const deletePack = (id: string) => async (dispatch: AppThunkDispatch) => {
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

export const updatePack = (id: string, name?: string) => async (dispatch: AppThunkDispatch) => {
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

type ActionsType = ReturnType<typeof setPacks>

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