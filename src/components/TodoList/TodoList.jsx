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
                    {activeTodos.length === 0 ? (
                        <div className={styles.empty}>
                            <Motion.div 
                            key="active-empty"
                            layout
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className={styles.emptyItem}>
                                <EmptyIcon />
                                <p>Задач нет</p>
                            </Motion.div>
                        </div>
                    ) : (
                    <Motion.div
                        key="active-list"
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
                    </Motion.div>
                    )}
                </div>
            </AnimatePresence>
                    <AnimatePresence mode="wait">

                <Motion.div
                    key="completed-list"
                    layout="position"
                    transition={{
                        layout: {
                            type: 'spring',
                            stiffness: 90,
                            damping: 15,
                        },
                    }}
                    className={styles.listWrapsper}
                >
                    <Motion.div layout  >
                        Выполненные:
                    </Motion.div>
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
                        ''
                    )}
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
                </Motion.div>
            </AnimatePresence>
        </LayoutGroup>
    )
}