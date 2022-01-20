import {Dispatch} from "redux";
import {setError, setLoading} from "./app-reducer";
import {cardsAPI} from "../../dal/cardsAPI";
import {AppThunk} from "../store/store";

const initState = {
    cards: [] as CardType[],
    maxGrade: 5,
    minGrade: 0,
    page: 1,
    pageCount: 10,
    packUserId: null as string | null,
    cardsTotalCount: 20
}

export const cardsReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type){
        case "cards/SET-CARDS":
            return {...state, ...action.payload};
        default:
            return state;
    }
}
//Action creators
export const setCards = (cards: CardType[]) => ({type: 'cards/SET-CARDS', payload: {cards} } as const)

//Thunk creators
export const getCards = (pack_id: string | null) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const res = await cardsAPI.getCards(pack_id);
        dispatch(setCards(res.data.cards))
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'));
    } finally {
        dispatch(setLoading(false));
    }
}
export const createCard = (cardsPack_id: string | null, question?: string, answer?: string): AppThunk => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await cardsAPI.createCard({cardsPack_id, question, answer})
        dispatch(getCards(cardsPack_id));
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'));
    } finally {
        dispatch(setLoading(false));
    }
}
export const deleteCard = (cardsPack_id: string | null, _id: string): AppThunk => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await cardsAPI.deleteCard(cardsPack_id, _id)
        dispatch(getCards(cardsPack_id));
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'));
    } finally {
        dispatch(setLoading(false));
    }
}
export const updateCard = (cardsPack_id: string | null, _id:string, question?: string): AppThunk => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        await cardsAPI.updateCard({_id, question})
        dispatch(getCards(cardsPack_id));
    } catch (e: any) {
        dispatch(setError(e.response? e.response.data.error : 'some error'));
    } finally {
        dispatch(setLoading(false));
    }
}

// Types
type InitStateType = typeof initState;
type ActionType = ReturnType<typeof setCards>;

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string | null
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}