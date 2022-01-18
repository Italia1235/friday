import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../main/bll/store/store";
import s from "../Pagination/Pagination.module.css"
import {NavLink} from "react-router-dom";
import {setCurrentPage} from "../../../main/bll/reducers/packs-reducer";

export const Pagination = () => {
    let dispatch = useDispatch()
    let statePageCount = useSelector<AppStoreType, number>(state => state.packs.pageCount)
    let createPaginationList = () => {
        let arr = []
        for (let i = 1; i <= statePageCount; i++) {
            arr.push(i)
        }
        return arr
    }

    let paginationArr = createPaginationList()

    return (
        <>
            {paginationArr.map((el) => {
                let currentPage = () => {
                    dispatch(setCurrentPage(el))
                }
                return <NavLink to={`/packs/${el}`}
                                className={({isActive}) => {
                                    return isActive ? s.activeElem : s.elem
                                }}
                                onClick={currentPage}
                >{el}</NavLink>
            })}
        </>
    )
}