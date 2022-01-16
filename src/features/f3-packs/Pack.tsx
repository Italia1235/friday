import React from "react";
import {PackType} from "../../main/bll/reducers/packs-reducer";

export const Pack = React.memo(({pack, userId}: PackPropsType) => {
    console.log('packUserId', pack.user_id)
    console.log('loginUserId', userId)
    const isEditable = pack.user_id === userId;
    return <tr>
        <td>{pack.name}</td>
        <td>{pack.cardsCount}</td>
        <td>{pack.updated}</td>
        <td>{pack.user_name}</td>
        <td>
            {isEditable && <button>DELETE</button>}
            {isEditable && <button>EDIT</button>}
            <button>LEARN</button>
        </td>
    </tr>
})

type PackPropsType = {
    pack: PackType;
    userId: string | null
}