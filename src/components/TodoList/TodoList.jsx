import { useSelector} from 'react-redux'
import { selectVisibleTodos } from '../../store/todoSlice'
import styles from './TodoList.module.css'
import TodoItem from './TodoItem'

export default function TodoList() {


    const todos = useSelector(selectVisibleTodos)
    const activeTodos = todos.filter(todo => !todo.isCompleted)
    const completedTodos = todos.filter(todo => todo.isCompleted)

    return (
        <>
            <div>Активные</div>
            <ul className={styles.list}>     
                {activeTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo}/> 
                ))}
            </ul>
                <div>Выполненные</div>
            <ul className={styles.list}>     
                {completedTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))}
            </ul>   
        </>
    )
}