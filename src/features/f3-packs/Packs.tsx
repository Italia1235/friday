import s from './Packs.module.css';
import {PackType} from "../../main/bll/reducers/packs-reducer";
import {Pack} from "./Pack";
import React from 'react';

export const Packs = React.memo(({packs, userId}: PropsType) => {
    const mappedPacks = packs.map(p => <Pack key={p._id} pack={p} userId={userId}/>)
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
}

