import { useDispatch } from 'react-redux'
import { setFilter } from '../../store/todoSlice'

export default function TodoFilter() {
    const dispatch = useDispatch()
    return (
        <div className="todo-filter">
            <button onClick={() => dispatch(setFilter('all'))}>Все</button>   
            <button onClick={() => dispatch(setFilter('active'))}>Активные</button>   
            <button onClick={() => dispatch(setFilter('completed'))}>Выполненные</button>   
        </div>
    )
}