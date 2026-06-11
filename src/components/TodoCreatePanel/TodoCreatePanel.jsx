import { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoQuickAdd from '../TodoQuickAdd/TodoQuickAdd'
import TodoNote from '../TodoNote/TodoNote'
import TodoToggleDetails from './TodoToggleDetails'
import styles from './TodoCreatePanel.module.css'


const TodoCreatePanel = () => {
    const [ showDetails, setShowDetails ] = useState(false)
    return (
        <>
            <div className={styles.todoCreatePanel}>
                <TodoForm hideLabel placeholder="Новая задача..."/>
                {showDetails ? 
                    <>
                        <TodoQuickAdd />
                        <TodoNote />
                        <TodoToggleDetails setShowDetails={setShowDetails} showDetails={showDetails} />
                    </>
                    : <TodoToggleDetails setShowDetails={setShowDetails} showDetails={showDetails} />
                }
                
            </div>
        </>
    )
}

export default TodoCreatePanel