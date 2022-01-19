import {Packs} from "./Packs";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPack, deletePack, getPacks, updatePack} from "../../main/bll/reducers/packs-reducer";
import {AppStoreType} from "../../main/bll/store/store";
import s from "./Packs.module.css";
import {AddNewPack} from "./AddNewPack";
import {useParams} from "react-router-dom";


export const PacksContainer = () => {
    const dispatch = useDispatch();
    const params = useParams()
    const [text, setText] = useState('')
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const userId = useSelector((state: AppStoreType) => state.login.userId);
    const packs = useSelector((state: AppStoreType) => state.packs.packs);
    const stateLoading = useSelector<AppStoreType, boolean>(state => state.app.isLoading)
    useEffect(() => {
        if (params.id) {
            dispatch(getPacks(+params.id))
        }
    }, [params])
    const onInputChangeText = (value: string) => {
        setText(value);
    }
    console.log('params: ', params);
    const onAddingNewPack = () => {
        if (text) {
            dispatch(createPack(text))
        } else {
            dispatch(createPack('New Pack'))
        }
    }
    const onRemovingPack = (id: string) => {
        dispatch(deletePack(id))
    }
    const onEditingPack = (id: string, name?: string) => {
        dispatch(updatePack(id, name))
    }


    return (
        <div className={s.packList}>
            <h3>Packs list</h3>
            <AddNewPack addNewPack={onAddingNewPack}
                        isLoading={isLoading}
                        onInputChangeText={onInputChangeText}
                        text={text}
            />
            <Packs packs={packs}
                   userId={userId}
                   onRemovingPack={onRemovingPack}
                   onEditingPack={onEditingPack}
                   stateLoading={stateLoading}
            />
        </div>
    )
}