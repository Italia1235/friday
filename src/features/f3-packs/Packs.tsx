import s from './Packs.module.css';
import {PackType, setSortedPacks} from "../../main/bll/reducers/packs-reducer";
import {Pack} from "./Pack";
import React, {ChangeEvent, useState} from 'react';
import {Pagination} from "./Pagination/Pagination";
import loading from "../../img/Spinner-1s-200px.svg"
import {Sort} from "./Sort/Sort";
import {MaxElement} from "./MaxElement/MaxElement";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../main/bll/store/store";

export const Packs = ({packs, userId, onRemovingPack, onEditingPack, stateLoading}: PropsType) => {
    const maxPacksCount = useSelector<AppStoreType, number>(state => state.packs.maxPacksCount)
    let countElem = 0
    const mappedPacks = packs.map(p => {
        if (countElem >= maxPacksCount) {
            return
        }
        countElem += 1
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
            <table className={s.packsTable}>
                <Sort/>
                <tbody>
            {/*    <table className={s.packsTable}>
                    <tbody>
                    <tr>{mappedHeaders}</tr>
                    {mappedPacks}
                    </tbody>
                </table>*/}

                <tr>
                    <th>Name</th>
                    <th>Cards</th>
                    <th>Last updated</th>
                    <th>Created by</th>
                    <th>Actions</th>
                </tr>
                {mappedPacks}
                <Pagination/>
                <MaxElement/>
                </tbody>
            </table>
        </>
    )
}

type PropsType = {
    packs: PackType[]
    userId: string | null
    onRemovingPack: (id: string) => void
    onEditingPack: (id: string, name?: string) => void
    stateLoading: boolean
}

