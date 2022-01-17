import s from './Packs.module.css';
import {PackType} from "../../main/bll/reducers/packs-reducer";
import {Pack} from "./Pack";
import React from 'react';

export const Packs = React.memo(({packs, userId, onRemovingPack, onEditingPack}: PropsType) => {
    const mappedPacks = packs.map(p => <Pack key={p._id} pack={p}
                                             userId={userId}
                                             onRemovingPack={onRemovingPack}
                                             onEditingPack={onEditingPack}
    />)
    return (
        <table className={s.packsTable}>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Cards</th>
                <th>Last updated</th>
                <th>Created by</th>
                <th>Actions</th>
            </tr>
            {mappedPacks}
            </tbody>
        </table>
    )
})

type PropsType = {
    packs: PackType[]
    userId: string | null
    onRemovingPack: (id: string)=>void
    onEditingPack: (id: string, name?: string) => void
}

