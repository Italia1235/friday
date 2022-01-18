import s from './Cards.module.css';
import {Cards} from "./Cards";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../main/bll/reducers/cards-reducer";
import {useSearchParams} from "react-router-dom";
import {AppStoreType} from "../../main/bll/store/store";

export const CardsContainer = () =>{
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const cardsPack_id = searchParams.get('cardsPack_id');
    const headers = ['Question', 'Answer', 'Last updated', 'Grade'];
    const cards = useSelector((state: AppStoreType) => state.cards.cards)
    useEffect(()=> {
        dispatch(getCards(cardsPack_id))
    }, [dispatch, cardsPack_id])
    return (
        <div className={s.cardsList}>
            <h3>Cards list</h3>
            <Cards headers={headers} cards={cards}/>
        </div>
    )
}