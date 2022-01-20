import {Packs} from "./Packs";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPack, deletePack, getPacks, setRangeValues, updatePack} from "../../main/bll/reducers/packs-reducer";
import {AppStoreType} from "../../main/bll/store/store";
import s from "./Packs.module.css";
/*import {AddNewPack} from "./AddNewPack";*/
import {useParams} from "react-router-dom";
import {AddNewItem} from "./AddNewItem";
import {DoubleRangeSlider} from "../../main/ui/common/doubleRangeSlider/DoubleRangeSlider";
import Search from "./Search";

export const PacksContainer = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const [text, setText] = useState('')
    const isLoading = useSelector((state: AppStoreType) => state.app.isLoading);
    const userId = useSelector((state: AppStoreType) => state.login.userId);

    const {packs, minCardsCount, maxCardsCount, min, max,packName} = useSelector((state: AppStoreType) => state.packs);
    const headers = ['Name', 'Cards', 'Last updated', 'Created by', 'Actions'];

    // values for DoubleRangeSlider
    const [rangeValue1, setRangeValue1] = useState(min);
    const [rangeValue2, setRangeValue2] = useState(max);

    //sets new values for min/max of cards quantity to filter packs
    const setCardsQtyRange = () => {
        dispatch(setRangeValues(rangeValue1, rangeValue2))
    }

    // temp input will be replaced by modal window
    // const packs = useSelector((state: AppStoreType) => state.packs.packs);
    const stateLoading = useSelector<AppStoreType, boolean>(state => state.app.isLoading)
/*    useEffect(() => {
        if (params.id) {
            dispatch(getPacks(+params.id))
        }
    }, [params])
    const onInputChangeText = (value: string) => {
        setText(value);
    }*/

    //CRUD operations with packs
    useEffect(() => {
        dispatch(getPacks())
    }, [dispatch, min, max,packName])
 /*   const onAddingNewPack = (value: string) => {
        dispatch(createPack(value ? value : 'New Pack'))
    }, [dispatch, min, max,packName])
    */



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
            <Search/>
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
           /*        headers={headers}*/
                   userId={userId}
                   onRemovingPack={onRemovingPack}
                   onEditingPack={onEditingPack}
                   stateLoading={stateLoading}
            />
        </div>
    )
}