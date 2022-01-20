import s from './Cards.module.css';
import {Cards} from "./Cards";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createCard, getCards} from "../../main/bll/reducers/cards-reducer";
import {useSearchParams} from "react-router-dom";
import {AppStoreType} from "../../main/bll/store/store";
import {AddNewItem} from "../f3-packs/AddNewItem";
import SuperButton from "../../main/ui/common/superButton/SuperButton";
import SuperInput from "../../main/ui/common/superInput/SuperInput";

export const CardsContainer = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const userId = useSelector((state: AppStoreType) => state.login.userId);
    const cardsPack_id = searchParams.get('cardsPack_id');
    const headers = ['Question', 'Answer', 'Last updated', 'Grade', 'Actions'];
    const cards = useSelector((state: AppStoreType) => state.cards.cards);


    //CRUD operations with cards
    useEffect(() => {
        dispatch(getCards(cardsPack_id))

    }, [dispatch, cardsPack_id])

    const onAddingNewCard = (question: string, answer: string) => {
        dispatch(createCard(cardsPack_id, question, answer))
    }
    return (
        <div className={s.cardsList}>
            <h3>Cards list</h3>
            {/*<AddNewCard isLoading={isLoading} onAddingNewCard={onAddingNewCard}/>*/}
            <Cards headers={headers} cards={cards} userId={userId}/>
        </div>
    )
}

const AddNewCard = ({isLoading, onAddingNewCard}: PropsType) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const addNewCard = () => {
        onAddingNewCard(question, answer);
        setQuestion('');
        setAnswer('');

    }
    return (
        <div style={{display: "flex", gap: '30px', justifyContent: 'center'}}>
            <div style={{display: "flex", gap: '30px'}}>
                <SuperInput placeholder="Question"
                            disabled={isLoading}
                            onChange={e => setQuestion(e.currentTarget.value)}
                />
                <SuperInput placeholder="Answer"
                            disabled={isLoading}
                            onChange={e => setAnswer(e.currentTarget.value)}
                />
            </div>
            <SuperButton style={{width: '200px'}}
                         disabled={isLoading}
                         onClick={addNewCard}>
                Add New Card
            </SuperButton>
        </div>
    )
}

type PropsType = {
    isLoading: boolean
    onAddingNewCard: (question: string, answer: string) => void
}