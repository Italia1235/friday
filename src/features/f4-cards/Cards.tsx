import React from 'react';
import s from './Cards.module.css';
import {Card} from "./Card";
import {CardType} from "../../main/bll/reducers/cards-reducer";

export const Cards = React.memo(({headers, cards}: PropsType) => {
    const mappedHeaders = headers.map((el, i)=><th key={i}>{el}</th>);
    const mappedCards = cards.map(el=> <Card key={el._id} card={el} />)
    return (
        <table className={s.cardsTable}>
            <tbody>
            <tr>{mappedHeaders}</tr>
            {mappedCards}
            </tbody>
        </table>
    )
});

type PropsType = {
    headers: string[]
    cards: CardType[]
}