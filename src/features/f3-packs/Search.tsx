import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../main/bll/store/store";
import {LoginPageType} from "../../main/bll/reducers/login-reducer";
import {SearchType, setSearchValue} from "../../main/bll/reducers/search-reducer";
import SuperInput from "../../main/ui/common/superInput/SuperInput";
import {ChangeEvent, useState} from "react";



const Search = () => {
    const dispatch = useDispatch()
    const [valueSearch,setValue] = useState("")

    const SaveValue = () => {
        dispatch(setSearchValue(valueSearch))


    }

    const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <p>Это поиск</p>
            <input placeholder="search" value ={valueSearch} onChange ={changeSearchValue}/>
            <button onClick={SaveValue}>123</button>
        </div>
    );
};

export default Search;