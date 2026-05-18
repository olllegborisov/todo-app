import { AnimatePresence, LayoutGroup, motion as Motion } from 'motion/react'
import { useSelector} from 'react-redux'
import { selectVisibleTodos } from '../../store/todoSlice'
import styles from './TodoList.module.css'
import TodoItem from './TodoItem'
import EmptyIcon from '../../assets/icons/smile.svg?react'

export default function TodoList() {


    const todos = useSelector(selectVisibleTodos)
    const activeTodos = todos.filter(todo => !todo.isCompleted)
    const completedTodos = todos.filter(todo => todo.isCompleted)

    return (
        <LayoutGroup>
            <AnimatePresence mode="wait">
                <div className={styles.listWrapper}>
                    <div>Активные:</div>
                    <AnimatePresence mode="wait">
                        {activeTodos.length === 0 ? (
                            <Motion.div 
                                key="active-empty"
                                layout
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                className={styles.emptyItem}>
                                <div className={styles.empty}>
                                    <EmptyIcon />
                                    <p>Задач нет</p>
                                </div>
                            </Motion.div>
                        ) : (
                            <Motion.div
                                key="active-items"
                                initial={false}
                                animate={{
                                    height: 'auto',
                                    opacity: 1,
                                    marginTop: 24,
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                    marginTop: 0,
                                }}
                                transition={{
                                    height: { duration: 0.35, ease: 'easeInOut' },
                                    opacity: { duration: 0.2, ease: 'easeInOut' },
                                    marginTop: { duration: 0.35, ease: 'easeInOut' },
                                }}
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
                                            <TodoItem key={todo.id} todo={todo} listType="active"/> 
                                        ))}
                                    </AnimatePresence>
                                </Motion.ul>
                            </Motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </AnimatePresence>
                    <AnimatePresence mode="wait">

                <Motion.div
                    key="completed-list"
                    layout="position"
                    transition={{
                        layout: {
                            type: 'spring',
                            stiffness: 115,
                            damping: 16,
                        },
                    }}
                    className={styles.listWrapper}
                >
                    <Motion.div layout  >
                        Выполненные:
                    </Motion.div>
                    <AnimatePresence mode="wait">
                        {completedTodos.length === 0 ? (
                            <Motion.div 
                                key="completed-empty"
                                layout
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                className={styles.emptyItem}>
                                <div className={styles.empty}>
                                    <EmptyIcon />
                                    <p>Задач нет</p>
                                </div>
                            </Motion.div>
                        ) : (
                            <Motion.div
                                key="completed-items"
                                initial={false}
                                animate={{
                                    height: 'auto',
                                    opacity: 1,
                                    marginTop: 24,
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                    marginTop: 0,
                                }}
                                transition={{
                                    height: { duration: 0.35, ease: 'easeInOut' },
                                    opacity: { duration: 0.2, ease: 'easeInOut' },
                                    marginTop: { duration: 0.35, ease: 'easeInOut' },
                                }}
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
                                            <TodoItem key={todo.id} todo={todo} listType="completed"/>
                                        ))}
                                    </AnimatePresence>
                                </Motion.ul>
                            </Motion.div>
                        )}
                    </AnimatePresence>
                </Motion.div>
            </AnimatePresence>
        </LayoutGroup>
    )
}