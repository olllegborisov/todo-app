import TodoItem from './TodoItem'
import EmptyIcon from '../../assets/icons/smile.svg?react'

import styles from './TodoList.module.css'

export default function TodoSection({ title, todos }) {
    return (
        <div className={styles.listWrapper}>
            <div className={styles.listTitle}>
                {title}
            </div>

            {todos.length === 0 ? (
                <div className={styles.emptyItem}>
                    <div className={styles.empty}>
                        <EmptyIcon />
                        <p>Задач нет</p>
                    </div>
                </div>
            ) : (
                <ul className={styles.list}>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}