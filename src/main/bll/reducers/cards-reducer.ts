import {Dispatch} from "redux";
import {setError, setLoading} from "./app-reducer";
import {cardsAPI} from "../../dal/cardsAPI";

const initState = {
    cards: [] as CardType[],
    maxGrade: 5,
    minGrade: 0,
    page: 1,
    pageCount: 10,
    packUserId: null as string | null,
    cardsTotalCount: 10
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