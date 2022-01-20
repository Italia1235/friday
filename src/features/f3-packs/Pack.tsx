import React from "react";
import {PackType} from "../../main/bll/reducers/packs-reducer";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../main/ui/routes/Routes";
import s from "./Packs.module.css";

export const Pack = React.memo(({pack, userId, onRemovingPack, onEditingPack, date}: PackPropsType) => {
    const isEditable = pack.user_id === userId;
    const onDeletePack = () => {
        onRemovingPack(pack._id)
    }
    const onEditPack = () => {
        onEditingPack(pack._id, 'someName') // can be changed after adding modal window for editing pack title
    }
    const userName = pack.user_name.length > 50 ? pack.user_name.slice(0,50) : pack.user_name;
    const navigate = useNavigate();

    return <tr>
        <td>
            <div className={s.packName}
                 onClick={()=>{navigate(`${PATH.CARDS}?cardsPack_id=${pack._id}`)} }>
                {pack.name}
            </div>
        </td>
        <td>{pack.cardsCount}</td>
        <td>{date}</td>
        <td>{userName}</td>
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