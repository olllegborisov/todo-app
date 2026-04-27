import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../store/todoSlice'
import style from './TodoFilter.module.css'

export default function TodoFilter() {
    const dispatch = useDispatch()
    const currentFilter = useSelector(state => state.todos.filter)
    
    return (
        <div className={style.filter}>
            <button className={`${style.button} ${currentFilter === 'all' ? style.active : ''}`} 
            onClick={() => dispatch(setFilter('all'))}
            >
                Все
            </button>   
            <button className={`${style.button} ${currentFilter === 'active' ? style.active : ''}`}
            onClick={() => dispatch(setFilter('active'))}
            >
                Активные
            </button>   
            <button 
            className={`${style.button} ${currentFilter === 'completed' ? style.active : ''}`}
            onClick={() => dispatch(setFilter('completed'))}
            >
                Выполненные
            </button>   
        </div>
    )
}