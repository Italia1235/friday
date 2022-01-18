import axios from "axios";
import {PackType} from "../bll/reducers/packs-reducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const packsAPI = {
    getPacks(packName?: string, min?:number, max?:number, sortPacks?: string, page?:number, pageCount?:number, user_id?: string | null){
        return instance.get<PacksResponseType>(`/cards/pack`,
            {params: {packName, min, max, sortPacks, page, pageCount, user_id}})
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

