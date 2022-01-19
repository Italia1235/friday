import s from "./Packs.module.css";
import SuperInput from "../../main/ui/common/superInput/SuperInput";
import SuperButton from "../../main/ui/common/superButton/SuperButton";
import React, {useState} from "react";

export const AddNewItem = ({isLoading, addNewCallback}: PropsType) =>{
    const [text, setText] = useState('');
    // temp input will be replaced by modal window

    const addNewItem = () => {
        addNewCallback(text);
        setText('');
    }

    return (
        <div className={s.addNewPack}>
            <SuperInput disabled={isLoading}
                        value={text}
                        onChange={e => setText(e.currentTarget.value)}
            />
            <SuperButton style={{width: '200px'}}
                         onClick={addNewItem}
                         disabled={isLoading}
            >
                Add new pack
            </SuperButton>
        </div>
    )
}

type PropsType = {
    isLoading: boolean
    addNewCallback: (value:string)=>void
}