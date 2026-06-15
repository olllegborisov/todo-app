import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, removeTodo, editTodo } from '../../store/todoSlice'

import DeleteIcon from '../../assets/icons/delete.svg?react'
import EditIcon from '../../assets/icons/edit.svg?react'
import CheckIcon from '../../assets/icons/check.svg?react'
import CrossIcon from '../../assets/icons/cross.svg?react'

import styles from './TodoList.module.css'

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
                        <button
                            type="button"
                            className={styles.btn}
                            onClick={handleSave}
                            aria-label="Сохранить задачу"
                        >
                            <CheckIcon />
                        </button>
                        <button
                            type="button"
                            className={styles.btn}
                            onClick={handleCancel}
                            aria-label="Удалить задачу"
                        >
                            <CrossIcon />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.taskRow}>
                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                className={styles.checkboxInput}
                                checked={todo.isCompleted}
                                onChange={() => dispatch(toggleTodo(todo.id))}
                                aria-label={
                                    todo.isCompleted
                                        ? 'Отметить задачу как невыполненную'
                                        : 'Отметить задачу как выполненную'
                                }
                            />

                            <span
                                className={`${styles.checkboxVisual} ${
                                    todo.isCompleted
                                        ? styles.checkboxVisualChecked
                                        : ''
                                }`}
                                aria-hidden
                            >
                                {todo.isCompleted && (
                                    <CheckIcon className={styles.checkmarkIcon} />
                                )}
                            </span>
                        </label>

                        <span
                            className={`${styles.taskText} ${
                                todo.isCompleted ? styles.completed : ''
                            }`}
                        >
                            {todo.text}
                        </span>
                    </div>

                    <div className={styles.itemActions}>
                        <button
                            type="button"
                            className={styles.btn}
                            onClick={handleEditClick}
                            aria-label="Редактировать задачу"
                        >
                            <EditIcon />
                        </button>

                        <button
                            type="button"
                            className={styles.btn}
                            onClick={() => dispatch(removeTodo(todo.id))}
                            aria-label="Удалить задачу"
                        >
                            <DeleteIcon />
                        </button>
                    </div>
                </>
            )}
        </li>
    )
}