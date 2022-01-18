import {CardType} from "../../main/bll/reducers/cards-reducer";

export const Card = ({card}: PropsType) =>{
    return (
        <tr>
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>{card.updated}</td>
            <td>{card.grade}</td>
        </tr>
    )
}
type PropsType = {
    card: CardType
}
