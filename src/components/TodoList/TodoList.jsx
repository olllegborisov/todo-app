import { AnimatePresence, LayoutGroup, motion as Motion } from 'motion/react'
import { useSelector} from 'react-redux'
import { selectVisibleTodos } from '../../store/todoSlice'
import styles from './TodoList.module.css'
import TodoItem from './TodoItem'

export default function TodoList() {


    const todos = useSelector(selectVisibleTodos)
    const activeTodos = todos.filter(todo => !todo.isCompleted)
    const completedTodos = todos.filter(todo => todo.isCompleted)

    return (
        <LayoutGroup>
            <Motion.div
                layout="position"
                transition={{
                    layout: {
                        type: 'spring',
                        stiffness: 90,
                        damping: 15,
                    },
                }}
                className={styles.listWrapper}
            >
                <div>Активные:</div>
                <ul className={styles.list}>     
                    <AnimatePresence>
                        {activeTodos.map(todo => (
                            <TodoItem key={todo.id} todo={todo}/> 
                        ))}
                    </AnimatePresence>
                </ul>
            </Motion.div>
            <Motion.div
                layout="position"
                transition={{
                    layout: {
                        type: 'spring',
                        stiffness: 90,
                        damping: 15,
                    },
                }}
                className={styles.listWrapper}
            >
                <div>Выполненные:</div>
                <ul className={styles.list}>     
                    <AnimatePresence>
                        {completedTodos.map(todo => (
                            <TodoItem key={todo.id} todo={todo}/>
                        ))}
                    </AnimatePresence>
                </ul>   
            </Motion.div>
        </LayoutGroup>
    )
}