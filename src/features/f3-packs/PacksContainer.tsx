import {Packs} from "./Packs";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPack, getPacks} from "../../main/bll/reducers/packs-reducer";
import {AppStoreType} from "../../main/bll/store/store";
import s from "./Packs.module.css";
import {AddNewPack} from "./AddNewPack";

export const PacksContainer = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('')
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const userId = useSelector((state: AppStoreType) => state.login.userId);
    const packs = useSelector((state: AppStoreType) => state.packs.packs);
    const onInputChangeText = (value: string) => {
        setText(value);
    }
    const addNewPack = () => {
        if (text){
            dispatch(createPack(text))
        } else {
            dispatch(createPack('New Pack'))
        }
    }
    useEffect(() => {
        dispatch(getPacks())
    }, [])

    return (
        <div className={s.packList}>
            <h3>Packs list</h3>
            <AddNewPack addNewPack={addNewPack}
                        isLoading={isLoading}
                        onInputChangeText={onInputChangeText}
                        text={text}
            />
            <Packs packs={packs} userId={userId}/>
        </div>
    )
}