import axios from "axios";
import {CardType} from "../bll/reducers/cards-reducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const cardsAPI = {
    getCards(cardsPack_id: string | null, cardAnswer?:string, cardQuestion?:string,
             min?:number, max?:number, sortCards?:string, page?:number, pageCount?:number ){
        return instance.get<CardsResType>('/cards/card',
            {params: {cardsPack_id, cardAnswer, cardQuestion, min, max, sortCards, page, pageCount}})
    },
    createCard(card: {cardsPack_id: string | null, question?: string, answer?: string}){
        return instance.post('/cards/card', {card})
    }

}

type CardsResType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string //id of user that created pack
}