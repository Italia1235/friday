import s from './Packs.module.css';
import {PackType} from "../../main/bll/reducers/packs-reducer";
import {Pack} from "./Pack";
import React, {ChangeEvent, useState} from 'react';
import {Pagination} from "./Pagination/Pagination";
import loading from "../../img/Spinner-1s-200px.svg"

export const Packs = React.memo(({packs, userId, onRemovingPack, onEditingPack, stateLoading}: PropsType) => {
    let [selectValue, setSelectValue] = useState('Sort by name')

    function byField(field: any) {
        return (a: any, b: any) => a[field] < b[field] ? 1 : -1;
    }

    const sortedFunc = () => {
        let newPacks: PackType[] = []
        if (selectValue === "name") {
            newPacks = packs.sort(byField("name"))
        } else if (selectValue === "cards") {
            newPacks = packs.sort(byField("cardsCount"))
        } else {
            newPacks = packs.sort(byField("updated"))
        }
        return newPacks
    }
    packs = sortedFunc()

    const mappedPacks = packs.map(p => {
        const date = new Date(p.updated)
        return <Pack key={p._id} pack={p}
                     date={date.toLocaleString()}
                     userId={userId}
                     onRemovingPack={onRemovingPack}
                     onEditingPack={onEditingPack}
        />
    })

    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.target.value)
    }

    if (stateLoading) {
        return <img className={s.loading} src={loading}/>
    }
    return (
        <>
            <select onChange={changeSelect}
                    value={selectValue}
                    className={s.select}>
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

