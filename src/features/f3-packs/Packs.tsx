import s from './Packs.module.css';
import {PackType} from "../../main/bll/reducers/packs-reducer";
import {Pack} from "./Pack";
import React from 'react';

export const Packs = React.memo(({packs, headers, userId, onRemovingPack, onEditingPack}: PropsType) => {
    const mappedHeaders = headers.map((el,i) => <th key={i}>{el}</th>);
    const mappedPacks = packs.map(p => <Pack key={p._id} pack={p}
                                             userId={userId}
                                             onRemovingPack={onRemovingPack}
                                             onEditingPack={onEditingPack}
    />)
    return (
        <table className={s.packsTable}>
            <tbody>
            <tr> {mappedHeaders} </tr>
            {mappedPacks}
            </tbody>
        </table>
    )
})

type PropsType = {
    packs: PackType[]
    headers: string[]
    userId: string | null
    onRemovingPack: (id: string)=>void
    onEditingPack: (id: string, name?: string) => void
}

