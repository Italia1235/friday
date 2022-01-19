import axios from "axios";
import {PackType} from "../bll/reducers/packs-reducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const packsAPI = {
    getPacks(packName?:string, min?:number, max?:number, sortPacks?: string, page?:number, pageCount?:number){
        return instance.get<PacksResponseType>(
            `/cards/pack?packName=${packName ? packName : 'english'}&min=${min ? min : 0}&max=${max ? max: 100}&page=${page ? page: 4}&pageCount=${pageCount? pageCount : 20}`)
    },
    createPack(name: string){
        return instance.post('/cards/pack', {cardsPack: {name}})
    },
    deletePack(id: string){
        return instance.delete(`/cards/pack?id=${id}`)
    },
    updatePack(id: string, name?:string){
        return instance.put( '/cards/pack', {cardsPack: {_id: id, name}} )
    }
}

type PacksResponseType = {
    cardPacks: PackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number

}
// type CreatePackResType = {
//     cardsCount: number
//     created: string
//     grade: number
//     more_id: string
//     name: string
//     path: string
//     private: false
//     rating: number
//     shots: number
//     type: "pack"
//     updated: "2022-01-16T19:03:52.811Z"
//     user_id: "61dda8ce9723a50004d2f843"
//     user_name: "dlzht73@yandex.ru"
// }
