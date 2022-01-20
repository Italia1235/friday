import React from "react";
import {CardType} from "../../main/bll/reducers/cards-reducer";

export const Card = React.memo(({card, userId}: PropsType) =>{
    const isEditable = card.user_id === userId
    return (
        <tr>
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>{card.updated}</td>
            <td>{card.grade}</td>
            <td>
                {isEditable && <button>EDIT</button>}
                {isEditable && <button>DELETE</button>}
            </td>
        </tr>
    )
})

type PropsType = {
    card: CardType
    userId: string | null
}
