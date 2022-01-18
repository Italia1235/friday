import React from "react";
import {PackType} from "../../main/bll/reducers/packs-reducer";

export const Pack = React.memo(({pack, userId, onRemovingPack, onEditingPack, date}: PackPropsType) => {
    const isEditable = pack.user_id === userId;
    const onDeletePack = () => {
        onRemovingPack(pack._id)
    }
    const onEditPack = () => {
        onEditingPack(pack._id, 'someName') // can be changed after adding modal window for editing pack title
    }
    return <tr>
        <td>{pack.name}</td>
        <td>{pack.cardsCount}</td>
        <td>{date}</td>
        <td>{pack.user_name}</td>
        <td>
            {isEditable && <button onClick={onDeletePack}>DELETE</button>}
            {isEditable && <button onClick={onEditPack}>EDIT</button>}
            <button>LEARN</button>
        </td>
    </tr>
})

type PackPropsType = {
    pack: PackType;
    userId: string | null
    onRemovingPack: (id: string) => void
    onEditingPack: (id: string, name?: string) => void
    date: string
}