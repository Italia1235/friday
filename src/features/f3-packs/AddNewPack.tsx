import s from "./Packs.module.css";
import SuperInput from "../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../main/ui/common/superButton/SuperButton";
import React from "react";

export const AddNewPack = ({isLoading, text, onInputChangeText, addNewPack}: PropsType) =>{
    return (
        <div className={s.addNewPack}>
            <SuperInput disabled={isLoading}
                        value={text}
                        onChangeText={onInputChangeText}
            />
            <SuperButton style={{width: '200px'}}
                         onClick={addNewPack}
                         disabled={isLoading}
            >
                Add new pack
            </SuperButton>
        </div>
    )
}

type PropsType = {
    isLoading: boolean
    text: string
    onInputChangeText: (value: string)=>void
    addNewPack: ()=>void
}