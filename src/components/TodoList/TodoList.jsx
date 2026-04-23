import { useSelector} from 'react-redux'
import { selectVisibleTodos } from '../../store/todoSlice'
import styles from './TodoList.module.css'
import TodoItem from './TodoItem'

export default function TodoList() {


    const todos = useSelector(selectVisibleTodos)

    return (
        <ul className={styles.list}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    )
}