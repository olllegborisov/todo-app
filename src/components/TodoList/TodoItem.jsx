import { useState } from 'react'
import { motion as Motion } from 'motion/react'
import { useDispatch } from 'react-redux'
import { toggleTodo, removeTodo, editTodo } from '../../store/todoSlice'
import DeleteIcon from '../../assets/icons/delete.svg?react'
import EditIcon from '../../assets/icons/edit.svg?react'
import styles from './TodoList.module.css'

export default function TodoItem({todo, listType}) {
    
    const dispatch = useDispatch()


    const [editingId, setEditingId] = useState(null)
    const [text, setText] = useState(todo.text)

    function handleEditClick() {
        setEditingId(todo.id)
        setText(todo.text)
    }

    const handleSave = () => {
        dispatch(editTodo({ id: todo.id, text}))
        setEditingId(null)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSave()
        if (e.key === 'Escape') {
            setEditingId(null)
            setText(todo.text)
        }
    }

    const animations = {
    active: {
        enter: {
            opacity: { delay: 0.25, duration: 0.3, ease: 'easeInOut' },
            y: { delay: 0.25, duration: 0.3, ease: 'easeInOut' },
            filter: { delay: 0.25, duration: 0.3, ease: 'easeInOut' },
        },
        exit: {
            opacity: { delay: 0, duration: 0.3, ease: 'easeInOut' },
            y: { delay: 0, duration: 0.3, ease: 'easeInOut' },
            filter: { delay: 0, duration: 0.3, ease: 'easeInOut' },

        },
    },
    completed: {
        enter: {
            opacity: { delay: 0.35, duration: 0.3, ease: 'easeInOut' },
            y: { delay: 0.35, duration: 0.3, ease: 'easeInOut' },
            filter: { delay: 0.35, duration: 0.3, ease: 'easeInOut' },
        },
        exit: {
            opacity: { delay: 0, duration: 0.3, ease: 'easeInOut' },
            y: { delay: 0, duration: 0.3, ease: 'easeInOut' },
            filter: { delay: 0, duration: 0.3, ease: 'easeInOut' },
        },
    },
}
    const currentAnimation = animations[listType]

return (
        <Motion.li 
        layout="position"
        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
        animate={{ 
            opacity: 1,  
            y: 0,
            filter: 'blur(0px)',
            transition: currentAnimation.enter,
        }}
        exit={{ 
            opacity: 0,  
            y: 16,
            filter: 'blur(10px)' ,
            transition: currentAnimation.exit,
        }}
        transition={{
                layout: {
                type: 'spring',
                stiffness: 90,
                damping: 18,
            },
        }}
            className={styles.item}
        >
        {editingId === todo.id ? (
            <>
                <div className={styles.editRow}>
                    <input
                        className={styles.editInput}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <button type="button" className={styles.btn} onClick={handleSave} aria-label="Сохранить задачу">
                        <EditIcon />
                    </button>
                </div>
                <div className={styles.itemActions}>
                    <button type="button" className={styles.btn} onClick={() => dispatch(removeTodo(todo.id))} aria-label="Удалить задачу">
                        <DeleteIcon />
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
                            className={`${styles.checkboxVisual} ${todo.isCompleted ? styles.checkboxVisualChecked : ''}`}
                            aria-hidden
                        >
                            {todo.isCompleted ? <span className={styles.checkmark} /> : null}
                        </span>
                    </label>
                    <span
                        className={`${styles.taskText} ${todo.isCompleted ? styles.completed : ''}`}
                    >
                        {todo.text}
                    </span>
                </div>
                <div className={styles.itemActions}>
                    <button type="button" className={styles.btn} onClick={handleEditClick} aria-label="Редактировать задачу">
                        <EditIcon />
                    </button>
                    <button type="button" className={styles.btn} onClick={() => dispatch(removeTodo(todo.id))} aria-label="Удалить задачу">
                        <DeleteIcon />
                    </button>
                </div>
            </>
        )}
    </Motion.li>
    )
}