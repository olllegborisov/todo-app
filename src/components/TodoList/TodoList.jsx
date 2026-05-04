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
                <Motion.div
                    initial={false}
                    animate={{
                        height: activeTodos.length > 0 ? 'auto' : 0,
                        opacity: activeTodos.length > 0 ? 1 : 0,
                        marginTop: activeTodos.length > 0 ? 24 : 0,
                    }}
                    transition={{
                        height: { duration: 0.35, ease: 'easeInOut' },
                        opacity: { duration: 0.2, ease: 'easeInOut' },
                        marginTop: { duration: 0.35, ease: 'easeInOut' },
                    }}
                    style={{ overflow: 'hidden' }}
                >
                    <Motion.ul layout
                        className={styles.list}
                        transition={{
                            layout: {
                                type: 'spring',
                                stiffness: 90,
                                damping: 18,
                            },
                        }}
                    >     
                        <AnimatePresence>
                            {activeTodos.map(todo => (
                                <TodoItem key={todo.id} todo={todo}/> 
                            ))}
                        </AnimatePresence>
                    </Motion.ul>
                </Motion.div>
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
                <Motion.div
                    initial={false}
                    animate={{
                        height: completedTodos.length > 0 ? 'auto' : 0,
                        opacity: completedTodos.length > 0 ? 1 : 0,
                        marginTop: completedTodos.length > 0 ? 24 : 0,
                    }}
                    transition={{
                        height: { duration: 0.35, ease: 'easeInOut' },
                        opacity: { duration: 0.2, ease: 'easeInOut' },
                        marginTop: { duration: 0.35, ease: 'easeInOut' },
                    }}
                    style={{ overflow: 'hidden' }}
                >
                    <Motion.ul layout
                        className={styles.list}
                        transition={{
                            layout: {
                                type: 'spring',
                                stiffness: 90,
                                damping: 18,
                            },
                        }}
                    >  
                        <AnimatePresence>
                            {completedTodos.map(todo => (
                                <TodoItem key={todo.id} todo={todo}/>
                            ))}
                        </AnimatePresence>
                    </Motion.ul>
                </Motion.div>   
            </Motion.div>
        </LayoutGroup>
    )
}