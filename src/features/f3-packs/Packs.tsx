import s from './Packs.module.css';
import {PackType} from "../../main/bll/reducers/packs-reducer";
import {Pack} from "./Pack";
import React from 'react';
import {Pagination} from "./Pagination/Pagination";
import loading from "../../img/Spinner-1s-200px.svg"

export const Packs = React.memo(({packs, userId, onRemovingPack, onEditingPack, stateLoading}: PropsType) => {
    const mappedPacks = packs.map(p => {
        const date = new Date(p.updated)
        return <Pack key={p._id} pack={p}
                     date={date.toLocaleString()}
                     userId={userId}
                     onRemovingPack={onRemovingPack}
                     onEditingPack={onEditingPack}
        />
    })
    if (stateLoading) {
        return <img className={s.loading} src={loading}/>
    }
    return (
        <>
            <select className={s.select}>
                <option value="name">Sort by name</option>
                <option value="cards">Sort by cards</option>
                <option value="last updated">Sort by last updated</option>
            </select>
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
            <Pagination/>
            </tbody>
        </table>
        </>
    )
})

type PropsType = {
    packs: PackType[]
    userId: string | null
    onRemovingPack: (id: string) => void
    onEditingPack: (id: string, name?: string) => void
    stateLoading: boolean
}

