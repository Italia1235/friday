import {Packs} from "./Packs";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPack, deletePack, getPacks, setRangeValues, updatePack} from "../../main/bll/reducers/packs-reducer";
import {AppStoreType} from "../../main/bll/store/store";
import s from "./Packs.module.css";
import {AddNewItem} from "./AddNewItem";
import {DoubleRangeSlider} from "../../main/ui/common/doubleRangeSlider/DoubleRangeSlider";

export const PacksContainer = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const userId = useSelector((state: AppStoreType) => state.login.userId);
    const {packs, minCardsCount, maxCardsCount, min, max} = useSelector((state: AppStoreType) => state.packs);
    const headers = ['Name', 'Cards', 'Last updated', 'Created by', 'Actions'];

    // values for DoubleRangeSlider
    const [rangeValue1, setRangeValue1] = useState(min);
    const [rangeValue2, setRangeValue2] = useState(max);

    //sets new values for min/max of cards quantity to filter packs
    const setCardsQtyRange = () => {
        dispatch(setRangeValues(rangeValue1, rangeValue2))
    }

    //CRUD operations with packs
    useEffect(() => {
        dispatch(getPacks())
    }, [dispatch, min, max])
    const onAddingNewPack = (value: string) => {
        dispatch(createPack(value ? value : 'New Pack'))
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
            <AddNewItem addNewCallback={onAddingNewPack}
                        isLoading={isLoading}
            />
            <DoubleRangeSlider min={minCardsCount} max={maxCardsCount}
                               setCardsQtyRange={setCardsQtyRange}
                               setRangeValue1={setRangeValue1}
                               setRangeValue2={setRangeValue2}
                               value={[rangeValue1, rangeValue2]}
                               />
            <Packs packs={packs}
                   headers={headers}
                   userId={userId}
                   onRemovingPack={onRemovingPack}
                   onEditingPack={onEditingPack}
            />
        </div>
    )
}