import {PackType, setSortedPacks, SortedType} from "../../../main/bll/reducers/packs-reducer";
import s from "../Packs.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";


export const Sort = () => {
    let selectValue = useSelector<AppStoreType, SortedType>(state => state.packs.sortedPacks)
    let dispatch = useDispatch()

    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortedPacks(e.target.value as SortedType))
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
        </>
    )
}