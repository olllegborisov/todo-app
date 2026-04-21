import { useDispatch } from 'react-redux'
import { setFilter } from '../../store/todoSlice'
import style from './TodoFilter.module.css'

export default function TodoFilter() {
    const dispatch = useDispatch()
    
    return (
        <div className={style.filter}>
            <button className={style.button} onClick={() => dispatch(setFilter('all'))}>Все</button>   
            <button className={style.button} onClick={() => dispatch(setFilter('active'))}>Активные</button>   
            <button className={style.button} onClick={() => dispatch(setFilter('completed'))}>Выполненные</button>   
        </div>
    )
}