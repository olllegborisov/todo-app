import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, removeTodo, editTodo } from '../../../store/todoSlice'

import Checkbox from '../../common/Checkbox/Checkbox'
import ActiveButton from '../../common/ActiveButton/ActiveButton'

import styles from './TodoItem.module.css'

export default function TodoItem({ todo }) {
    const dispatch = useDispatch()

    const [editingId, setEditingId] = useState(null)
    const [text, setText] = useState(todo.text)

    const handleEditClick = () => {
        setEditingId(todo.id)
        setText(todo.text)
    }

    const handleSave = () => {
        dispatch(editTodo({ id: todo.id, text }))
        setEditingId(null)
    }

    const handleCancel = () => {
        setEditingId(null)
        setText(todo.text)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSave()

        if (e.key === 'Escape') {
            handleCancel()
        }
    }

    return (
        <li className={styles.item}>
            {editingId === todo.id ? (
                <>
                    <div className={styles.editRow}>
                        <input
                            className={`${styles.editInput} form-field`}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <div className={styles.itemActions}>
                        <ActiveButton type="save" onClick={handleSave}/>
                        <ActiveButton type="cancel" onClick={handleCancel}/>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.taskRow}>
                        <Checkbox todoState={todo.isCompleted} dispatch={() => dispatch(toggleTodo(todo.id))}/>

                        <span
                            className={`${styles.taskText} ${
                                todo.isCompleted ? styles.completed : ''
                            }`}
                        >
                            {todo.text}
                        </span>
                    </div>

                    <div className={styles.itemActions}>
                        <ActiveButton type="edit" onClick={handleEditClick}/>
                        <ActiveButton type="delete" onClick={() => dispatch(removeTodo(todo.id))}/>
                    </div>
                </>
            )}
        </li>
    )
}