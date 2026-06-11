import React from 'react'
import TodoForm from '../TodoForm/TodoForm'
import styles from './TodoCreatePanel.module.css'


const TodoCreatePanel = () => {
    return (
        <>
            <div className={styles.todoCreatePanel}>
                <TodoForm placeholder="Новая задача..."/>
            </div>
        </>
    )
}

export default TodoCreatePanel