import {useSelector} from "react-redux";
import {AppStoreType} from "../../main/bll/store/store";
import {LoginPageType} from "../../main/bll/reducers/login-reducer";
import {SearchType, setSearchValue} from "../../main/bll/reducers/search-reducer";
import SuperInput from "../../main/ui/common/superInput/SuperInput";
import {ChangeEvent, useState} from "react";



const Search = () => {

    const [valueSearch,setValue] = useState("")

    const debounce = (fn:Function,ms:number) => {
        let timeout:number
        return function (){


        }
    }
    const SaveValue = () => {
        setSearchValue(valueSearch)
    }

    const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }


    return (
        <div>
            <input value ={valueSearch} onChange ={changeSearchValue}/>
        </div>
    );
};

export default Search;